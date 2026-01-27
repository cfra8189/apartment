import './HomePage.css'
import bgImage from '../../assets/Untitled.GIF'
import { useTheme } from '../../contexts/ThemeContext.jsx'

function HomePage () {
    const { colors } = useTheme()
    
    return (
        <div className="home-hero" style={{ backgroundColor: colors.background, color: colors.text }}>
            <img
                src={bgImage}
                alt="Background animation"
                className="home-hero__video"
                aria-hidden="true"
            />
            <h1 className="home-hero__title" style={{ color: colors.text }}>
                My Louisiana Sky
            </h1>
        </div>
    );
}
export default HomePage