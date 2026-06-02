import { useEffect, useRef } from 'react'

const principles = [
  {
    num: '01',
    title: 'Purpose',
    body: 'To prove vegetarian ice cream can be precise, flavour-led and world-class without losing its sense of joy.',
    accent: '#00FF00',
  },
  {
    num: '02',
    title: 'Vision',
    body: 'To set the benchmark for refined, flavour-forward ice cream from India and earn a place on global tables.',
    accent: '#f2eb06',
  },
  {
    num: '03',
    title: 'Mission',
    body: 'Create ice cream for evolved palates and experiences that feel special without trying too hard.',
    accent: '#f206ba',
  },
]

export default function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="philosophy" ref={ref} className="philosophy-section">
      {/* Large bg text */}
      <div className="philosophy-bg-text">ROOM</div>

      <div className="philosophy-content">
        {/* Header */}
        <div className="philosophy-header">
          <div className="section-label fade-up" style={{ marginBottom: '1rem', color: '#1a1a1a' }}>◆ Guiding Principles</div>
          <div className="divider fade-up" />
          <h2 className="font-display fade-up philosophy-title">
            WHAT WE<br />
            <span style={{ color: '#00FF00' }}>STAND FOR.</span>
          </h2>
        </div>

        {/* Principles */}
        <div className="principles-grid">
          {principles.map((p, i) => (
            <div key={i} className="principle-card fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="principle-num" style={{ color: p.accent }}>{p.num}</div>
              <h3 className="principle-title">{p.title.toUpperCase()}</h3>
              <div className="principle-accent-line" style={{ background: p.accent }} />
              <p className="principle-body">
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
