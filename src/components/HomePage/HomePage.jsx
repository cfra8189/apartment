import bgVideo from '../../assets/bg5.mp4'
import { useTheme } from '../../contexts/ThemeContext.jsx'

function HomePage () {
    const { colors } = useTheme()
    
    return (
        <div style={{ position: 'relative', backgroundColor: colors.background, color: colors.text, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', overflow: 'hidden' }}>
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
                    zIndex: 0
                }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 8rem)', position: 'relative', zIndex: 1, color: colors.text }}>My Louisiana Sky</h1>
        </div>
    );
}
export default HomePage