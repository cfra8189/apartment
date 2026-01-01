import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState, useRef, useEffect } from 'react'
import logo from '../../assets/ltl-logo.PNG'
import { useTheme } from '../../contexts/ThemeContext.jsx'

function Navigation() {
    const [open, setOpen] = useState(false)
    const navRef = useRef(null)
    const { theme, toggleTheme, colors } = useTheme()

    useEffect(() => {
        function handleDocClick(e) {
            if (!navRef.current) return
            if (open && !navRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        function handleKey(e) {
            if (e.key === 'Escape' && open) setOpen(false)
        }

        document.addEventListener('mousedown', handleDocClick)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleDocClick)
            document.removeEventListener('keydown', handleKey)
        }
    }, [open])

    return (
        <>{/* Navigation Bar */}
            <header className="headerNav" style={{backgroundColor: colors.background, boxShadow: `0 4px 12px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.1)'}`}}>
                
                <nav ref={navRef} className="nav-container max-w-[1100px] mx-auto">
                    <button
                        className="nav-toggle"
                        aria-expanded={open}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen(o => !o)}
                    >
                        <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
                            <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                            <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </button>

                    <ul id="homeNav" className={`nav-links ${open ? 'open' : ''} flex flex-row items-center justify-center space-x-4 m-0 list-none`} onClick={() => setOpen(false)} style={{backgroundColor: open && theme === 'dark' ? '#222' : open ? '#d5d5d5' : 'transparent'}}>
                        <li><Link to="/" className='px-3 py-2' style={{color: colors.text}}>HOME</Link></li>
                        <li><Link to="/alchemy" className='px-3 py-2' style={{color: colors.text}}>ALCHEMY</Link></li> {/* Apartment Concept */}
                        <li className="nav-logo-item">
                            <a href="https://luctheleo.com" className="nav-logo-link" target="_blank" rel="noreferrer noopener">
                                <img src={logo} alt="Logo" className="logo-image" />
                            </a>
                        </li>
                        <li><Link to="/about" className='px-3 py-2' style={{color: colors.text}}>ABOUT</Link></li>
                        <li><Link to="/contact" className='px-3 py-2' style={{color: colors.text}}>CONTACT</Link></li>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="px-3 py-2"
                                aria-label="Toggle theme"
                                style={{background: 'none', border: 'none', cursor: 'pointer', color: colors.text, fontSize: 'inherit', display: 'inline-flex', alignItems: 'center'}}
                            >
                                {theme === 'dark' ? (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                        <circle cx="12" cy="12" r="4.5" />
                                        <line x1="12" y1="2.5" x2="12" y2="5.5" />
                                        <line x1="12" y1="18.5" x2="12" y2="21.5" />
                                        <line x1="4.6" y1="4.6" x2="6.7" y2="6.7" />
                                        <line x1="17.3" y1="17.3" x2="19.4" y2="19.4" />
                                        <line x1="2.5" y1="12" x2="5.5" y2="12" />
                                        <line x1="18.5" y1="12" x2="21.5" y2="12" />
                                        <line x1="4.6" y1="19.4" x2="6.7" y2="17.3" />
                                        <line x1="17.3" y1="6.7" x2="19.4" y2="4.6" />
                                    </svg>
                                ) : (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                        <path d="M20.5 13.5A8.5 8.5 0 0 1 10.5 3.5 8.5 8.5 0 1 0 20.5 13.5Z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation