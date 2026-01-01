import { useTheme } from '../../../../../contexts/ThemeContext.jsx'

export default function Integrated() {
  const { colors } = useTheme()
  
  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6" style={{color: colors.textSecondary, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.textSecondary}}>
              get IN.toGreat('ed')
            </div>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl 2xl:text-8xl" style={{color: colors.text}}>
            OPTIMIZE
          </h1>
        </div>

        <div className="space-y-12 text-center">
          <p className="text-lg" style={{color: colors.textSecondary}}>
            Just because you can’t bring your technology, doesn’t mean it is not em-BED-ed. We provide the infrastructure for total integration.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold" style={{color: colors.text}}>The Program:</h2>
            <dl className="space-y-4" style={{color: colors.textSecondary}}>
              <div>
                <dt className="font-semibold inline" style={{color: colors.text}}>Therapy & Coaching: </dt>
                <dd className="inline">Mental performance and ego-deconstruction.</dd>
              </div>
              <div>
                <dt className="font-semibold inline" style={{color: colors.text}}>Seminars & Workshops: </dt>
                <dd className="inline">Collective intelligence sessions.</dd>
              </div>
              <div>
                <dt className="font-semibold inline" style={{color: colors.text}}>Master_Doc Management: </dt>
                <dd className="inline">Automated asset organization.</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color: colors.text}}>The Data Structure:</h2>
            <p style={{color: colors.textSecondary}}>
              Every concept is stored, secured, and licensed within the system: Box &gt; MASTER_DOC &gt; 2026 &gt; PRJT &gt; Media_Type &gt; Metadata
            </p>
          </div>

          <p className="text-lg font-semibold" style={{color: colors.text}}>
            Work that takes nothing. Work that gives.
          </p>
        </div>
      </div>
    </div>
  )
}
