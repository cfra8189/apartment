import './About.css'
import { useTheme } from '../../contexts/ThemeContext.jsx'

export default function About() {
  const { colors } = useTheme()
  
  return (
    <div className="about-page relative overflow-hidden py-10 sm:py-14" style={{ backgroundColor: colors.background, marginTop: 'calc(-1 * var(--header-height))', minHeight: '100vh', width: '100%', paddingTop: 'clamp(100px, 12vh, 140px)' }}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4" style={{color: colors.text, letterSpacing: '0.15em'}}>
            MNFST
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 sm:w-20" style={{backgroundColor: colors.textSecondary}}></span>
            <p className="text-lg sm:text-xl tracking-widest uppercase" style={{color: colors.textSecondary}}>
              LUCTHELEO | Audio.Alchemist
            </p>
            <span className="h-px w-12 sm:w-20" style={{backgroundColor: colors.textSecondary}}></span>
          </div>
          <p className="text-lg sm:text-xl italic" style={{color: colors.text}}>
            Pleasantly lost in the space between signal and static.
          </p>
        </div>

        <div className="space-y-10">
          
          <section>
            <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              I create from the overflow. Twenty-three years navigating the intersection of classical training and digital chaos, Louisiana soul and systematic precision. Central Louisiana roots run deep—music creation since 2007, formal production education, life coaching training.
            </p>
            <p className="mt-4 text-base sm:text-lg italic" style={{color: colors.text}}>
              Someone who knows a little about a lot and a lot about a little.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-wide" style={{color: colors.text}}>The Problem</h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              The problem isn't lack of creativity. The problem is creative abundance without systematic capture. Most creative partnerships scatter brilliant ideas across sessions like seeds in the wind. Concepts emerge, energy builds, then everything disappears into the void between meetings. I solve creative overflow through systematic documentation, organized development, and shared ownership of unused collaborative assets.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-wide" style={{color: colors.text}}>The Architecture</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 border" style={{borderColor: colors.border, backgroundColor: colors.cardBg}}>
                <h3 className="text-xl font-bold mb-2" style={{color: colors.text}}>HTML</h3>
                <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>
                  Core creative foundation. Your authentic message before market pressure shapes it.
                </p>
              </div>
              <div className="p-6 border" style={{borderColor: colors.border, backgroundColor: colors.cardBg}}>
                <h3 className="text-xl font-bold mb-2" style={{color: colors.text}}>CSS</h3>
                <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>
                  How you present yourself when the world is watching. Visual identity that serves the work, not ego.
                </p>
              </div>
              <div className="p-6 border" style={{borderColor: colors.border, backgroundColor: colors.cardBg}}>
                <h3 className="text-xl font-bold mb-2" style={{color: colors.text}}>JS</h3>
                <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>
                  Market function without compromise. Audience connection that maintains creative integrity.
                </p>
              </div>
            </div>
            <p className="mt-6 text-base sm:text-lg italic text-center" style={{color: colors.text}}>
              Three layers. Each builds upon the previous. Complete creative architecture emerges through systematic development rather than creative chaos.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-wide" style={{color: colors.text}}>The Process</h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              Sessions combine immediate creative work with transferable systematic methods. You leave with both completed material and organizational approaches that serve future projects. This isn't dependency creation—it's systematic capability building.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              Documentation captures everything. Project folders organize by development layer. Session recordings preserve decisions and breakthroughs. Nothing gets lost. Everything builds upon everything. Unused creative assets become shared catalog content. Your collaborative overflow generates ongoing revenue rather than disappearing into digital archives. Creative partnership becomes creative investment.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-wide" style={{color: colors.text}}>The Foundation</h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              Louisiana spiritual tradition meets contemporary creative technology. Prayer and systematic organization. Ancestral wisdom and digital precision. The sacred and the professional occupy the same space without contradiction.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              All decisions start from spiritual foundation, move through abstract glimpses, process through mind and memory, then manifest through systematic action. The heart determines application. The body executes with documentation.
            </p>
            <p className="mt-4 text-base sm:text-lg font-medium" style={{color: colors.text}}>
              Excellence is measured by commitment. What gets written becomes real. The work speaks for itself.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-wide" style={{color: colors.text}}>The Practice</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border-l-2" style={{borderColor: colors.text}}>
                <div>
                  <h3 className="text-lg font-semibold" style={{color: colors.text}}>Order Line Conversation</h3>
                  <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>Fifteen minutes. Creative alignment assessment without sales pressure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border-l-2" style={{borderColor: colors.text}}>
                <div>
                  <h3 className="text-lg font-semibold" style={{color: colors.text}}>REVERIE Foundation</h3>
                  <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>Two hours. Complete project architecture establishment. Systematic organization that supports long-term creative development.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border-l-2" style={{borderColor: colors.text}}>
                <div>
                  <h3 className="text-lg font-semibold" style={{color: colors.text}}>RUMINATE Development</h3>
                  <p className="text-sm sm:text-base" style={{color: colors.textSecondary}}>Focused sessions. CSS and JS layer building through collaborative systematic approaches.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-wide" style={{color: colors.text}}>The Philosophy</h2>
            <p className="text-lg sm:text-xl italic mb-6" style={{color: colors.text}}>
              I don't explain the spaces. I invite you to wander them.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              Creative development serves the work, not the worker. Systematic approaches honor both artistic authenticity and professional sustainability. Spiritual foundation supports rather than opposes technological precision.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{color: colors.textSecondary}}>
              We are signal through static. Analog intuition meets digital creation. Louisiana heritage informs contemporary creative architecture. The mysterious and the systematic coexist without contradiction.
            </p>
          </section>

          <div className="h-px w-full" style={{backgroundColor: colors.border}}></div>

          <section className="text-center pb-8">
            <p className="text-sm tracking-widest mb-4" style={{color: colors.textSecondary}}>
              L-01001100 T-01010100 L-01001100
            </p>
            <p className="text-base sm:text-lg" style={{color: colors.textSecondary}}>
              Transdisciplinary artist. Systematic creative development. Louisiana roots, Atlanta operations.
            </p>
            <p className="mt-4 text-lg sm:text-xl font-medium" style={{color: colors.text}}>
              Signal through the static. Systematic transformation of creative potential into organized reality.
            </p>
            <p className="mt-6 text-xl sm:text-2xl font-bold tracking-widest" style={{color: colors.text}}>
              No ego. Just work.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
