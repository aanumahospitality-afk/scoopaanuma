export default function Hero() {
  return (
    <section id="hero" className="hero-section">

      <div className="hero-glow-green"></div>
      <div className="hero-glow-pink"></div>

      <div className="hero-content" style={{}}>
        <div className="hero-logo-top-left scroll-reveal revealed" style={{ transitionDelay: '0.05s' }}>
          <div className="hero-logo-ring"></div>
          <img className="hero-logo-gif" src="/logo.gif" alt="Scoop Room animated logo" />
        </div>

        <div className="section-label scroll-reveal revealed" style={{ marginBottom: '1.5rem', color: 'rgb(26, 26, 26)', transitionDelay: '0.1s' }}>
          ◆ Made in India, Built for the World
        </div>

        <p className="font-script hero-tagline scroll-reveal revealed" style={{ transitionDelay: '0.2s' }}>
          Hot gossip. Cold scoops.
        </p>

        <p className="hero-description scroll-reveal revealed" style={{ transitionDelay: '0.3s' }}>
          Refined but relaxed. Joyful but controlled. <br />
          Vegetarian ice cream that doesn't need <br />
          theatrics. Just balance, technique, and restraint.
        </p>

        <div className="hero-buttons scroll-reveal revealed" style={{ transitionDelay: '0.4s' }}>
          <a href="#flavours"><button className="btn-primary magnetic-hover">Explore Gallery</button></a>
          <a href="#story"><button className="btn-outline magnetic-hover" style={{ borderColor: 'rgb(26, 26, 26)', color: 'rgb(26, 26, 26)' }}>Our Story</button></a>
        </div>

        <div className="hero-stats scroll-reveal revealed" style={{ transitionDelay: '0.5s' }}>
          <div className="hero-stat-card magnetic-hover">
            <div className="hero-stat-value">100%</div>
            <div className="hero-stat-label">Eggless</div>
          </div>
          <div className="hero-stat-card magnetic-hover">
            <div className="hero-stat-value">30+</div>
            <div className="hero-stat-label">Flavours</div>
          </div>
          <div className="hero-stat-card magnetic-hover">
            <div className="hero-stat-value">0</div>
            <div className="hero-stat-label">Theatrics</div>
          </div>
        </div>
      </div>

      <div className="hero-visual-area">
        <div className="hero-mascot scroll-reveal revealed" style={{ transitionDelay: '0.65s' }}>
          <img className="hero-mascot-img" alt="Scoop Star Skater Mascot" src="/scoop-star-pink.png" />
        </div>
      </div>

    </section>
  )
}
