import { useState, useEffect, useRef } from 'react'

export default function Nav({ openContact }) {
  const [navState, setNavState] = useState('') // '' or 'hidden'
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN - hide
        setNavState('hidden')
      } else {
        // Scrolling UP - show
        setNavState('')
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  const links = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'story' },
    { name: 'GALLERY', target: 'flavours' },
    { name: 'Contact', action: openContact }
  ]

  return (
    <nav className={`site-nav ${navState}`}>
      <div className="nav-inner">
        {/* Logo - Top left with animation */}
        <a href="#hero" className="logo" style={{ textDecoration: 'none' }}>
          <img
            src="/logo.gif"
            alt="Scoop Room Logo"
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Links - Right side with max gap */}
        <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', marginLeft: 'auto', paddingRight: '10px' }} className="hidden md:flex">
          {links.map(l => (
            l.action ? (
              <button key={l.name} onClick={l.action} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                {l.name}
              </button>
            ) : (
              <a key={l.name} href={`#${l.target}`} className="nav-link">{l.name}</a>
            )
          ))}
          <a href="https://google.com/maps/place/Scoop+Room/data=!4m2!3m1!1s0x0:0x103f63aefd31d333?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}>
              Find Us
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
        >
          <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', height: 2, background: '#76DB00',
                transformOrigin: 'left',
                transform: open && i === 0 ? 'rotate(45deg) translateY(-1px)' :
                           open && i === 1 ? 'scaleX(0)' :
                           open && i === 2 ? 'rotate(-45deg) translateY(1px)' : 'none',
                transition: 'transform 0.3s ease, opacity 0.3s',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </div>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(26,26,26,0.98)', backdropFilter: 'blur(20px)',
            padding: '2rem', borderBottom: '1px solid rgba(118,219,0,0.2)',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
          }}>
            {links.map(l => (
              l.action ? (
                <button key={l.name} onClick={() => { l.action(); setOpen(false); }}
                        className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '1rem' }}>
                  {l.name}
                </button>
              ) : (
                <a key={l.name} href={`#${l.target}`} className="nav-link"
                   onClick={() => setOpen(false)} style={{ fontSize: '1rem' }}>{l.name}</a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
