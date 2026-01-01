import { useTheme } from '../../contexts/ThemeContext.jsx'

export default function About() {
  const { colors } = useTheme()
  
  return (
    <div className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: colors.background, marginTop: 'calc(-1 * var(--header-height))', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl" style={{color: colors.text}}>About</h2>
          <div className="mt-8 space-y-6 text-lg sm:text-xl/7" style={{color: colors.textSecondary}}>
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
