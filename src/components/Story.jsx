export default function Story() {
  return (
    <section id="story" className="about-section" style={{ padding: 'var(--section-pad) 2vw', position: 'relative', overflow: 'hidden' }}>
      <div className="about-inner" style={{ maxWidth: '1400px', position: 'relative', zIndex: 1 }}>

        <div className="about-hero scroll-reveal" style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>◆ About Scoop Room</div>
          <h2 className="about-title font-display" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.9, color: '#1a1a1a', marginBottom: '1.5rem' }}>
            THE SCOOP<br />
            <span style={{ color: '#00FF00' }}>YOU CAN TRUST.</span>
          </h2>
          <p className="about-tagline font-script" style={{ fontSize: '2rem', color: '#333', maxWidth: '720px' }}>
            Fresh, playful, and unapologetically bold. Scoop Room brings premium vegetarian ice cream to every moment.
          </p>
        </div>

        <div className="about-grid">
          <div className="founder-card scroll-reveal magnetic-hover" style={{ background: 'rgba(255,255,255,0.96)', padding: '3rem', border: '1px solid rgba(0,255,0,0.12)' }}>
            <img
              src="/founder-photo.png"
              alt="Founder"
              className="founder-photo"
              style={{ width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }}
            />
            <h3 className="founder-name font-display" style={{ fontSize: '2.25rem', marginTop: '1.5rem', color: '#1a1a1a' }}>PALLAVII GUPTA</h3>
            <p className="founder-role" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#00FF00', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1.5rem' }}>Founder</p>
            <p className="founder-bio" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: 1.8, fontSize: '0.95rem', color: '#444' }}>
              Pallavii launched Scoop Room to bring refined ice cream into a modern moment. Serving since 2026
            </p>
          </div>

          <div className="about-copy">
            <div className="scroll-reveal" style={{ transitionDelay: '0.2s', marginBottom: '4rem' }}>
              <p className="about-lead" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.75rem' }}>
                Scoop Room was built on a simple idea: ice cream should be both elevated and accessible. We craft every flavor with premium ingredients, vibrant textures, and a fresh design language that feels modern and memorable.
              </p>

              <h4 className="font-display about-subtitle" style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '1rem' }}>SCOOP ROOM PROMISE</h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', lineHeight: 1.8, color: '#444', marginBottom: '2rem' }}>
                We deliver clean, refined ice cream with a bold edge. Every scoop is vegetarian, carefully balanced, and designed to brighten your day, no theatrics required.
              </p>

              <h4 className="font-display about-subtitle" style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '1rem' }}>OUR EXPERIENCE</h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', lineHeight: 1.8, color: '#444' }}>
                From our signature flavors to the way we serve them, Scoop Room is all about thoughtful detail, vibrant taste, and a chilled-out atmosphere that feels fresh and effortless.
              </p>
            </div>

            <div className="scroll-reveal about-cta-row" style={{ transitionDelay: '0.3s' }}>
              <button className="btn-primary magnetic-hover" style={{ padding: '1.2rem 3rem' }}>
                Explore the Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
