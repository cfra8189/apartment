import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState, useRef, useEffect } from 'react'

function Navigation() {
    const [open, setOpen] = useState(false)
    const navRef = useRef(null)

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
            <header className="headerNav">
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

                    <ul id="homeNav" className={`nav-links ${open ? 'open' : ''} flex flex-row items-center justify-center space-x-4 m-0 list-none`} onClick={() => setOpen(false)}>
                        <li><Link to="/" className='px-3 py-2'>HOME</Link></li>
                        <li><Link to="/alchemy" className='px-3 py-2'>ALCHEMY</Link></li> {/* Apartment Concept */}
                        <li><Link to="/about" className='px-3 py-2'>ABOUT</Link></li>
                        <li><Link to="/contact" className='px-3 py-2'>CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation