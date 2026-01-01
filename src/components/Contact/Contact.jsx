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
        // In a real app, submit form data here, then navigate on success
        navigate('/contact/thank-you')
    }, [navigate])

    return (
        <div className="contact-page isolate px-6 py-10 sm:py-14 lg:px-8" style={{ backgroundColor: colors.background, marginTop: 'calc(-1 * var(--header-height))', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', paddingTop: 'clamp(80px, 10vh, 120px)' }}>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl" style={{color: colors.text}}>Contact</h2>
                
            </div>
            <form action="#" method="POST" className="mx-auto mt-6 max-w-xl sm:mt-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold" style={{color: colors.text}}>
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md px-3.5 py-2 text-base"
                                style={{backgroundColor: colors.background, color: colors.text, border: `1px solid ${colors.textSecondary}`}}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold" style={{color: colors.text}}>
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md px-3.5 py-2 text-base"
                                style={{backgroundColor: colors.background, color: colors.text, border: `1px solid ${colors.textSecondary}`}}
                            />
                        </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold" style={{color: colors.text}}>
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md px-3.5 py-2 text-base"
                                style={{backgroundColor: colors.background, color: colors.text, border: `1px solid ${colors.textSecondary}`}}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold" style={{color: colors.text}}>
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md" style={{backgroundColor: colors.background, border: `1px solid ${colors.textSecondary}`}}>
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base sm:text-sm/6"
                                        style={{color: colors.textSecondary}}
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                                        style={{color: colors.textSecondary}}
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base focus:outline-none sm:text-sm/6"
                                    style={{color: colors.text}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold" style={{color: colors.text}}>
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="block w-full rounded-md px-3.5 py-2 text-base"
                                style={{backgroundColor: colors.background, color: colors.text, border: `1px solid ${colors.textSecondary}`}}
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <div className="group relative inline-flex w-8 shrink-0 rounded-full p-px transition-colors duration-200 ease-in-out" style={{backgroundColor: colors.textSecondary, border: `1px solid ${colors.textSecondary}`}}>
                                <span className="size-4 rounded-full shadow-xs transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" style={{backgroundColor: colors.text}} />
                                <input
                                    id="agree-to-policies"
                                    name="agree-to-policies"
                                    type="checkbox"
                                    aria-label="Agree to policies"
                                    className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                                />
                            </div>
                        </div>
                        <label htmlFor="agree-to-policies" className="text-sm/6" style={{color: colors.textSecondary}}>
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold whitespace-nowrap" style={{color: colors.text}}>
                                privacy policy
                            </a>
                            .
                        </label>
                    </div>
                </div>
                <div className="mt-8 mb-2">
                    <button
                        type="submit"
                        className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold transition-colors"
                        style={{backgroundColor: colors.text, color: colors.background, border: `1px solid ${colors.text}`}}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = colors.textSecondary; e.target.style.color = colors.text; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = colors.text; e.target.style.color = colors.background; }}
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}