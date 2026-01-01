import accessKeys from '../../../../../assets/access-keys.png'
import { useTheme } from '../../../../../contexts/ThemeContext.jsx'

export default function Amenities() {
  const { colors } = useTheme()
  
  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh', paddingTop: '6rem', paddingBottom: '8rem' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl 2xl:text-8xl" style={{color: colors.text}}>
            THE COLLECTIVE
          </h1>
        </div>

        {/* Two-column layout: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={accessKeys}
              alt="Access keys"
              style={{ maxWidth: '520px', width: '100%', height: 'auto', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.55))' }}
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <p className="text-lg" style={{color: colors.textSecondary}}>
              Your entry into The B0X includes an assigned Resident Box containing your Box ID, documentation, and the secure communication device.
            </p>

            {/* Assigned Support */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold" style={{color: colors.text}}>Assigned Support:</h2>
              <dl className="space-y-4" style={{color: colors.textSecondary}}>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Personal/Administrative Assistant: </dt>
                  <dd className="inline">Assigned to your specific Box ID.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Personal Chef: </dt>
                  <dd className="inline">On-site culinary optimization.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Project Manager: </dt>
                  <dd className="inline">Driving the concept to concrete.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Legal & Marketing Teams: </dt>
                  <dd className="inline">Protecting and positioning your IP.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Styling Team: </dt>
                  <dd className="inline">Visual identity management.</dd>
                </div>
              </dl>
            </div>

            {/* The Infrastructure */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold" style={{color: colors.text}}>The Infrastructure:</h2>
              <dl className="space-y-4" style={{color: colors.textSecondary}}>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Private Events: </dt>
                  <dd className="inline">Theatre, Venue (In/Out), Conference Room.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Resident Gallery: </dt>
                  <dd className="inline">Curated exhibition of resident work.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>The Labyrinth: </dt>
                  <dd className="inline">Courtyard for deep-walk meditation.</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{color: colors.text}}>Access: </dt>
                  <dd className="inline">Private Jet, Car Service, and Concierge.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
