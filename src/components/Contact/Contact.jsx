import './Contact.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext.jsx'

export default function Contact() {
    const navigate = useNavigate()
    const { colors } = useTheme()
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        navigate('/contact/thank-you')
    }, [navigate])

    return (
        <div className="contact-page isolate px-6 py-10 sm:py-14 lg:px-8" style={{ backgroundColor: colors.background, marginTop: 'calc(-1 * var(--header-height))', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', paddingTop: 'clamp(100px, 12vh, 140px)' }}>
            
            <div className="mx-auto max-w-2xl text-center mb-8">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4" style={{color: colors.text}}>
                    Contact
                </h1>
                <p className="text-lg sm:text-xl" style={{color: colors.textSecondary}}>
                    Direct communication via Telegram <a href="https://t.me/luctheleo" className="font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity" style={{color: colors.text}}>@luctheleo</a>
                </p>
                <p className="mt-2 text-base" style={{color: colors.textSecondary}}>
                    Assessment precedes engagement. Alignment determines collaboration.
                </p>
            </div>

            <div className="mx-auto w-full max-w-xl">
                <div className="h-px w-full mb-8" style={{backgroundColor: colors.border}}></div>
            </div>

            <form action="#" method="POST" className="mx-auto w-full max-w-xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            First name
                        </label>
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-none px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-1"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.text,
                                border: `1px solid ${colors.border}`,
                                '--tw-ring-color': colors.text
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.text}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            Last name
                        </label>
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-none px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-1"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.text,
                                border: `1px solid ${colors.border}`,
                                '--tw-ring-color': colors.text
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.text}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                        />
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-none px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-1"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.text,
                                border: `1px solid ${colors.border}`,
                                '--tw-ring-color': colors.text
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.text}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            Phone number
                        </label>
                        <div className="flex" style={{border: `1px solid ${colors.border}`}}>
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    aria-label="Country"
                                    className="col-start-1 row-start-1 w-full appearance-none bg-transparent py-3 pr-8 pl-4 text-base"
                                    style={{color: colors.textSecondary}}
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end"
                                    style={{color: colors.textSecondary}}
                                />
                            </div>
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="text"
                                placeholder="123-456-7890"
                                className="block min-w-0 grow bg-transparent py-3 pr-4 pl-2 text-base focus:outline-none"
                                style={{color: colors.text, borderLeft: `1px solid ${colors.border}`}}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            className="block w-full rounded-none px-4 py-3 text-base transition-all duration-200 focus:outline-none appearance-none cursor-pointer"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.text,
                                border: `1px solid ${colors.border}`
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.text}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                        >
                            <option value="">Select an option</option>
                            <option value="order-line">Order Line Conversation (15 min)</option>
                            <option value="reverie">REVERIE Foundation (2 hours)</option>
                            <option value="ruminate">RUMINATE Development Session</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{color: colors.text}}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell me about your creative vision..."
                            className="block w-full rounded-none px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-1 resize-none"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.text,
                                border: `1px solid ${colors.border}`,
                                '--tw-ring-color': colors.text
                            }}
                            onFocus={(e) => e.target.style.borderColor = colors.text}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            defaultValue={''}
                        />
                    </div>

                    <div className="flex items-start gap-x-4 sm:col-span-2">
                        <input
                            id="agree-to-policies"
                            name="agree-to-policies"
                            type="checkbox"
                            className="mt-1 h-4 w-4 cursor-pointer accent-white"
                            style={{accentColor: colors.text}}
                        />
                        <label htmlFor="agree-to-policies" className="text-sm leading-relaxed cursor-pointer" style={{color: colors.textSecondary}}>
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity" style={{color: colors.text}}>
                                privacy policy
                            </a>
                            .
                        </label>
                    </div>
                </div>

                <div className="mt-8 mb-4">
                    <button
                        type="submit"
                        className="block w-full py-4 text-center text-base font-bold tracking-wider uppercase transition-all duration-200"
                        style={{
                            backgroundColor: colors.text,
                            color: colors.background,
                            border: `2px solid ${colors.text}`
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = colors.text
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = colors.text
                            e.target.style.color = colors.background
                        }}
                    >
                        Let's Talk
                    </button>
                </div>

                <p className="text-center text-sm" style={{color: colors.textSecondary}}>
                    No ego. Just work.
                </p>
            </form>
        </div>
    )
}
