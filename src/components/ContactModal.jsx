import { useEffect } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#f2eb06',
        zIndex: 20000,
        overflowY: 'auto',
        animation: 'fadeIn 0.4s ease forwards'
      }}
    >
      {/* Header / Nav Area */}
      <div style={{
        padding: '14px 2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        {/* Logo */}
        <div className="logo">
          <img 
            src="/logo.gif" 
            alt="Scoop Room Logo" 
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
          />
        </div>

        {/* Action Area */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center', display: 'flex' }}>
            <a href="#hero" onClick={onClose} className="nav-link">Home</a>
            <a href="#story" onClick={onClose} className="nav-link">About</a>
            <a href="#flavours" onClick={onClose} className="nav-link">Flavours</a>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.75rem',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 800,
              letterSpacing: '0.15em',
              cursor: 'pointer',
              color: '#1a1a1a',
              textTransform: 'uppercase',
              padding: '0.5rem 1rem',
              borderLeft: '1px solid rgba(0,0,0,0.1)',
              marginLeft: '1rem'
            }}
          >
            CLOSE [×]
          </button>
        </div>
      </div>

      <div style={{ padding: 'var(--section-pad) 5vw 4rem', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Title Section */}
        <div style={{ marginBottom: '6rem' }}>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 0.8, color: '#1a1a1a', marginBottom: '2rem' }}>
            WE’D LOVE TO <br />
            <span style={{ color: '#00FF00' }}>HEAR FROM YOU.</span>
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.2rem', color: '#666' }}>
            Got a question, feedback, or just want to say hi? Reach out to our team.
          </p>
        </div>

        {/* Info Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          marginBottom: '6rem' 
        }}>
          {/* Location Column */}
          <div style={{ marginLeft: '-5vw', paddingLeft: 0 }}>
            <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#1a1a1a' }}>OUR LOCATION</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '100px', height: '140px', margin: 0, padding: 0, display: 'flex', alignItems: 'stretch', justifyContent: 'flex-start', overflow: 'hidden', marginLeft: 0 }}>
                <img src="/logo.gif" alt="Scoop Room logo animation" style={{ width: '100px', height: '140px', objectFit: 'cover', display: 'block', margin: 0, padding: 0 }} />
              </div>
              <p style={{ fontFamily: 'Manrope', color: '#444', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                Ground Floor, 151, 2nd Cross Rd, Stage 2, Domlur,<br />Bengaluru, Karnataka 560071
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                <a href="tel:9035045329" style={{ fontFamily: 'Manrope', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>+91 90350 45329</a>
              </div>
            </div>
          </div>

          {/* Support/Social Column */}
          <div>
            <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a1a1a' }}>SUPPORT</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: 'Manrope', color: '#666', marginBottom: '1rem' }}>General Inquiries & Feedback</p>
              <a href="mailto:contact@scooproom.in" style={{ 
                fontFamily: 'Manrope', 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                color: '#1a1a1a', 
                textDecoration: 'none', 
                borderBottom: '2px solid #00FF00' 
              }}>contact@scooproom.in</a>
            </div>
            
            
            <div style={{ marginTop: '1.5rem' }}>
              <h4 className="font-display" style={{ fontSize: '1.8rem', letterSpacing: '0.02em', color: '#f206ba', textTransform: 'uppercase', marginBottom: '1rem' }}>Social</h4>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <a href="https://www.instagram.com/scooproom.in?igsh=MXM5cTVsbXlocGE4dQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', color: '#1a1a1a' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div style={{ marginBottom: '3rem', background: '#2a2a2a', padding: '2rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
          <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#FF007F' }}>SEND US A MESSAGE</h3>
          <div style={{ width: '60px', height: '2px', background: '#FF007F', marginBottom: '3rem' }} />
          
          <form style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={{ 
                  padding: '1.2rem', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '8px',
                  fontFamily: 'Manrope',
                  fontSize: '0.9rem',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  cursor: 'text'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.12)';
                  e.target.style.borderColor = 'rgba(242,6,186,0.5)';
                  e.target.style.boxShadow = '0 0 15px rgba(242,6,186,0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <input 
                type="email" 
                placeholder="someone@example.com" 
                style={{ 
                  padding: '1.2rem', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '8px',
                  fontFamily: 'Manrope',
                  fontSize: '0.9rem',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  cursor: 'text'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.12)';
                  e.target.style.borderColor = 'rgba(242,6,186,0.5)';
                  e.target.style.boxShadow = '0 0 15px rgba(242,6,186,0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows="5"
              style={{ 
                padding: '1.2rem', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '8px',
                fontFamily: 'Manrope',
                fontSize: '0.9rem',
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                resize: 'none',
                transition: 'all 0.3s ease',
                outline: 'none',
                cursor: 'text'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.12)';
                e.target.style.borderColor = 'rgba(242,6,186,0.5)';
                e.target.style.boxShadow = '0 0 15px rgba(242,6,186,0.2)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.08)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              style={{ justifySelf: 'start', padding: '1.2rem 4rem', transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(242,6,186,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              onClick={(e) => e.preventDefault()}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
          <a href="https://www.google.com/maps/place/Scoop+Room/@12.963991,77.6385869,3a,75y,130.87h,90t/data=!3m10!1e1!3m8!1ssod7CC59ctbwFVUZzHU5Nw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dsod7CC59ctbwFVUZzHU5Nw%26yaw%3D130.86559!7i16384!8i8192!9m2!1b1!2i46!4m9!3m8!1s0x3bae155969bb78f3:0x103f63aefd31d333!8m2!3d12.9639245!4d77.6386623!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11njx_0nkw?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '500px', 
              background: 'url("/images/map_preview.png") center center / cover rgb(240, 240, 240)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer' 
            }}>
              <div className="btn-primary" style={{ 
                padding: '1.2rem 3rem', 
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 10px 30px', 
                pointerEvents: 'none' 
              }}>VIEW LOCATION →</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
