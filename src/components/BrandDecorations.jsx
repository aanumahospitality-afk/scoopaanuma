import { useEffect, useRef } from 'react'

/* ── Brand SVG Icons ── */
const IceCreamCone = ({ color = '#00FF00', size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58L20 28h24L32 58z" fill={color} opacity="0.15" />
    <path d="M32 58L20 28h24L32 58z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="32" cy="22" r="10" fill={color} opacity="0.12" />
    <circle cx="32" cy="22" r="10" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="26" cy="18" r="6" fill={color} opacity="0.08" />
    <circle cx="38" cy="18" r="6" fill={color} opacity="0.08" />
  </svg>
)

const ScoopDrip = ({ color = '#f206ba', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C14 4 8 12 8 20c0 6 4 10 8 10h16c4 0 8-4 8-10C40 12 34 4 24 4z" fill={color} opacity="0.1" />
    <path d="M16 30c0 4-2 10-2 14" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <path d="M32 30c0 3-1 8-1 12" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    <circle cx="24" cy="16" r="3" fill={color} opacity="0.15" />
  </svg>
)

const DiamondBullet = ({ color = '#f2eb06', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="2" width="14" height="14" rx="2" transform="rotate(45 12 2)" fill={color} opacity="0.15" />
    <rect x="12" y="2" width="14" height="14" rx="2" transform="rotate(45 12 2)" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
  </svg>
)

const SwirlAccent = ({ color = '#00FF00', size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C18 8 8 18 8 32s10 24 24 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" fill="none" />
    <path d="M32 16C22 16 16 22 16 32s6 16 16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.15" fill="none" />
    <path d="M32 24c-6 0-8 4-8 8s2 8 8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.1" fill="none" />
  </svg>
)

const StarBurst = ({ color = '#f206ba', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2l2 6 6 0-5 4 2 6-5-4-5 4 2-6-5-4 6 0z" fill={color} opacity="0.12" />
    <path d="M16 2l2 6 6 0-5 4 2 6-5-4-5 4 2-6-5-4 6 0z" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
)

const WaveLine = ({ color = '#00FF00', size = 120 }) => (
  <svg width={size} height={size * 0.25} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15 Q15 0 30 15 Q45 30 60 15 Q75 0 90 15 Q105 30 120 15" stroke={color} strokeWidth="1.5" fill="none" opacity="0.15" strokeLinecap="round" />
  </svg>
)

/* ── Decoration items with positions ── */
const decorations = [
  // Hero section decorations
  { Icon: DiamondBullet, color: '#00FF00', size: 18, top: '12%', left: '3%', delay: 0, speed: 7 },
  { Icon: StarBurst, color: '#f206ba', size: 22, top: '8%', right: '8%', delay: 1.5, speed: 9 },
  { Icon: SwirlAccent, color: '#00FF00', size: 44, bottom: '22%', left: '5%', delay: 0.8, speed: 11 },
  
  // Between hero and ticker
  { Icon: DiamondBullet, color: '#f2eb06', size: 14, top: '28%', right: '4%', delay: 2, speed: 8 },
  { Icon: IceCreamCone, color: '#f206ba', size: 36, top: '35%', left: '2%', delay: 1.2, speed: 10 },
  
  // Story section area
  { Icon: ScoopDrip, color: '#00FF00', size: 32, top: '48%', right: '3%', delay: 0.5, speed: 12 },
  { Icon: DiamondBullet, color: '#f206ba', size: 16, top: '52%', left: '6%', delay: 2.5, speed: 7 },
  { Icon: StarBurst, color: '#f2eb06', size: 28, top: '55%', right: '6%', delay: 1.8, speed: 9 },
  
  // Flavours section area
  { Icon: SwirlAccent, color: '#f206ba', size: 40, top: '68%', left: '3%', delay: 0.3, speed: 13 },
  { Icon: IceCreamCone, color: '#00FF00', size: 42, top: '72%', right: '2%', delay: 1, speed: 11 },
  { Icon: DiamondBullet, color: '#f2eb06', size: 20, top: '78%', left: '7%', delay: 2.2, speed: 8 },
  
  // Footer area
  { Icon: StarBurst, color: '#00FF00', size: 24, top: '88%', right: '5%', delay: 0.7, speed: 10 },
  { Icon: ScoopDrip, color: '#f206ba', size: 28, top: '92%', left: '4%', delay: 1.5, speed: 9 },
]

/* ── Scroll-triggered reveal hook ── */
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
        }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    
    const el = ref.current
    if (el) {
      el.querySelectorAll('.scroll-reveal').forEach(child => observer.observe(child))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ── Main Decorations Layer ── */
export default function BrandDecorations() {
  return (
    <div className="brand-decorations-layer" aria-hidden="true">
      {decorations.map((d, i) => {
        const style = {
          position: 'absolute',
          top: d.top,
          left: d.left,
          right: d.right,
          bottom: d.bottom,
          animationDelay: `${d.delay}s`,
          animationDuration: `${d.speed}s`,
          zIndex: 1,
        }
        return (
          <div key={i} className="brand-deco-item" style={style}>
            <d.Icon color={d.color} size={d.size} />
          </div>
        )
      })}
    </div>
  )
}

export { useScrollReveal, IceCreamCone, ScoopDrip, DiamondBullet, SwirlAccent, StarBurst, WaveLine }
