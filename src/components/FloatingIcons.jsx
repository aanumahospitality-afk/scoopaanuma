import { useEffect, useState } from 'react'

const icons = [
  // Cone
  <path d="M10 20 L15 35 L20 20 Q20 15 15 15 Q10 15 10 20" />,
  // Sundae
  <path d="M5 25 Q5 35 15 35 Q25 35 25 25 L5 25 M10 25 Q10 15 15 15 Q20 15 20 25" />,
  // Soft Serve
  <path d="M15 35 Q25 35 25 25 Q25 15 15 10 Q5 15 5 25 Q5 35 15 35" />,
  // Fork & Spoon
  <path d="M10 15 L10 30 M8 15 L12 15 M18 15 Q22 15 22 25 Q22 35 18 35 Q14 35 14 25 Q14 15 18 15" />,
  // Menu Board
  <path d="M8 10 L22 10 L22 35 L8 35 Z M10 15 L20 15 M10 20 L20 20 M10 25 L15 25" />,
  // Umbrella Table
  <path d="M5 20 Q15 10 25 20 L15 20 L15 35 M10 35 L20 35" />,
  // Popsicle
  <path d="M10 15 Q10 10 15 10 Q20 10 20 15 L20 30 Q20 32 18 32 L12 32 Q10 32 10 30 Z M14 32 L14 38 L16 38 L16 32" />,
  // People
  <path d="M10 15 Q10 10 15 10 Q20 10 20 15 L20 30 M15 30 L15 40 M10 40 L20 40" />, // Simplified
  // Wheelchair
  <path d="M20 30 Q10 30 10 20 Q10 10 20 10 M20 20 L25 20 L25 30" />, // Simplified
  // Stall
  <path d="M5 15 L25 15 L25 35 L5 35 Z M5 20 L25 20 M10 20 L10 35 M20 20 L20 35" />
]

const colors = ['#00FF00', '#f206ba', '#f2eb06']

export default function FloatingIcons() {
  const [stickers, setStickers] = useState([])

  useEffect(() => {
    // Reverted to moderate density
    const newStickers = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      iconIndex: Math.floor(Math.random() * icons.length),
      color: colors[Math.floor(Math.random() * colors.length)],
      top: Math.random() * 500 + 'vh', 
      left: Math.random() * 95 + 'vw',
      rotate: (Math.random() * 40 - 20) + 'deg',
      scale: Math.random() * 0.4 + 0.4,
      opacity: Math.random() * 0.12 + 0.04
    }))
    setStickers(newStickers)
  }, [])

  return (
    <div className="floating-icons" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {stickers.map(s => (
        <svg
          key={s.id}
          viewBox="0 0 30 45"
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            width: '40px',
            height: '60px',
            fill: 'none',
            stroke: s.color,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            transform: `rotate(${s.rotate}) scale(${s.scale})`,
            opacity: s.opacity,
          }}
        >
          {icons[s.iconIndex]}
        </svg>
      ))}
    </div>
  )
}
