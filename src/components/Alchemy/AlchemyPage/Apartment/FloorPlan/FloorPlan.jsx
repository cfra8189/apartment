import React, { useRef, useState, useEffect } from 'react'
import './FloorPlan.css'
import floorPlanImage from '../../../../../assets/ne0_floorplan.png'
import { useTheme } from '../../../../../contexts/ThemeContext.jsx'

export default function FloorPlan() {
        const carouselRef = useRef(null)
        const { colors } = useTheme()
        const [imageLoaded, setImageLoaded] = useState(false)

        useEffect(() => {
                const img = new Image()
                img.src = floorPlanImage
                if (img.complete) {
                        setImageLoaded(true)
                } else {
                        img.onload = () => setImageLoaded(true)
                }
        }, [])

        const scrollByCards = (direction = 1) => {
                const el = carouselRef.current
                if (!el) return
                const cardWidth = el.firstChild?.getBoundingClientRect().width || 260
                el.scrollBy({ left: direction * cardWidth * 1.2, behavior: 'smooth' })
        }

        const cards = [
                { title: 'Overview', body: 'A layout engineered for focus and control.' },
                { title: 'Pricing', body: '$75,000/Month' },
                { title: 'Foyer', body: 'A heavy, pressurized-entry vault.' },
                { title: 'Kitchen', body: 'Monolithic black stone island; all appliances hidden/seamless.' },
                { title: 'Living Room', body: 'Double-height ceiling, architectural seating, leads to the Balcony.' },
                { title: 'Balcony', body: 'An enclosed, high-walled obsidian perch with a view of a dark cityscape.' },
                { title: 'Office', body: 'A windowless, soundproof "war room" for high-level strategy.' },
                { title: 'Studio', body: 'A technical creative space for physical prototyping/design.' },
                { title: 'Bedroom', body: 'A low-profile sleeping vault; monastic and silent.' },
                { title: 'Bathroom', body: 'A seamless wet-room with matte black stone and silver fixtures.' },
        ]

        return (
                <div style={{backgroundColor: colors.background}} className="min-h-screen flex flex-col w-full overflow-auto">
                        <div className="relative flex-grow flex flex-col justify-center px-6 lg:px-8 pb-24 pt-24">
                                <div className="mx-auto w-full max-w-7xl">
                                        

                                        <div className="flex flex-col items-center text-center gap-3 mb-8">
                                                <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl" style={{color: colors.text}}>
                                                        THE Ne0-18D18R
                                                </h1>
                                        </div>

                                        <div className="mb-8 flex justify-center">
                                                <div className="relative rounded-full px-3 py-1 text-sm/6 text-center" style={{color: colors.textSecondary, borderWidth: '1px', borderStyle: 'solid', borderColor: colors.textSecondary}}>
                                                        The Architecture of Intent
                                                </div>
                                        </div>

                                        <div className="flex justify-center mb-6">
                                                <div style={{
                                                        width: '100%',
                                                        maxWidth: '960px',
                                                        overflow: 'hidden',
                                                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.9)',
                                                        minHeight: '300px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backgroundColor: colors.cardBg
                                                }}>
                                                        {!imageLoaded ? (
                                                                <div className="flex flex-col items-center gap-3">
                                                                        <div 
                                                                                className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
                                                                                style={{borderColor: colors.textSecondary, borderTopColor: 'transparent'}}
                                                                        />
                                                                        <span className="text-sm" style={{color: colors.textSecondary}}>Loading floor plan...</span>
                                                                </div>
                                                        ) : (
                                                                <img 
                                                                        src={floorPlanImage} 
                                                                        alt="Ne0-18D18R Floor Plan" 
                                                                        style={{
                                                                                width: '100%',
                                                                                height: 'auto',
                                                                                display: 'block'
                                                                        }}
                                                                />
                                                        )}
                                                </div>
                                        </div>

                                        <div className="mt-10 relative">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 w-12" style={{background: `linear-gradient(90deg, ${colors.background}f0, ${colors.background}00)`}} />
                                                <div className="pointer-events-none absolute inset-y-0 right-0 w-12" style={{background: `linear-gradient(270deg, ${colors.background}f0, ${colors.background}00)`}} />

                                                <div
                                                        ref={carouselRef}
                                                        className="flex gap-3 overflow-x-auto overflow-y-visible pb-4 pt-1 snap-x snap-mandatory scrollbar-hide"
                                                        style={{scrollbarWidth: 'none'}}
                                                >
                                                        {cards.map(card => (
                                                                <div
                                                                        key={card.title}
                                                                        className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] flex flex-col items-center justify-center gap-2 p-4 border text-center transition duration-200 snap-start hover:-translate-y-1 hover:border-[#666666] hover:shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
                                                                        style={{
                                                                                borderColor: colors.border,
                                                                                backgroundColor: colors.cardBg,
                                                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                                                                                aspectRatio: '1 / 1',
                                                                                minHeight: '0'
                                                                        }}
                                                                >
                                                                        <h3 className="text-lg font-semibold" style={{color: colors.text}}>{card.title}</h3>
                                                                        <p className="text-sm sm:text-base leading-snug" style={{color: colors.textSecondary}}>
                                                                                {card.body}
                                                                        </p>
                                                                </div>
                                                        ))}
                                                </div>

                                                <div className="flex justify-center gap-3 mt-3">
                                                        <button
                                                                onClick={() => scrollByCards(-1)}
                                                                className="px-3 py-2 border text-sm" style={{color: colors.text, borderColor: colors.border, backgroundColor: colors.cardBg}}
                                                        >
                                                                Prev
                                                        </button>
                                                        <button
                                                                onClick={() => scrollByCards(1)}
                                                                className="px-3 py-2 border text-sm" style={{color: colors.text, borderColor: colors.border, backgroundColor: colors.cardBg}}
                                                        >
                                                                Next
                                                        </button>
                                                </div>
                                        </div>

                                                <div className="mt-6 text-center">
                                                        <p className="text-xl font-medium sm:text-2xl italic" style={{color: colors.text}}>
                                                                Logic: Space creates Time. Time creates Work.
                                                        </p>
                                                </div>

                                </div>
                        </div>
                </div>
        )
}
