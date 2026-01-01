import './About.css'
import { useTheme } from '../../contexts/ThemeContext.jsx'

export default function About() {
  const { colors } = useTheme()
  
  return (
    <div className="about-page relative overflow-hidden py-10 sm:py-14" style={{ backgroundColor: colors.background, marginTop: 'calc(-1 * var(--header-height))', minHeight: '100vh', display: 'flex', alignItems: 'center', width: '100%', paddingTop: 'clamp(80px, 10vh, 120px)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{color: colors.text}}>About</h2>
          <div className="mt-6 space-y-3 text-base sm:text-lg/6" style={{color: colors.textSecondary}}>
            <p style={{color: colors.text}}>
              I don't explain the spaces. I invite you to wander them.
            </p>
            <p>
              Creative development serves the work, not the worker. Systematic approaches honor both artistic authenticity and professional sustainability. Spiritual foundation supports rather than opposes technological precision.
            </p>
            <p>
              We are signal through static. Analog intuition meets digital creation. Louisiana heritage informs contemporary creative architecture. The mysterious and the systematic coexist without contradiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
