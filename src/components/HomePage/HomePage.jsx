import './HomePage.css'
import bgVideo from '../../assets/bg5.mp4'
import { useTheme } from '../../contexts/ThemeContext.jsx'

function HomePage () {
    const { colors } = useTheme()
    
    return (
        <div className="home-hero" style={{ backgroundColor: colors.background, color: colors.text }}>
            <video 
                className="home-hero__video"
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <h1 className="home-hero__title" style={{ color: colors.text }}>
                My Louisiana Sky
            </h1>
        </div>
    );
}
export default HomePage