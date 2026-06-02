export default function Footer({ openContact }) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" style={{ background: 'transparent', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      {/* High-Impact Contact Section */}
      <div className="scroll-reveal" style={{
        background: '#f2eb06',
        padding: 'var(--section-pad) 2vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="slide-up-animate" style={{ maxWidth: '800px' }}>
          
          <h2 className="font-display footer-cta-heading" style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            lineHeight: 1,
            marginBottom: '3.5rem',
            color: '#f206ba'
          }}>
            LESS SUGARCOATING,<br />
            <span style={{ color: '#00FF00' }}>MOOORE SUBSTANCE.</span><br />
            THIS IS FLAVOOOOOUR<br />
            <span style={{ color: '#00FF00' }}>DOOOOOOOONE RIGHT.</span>
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button 
              onClick={openContact}
              className="contact-btn magnetic-hover"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      {/* Modern Simplified Footer Body */}
      <div className="scroll-reveal" style={{ padding: 'var(--section-pad) 2vw 4rem', maxWidth: '1100px', margin: '0 auto' }}>



        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '6rem',
        }} className="md:grid-cols-2 grid-cols-1">
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display" style={{ 
              fontSize: '2rem', 
              color: '#1a1a1a', 
              marginBottom: '2rem',
              letterSpacing: '0.02em'
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { name: 'Home', url: '#hero' },
                { name: 'About', url: '#story' },
                { name: 'Gallery', url: '#flavours' },
                { name: 'Contact', url: '#contact' },
                { name: 'Join Us', url: '#' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="footer-link" 
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif',
                      color: '#444'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h4 className="font-display" style={{ 
              fontSize: '2rem', 
              color: '#1a1a1a', 
              marginBottom: '2rem',
              letterSpacing: '0.02em'
            }}>Get In Touch</h4>
            <a href="mailto:contact@scooproom.in" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              color: '#1a1a1a',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              <span style={{ color: '#00FF00', fontSize: '1.2rem' }}>✉</span>
              contact@scooproom.in
            </a>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/scooproom.in?igsh=MXM5cTVsbXlocGE4dQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="magnetic-hover" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', color: '#1a1a1a' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.05)',
          paddingTop: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <p style={{ color: '#999', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif' }}>
            © {year} Scoop Room. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
