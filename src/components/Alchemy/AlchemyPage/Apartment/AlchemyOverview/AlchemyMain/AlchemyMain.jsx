import './AlchemyMain.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../../../../contexts/ThemeContext.jsx'
import ltl2026Video from '../../../../../../assets/LTL_2026.MP4'
import ne01Video from '../../../../../../assets/ne0-1.MP4'

export default function AlchemyMain() {
  const { colors, theme } = useTheme()
  
  return (
    <div style={{backgroundColor: colors.background, position: 'relative'}} className="min-h-screen flex flex-col w-full overflow-auto alchemy-full">
      {/* Background video - blurred and darkened */}
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
          filter: theme === 'dark' ? 'blur(20px) brightness(0.3)' : 'blur(20px) brightness(1.05)',
          opacity: theme === 'dark' ? 1 : 0.45,
          transform: 'scale(1.1)'
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
      
      <div className="relative flex-grow flex flex-col justify-center px-6 lg:px-8 pb-24 pt-24" style={{zIndex: 1}}>
        <div className="mx-auto w-full alchemy-shell">
          

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center content-grid">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center lg:text-left content-pane">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl" style={{color: colors.text, fontFamily: 'LEDLIGHT', fontSize: 'clamp(110px, 11vw, 240px)'}}>
                box
              </h1>
             {/* Badge */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm/6" style={{color: colors.textSecondary, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.textSecondary}}>
              CONCEPT = CONCRETE
            </div>
          </div>
              
              <div className="space-y-6">
                             
                <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary, fontSize: 'clamp(1rem, 0.45vw + 1rem, 1.4rem)'}}>
                  No Outside Tech | Everything is em-BED-ed.
                </p>
                
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <Link
                  to="/contact"
                  className="rounded-md px-7 py-3 text-base font-semibold transition-colors"
                  style={{backgroundColor: colors.text, color: colors.background, border: `1px solid ${colors.text}`}}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = colors.textSecondary; e.target.style.color = colors.text; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = colors.text; e.target.style.color = colors.background; }}
                >
                  Schedule an Interview
                </Link>
                <p className="text-xs italic" style={{color: colors.textSecondary}}>
                  Acceptance is subject to Associate review.
                </p>
              </div>
              
            </div>

            {/* Right side - Video feature box */}
            <div className="flex justify-center lg:justify-end">
              <div className="feature-video-wrap">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                    <source src={ne01Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
