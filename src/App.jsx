import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Story from './components/Story.jsx'
import Flavours from './components/Flavours.jsx'
import Footer from './components/Footer.jsx'
import ContactModal from './components/ContactModal.jsx'
import BrandDecorations from './components/BrandDecorations.jsx'

function CursorGlow() {
  const glowRef = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px'
        glowRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={glowRef} className="cursor-glow" />
}

/* ── Scroll-triggered section reveal ── */
function useGlobalScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    
    // Re-observe on DOM changes for dynamic content
    const mutationObs = new MutationObserver(() => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el))
    })
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])
}

/* ── Parallax on mouse move for decorations ── */
function useParallaxEffect() {
  useEffect(() => {
    const items = document.querySelectorAll('.brand-deco-item')
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      items.forEach((item, i) => {
        const depth = (i % 3 + 1) * 4
        item.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  useGlobalScrollReveal()
  useParallaxEffect()

  return (
    <>
      <CursorGlow />
      <BrandDecorations />
      <Nav openContact={() => setIsContactOpen(true)} />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Flavours />
      </main>
      <Footer openContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
