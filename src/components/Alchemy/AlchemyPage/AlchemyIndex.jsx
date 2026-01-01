import { Link } from 'react-router-dom'
import './Alchemy.css'
import { useTheme } from '../../../contexts/ThemeContext.jsx'
import ltl2026Video from '../../../assets/LTL_2026.MP4'

export default function AlchemyIndex() {
  const { colors, theme } = useTheme()
  
  return (
    <div style={{ position: 'relative', minHeight: 'calc(100vh - var(--header-height))', overflow: 'hidden', backgroundColor: 'transparent' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          filter: theme === 'dark' ? 'blur(4px) brightness(0.35)' : 'blur(4px) brightness(1.05)',
          opacity: theme === 'dark' ? 1 : 0.48,
          transform: 'scale(1.08)'
        }}
      >
        <source src={ltl2026Video} type="video/mp4" />
      </video>
      <div
        className="fixed inset-0"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.55)' : 'rgba(229, 229, 229, 0.55)',
          zIndex: 0
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-start text-center px-6" style={{minHeight: 'calc(100vh - var(--header-height))', paddingTop: '0', paddingBottom: '4rem'}}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 8rem)', margin: '0 0 1.5rem', color: colors.text }}>Alchemy</h1>
        <h3 className="project-titles" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', margin: '0 0 1.25rem', color: colors.textSecondary }}>Projects</h3>
        <ul className="project-list" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.5rem)', color: colors.text }}>
          <li className="project-item">
            <Link
              to="apartment"
              style={{ color: colors.text, transition: 'color 0.2s ease, letter-spacing 0.2s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? '#f5f5f5' : '#111111'
                e.currentTarget.style.letterSpacing = '0.04em'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text
                e.currentTarget.style.letterSpacing = 'normal'
              }}
            >
              Ne0 - Concept Housing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
