import { useTheme } from '../../contexts/ThemeContext.jsx'

export default function ThankYou() {
  const { colors } = useTheme()
  
  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh', marginTop: 'calc(-1 * var(--header-height))' }} className="flex items-center justify-center px-6 py-24 sm:py-32">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: colors.text }}>Thank you.</h1>
            <p className="mt-4 text-lg" style={{ color: colors.textSecondary }}>
              Your message has been received. We'll be in touch soon.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/"
            className="rounded-md px-6 py-3 text-sm font-semibold transition-colors"
            style={{ backgroundColor: colors.text, color: colors.background, border: `1px solid ${colors.text}` }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = colors.textSecondary; e.target.style.color = colors.text; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = colors.text; e.target.style.color = colors.background; }}
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  )
}
