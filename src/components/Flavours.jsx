import { useState } from 'react'

const flavours = [
  {
    img: '/strawberry.png',
    tag: 'Signature',
    name: 'Wild Strawberry',
    desc: 'Real fruit. No shortcuts. A burst of garden-fresh flavour in every scoop.',
    accent: '#f206ba',
  },
  {
    img: '/chocolate.png',
    tag: 'Bestseller',
    name: 'Dark Chocolate',
    desc: 'Single-origin cocoa. Intense, bitter-sweet, and entirely unapologetic.',
    accent: '#00FF00',
  },
  {
    img: '/mango.png',
    tag: 'Seasonal',
    name: 'Saffron Mango',
    desc: 'Alphonso mango meets hand-picked saffron. India\'s finest, frozen at peak.',
    accent: '#f2eb06',
  },
]

export default function Flavours() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="flavours" className="flavours-section">
      <div className="flavours-container">
        {/* Header */}
        <div className="flavours-header">
          <div>
            <div className="section-label scroll-reveal" style={{ marginBottom: '1rem' }}>◆ ON THE GALLERY</div>
            <div className="divider scroll-reveal" />
            <h2 className="font-display scroll-reveal flavours-title">
              FLAVOUR<br />
              <span style={{ color: '#00FF00' }}>FORWARD.</span>
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="principles-grid">
          {flavours.map((f, i) => (
            <div
              key={i}
              className="flavour-card scroll-reveal magnetic-hover"
              style={{
                transitionDelay: `${i * 0.12}s`,
                '--accent': f.accent,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Neon glow overlay on hover */}
              <div
                className="flavour-neon-glow"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  background: `radial-gradient(circle at 50% 50%, ${f.accent}15 0%, transparent 70%)`,
                }}
              />

              <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

              {/* Floating content overlay */}
              <div className="flavour-card-overlay" />

              {/* Content that slides up on hover */}
              <div
                className="flavour-card-content"
                style={{
                  transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(20px)',
                  opacity: hoveredIndex === i ? 1 : 0.7,
                  transition: 'transform 0.4s ease, opacity 0.4s ease',
                }}
              >
                <span
                  className="flavour-tag"
                  style={{
                    color: f.accent,
                    textShadow: hoveredIndex === i ? `0 0 20px ${f.accent}` : 'none',
                    transition: 'text-shadow 0.4s ease',
                  }}
                >
                  {f.tag}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '2rem',
                    color: '#fff',
                    marginBottom: '0.5rem',
                    textShadow: hoveredIndex === i ? `0 0 30px ${f.accent}` : 'none',
                    transition: 'text-shadow 0.4s ease',
                  }}
                >
                  {f.name}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  maxWidth: '280px',
                }}>
                  {f.desc}
                </p>
                <div
                  className="flavour-card-arrow"
                  style={{
                    borderColor: hoveredIndex === i ? f.accent : 'rgba(255,255,255,0.2)',
                    background: hoveredIndex === i ? f.accent : 'transparent',
                    transform: hoveredIndex === i ? 'rotate(-45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hoveredIndex === i ? '#000' : '#fff'} strokeWidth="2" style={{ transition: 'stroke 0.2s' }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              {/* Corner accent lines */}
              <div
                className="flavour-corner-accent"
                style={{
                  borderColor: hoveredIndex === i ? f.accent : 'transparent',
                  boxShadow: hoveredIndex === i ? `inset 0 0 20px ${f.accent}20` : 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA removed per request */}
      </div>
    </section>
  )
}
