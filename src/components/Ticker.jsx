const phrases = [
  'Hot Gossip. Cold Scoops.',
  'Fresh Scoop Today.',
  'What\'s the Scoop?',
  'The Inside Scoop.',
  'Worth the Scoop.',
  'Spill the Scoop.',
  'Stay Scooped.',
  'Double Scoop News.',
  'Latest Scoop In.',
  'Made in India.',
]

export default function Ticker() {
  const repeated = [...phrases, ...phrases]

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {repeated.map((p, i) => (
          <span key={i} className="ticker-item">
            {p}
            <span className="ticker-bullet">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
