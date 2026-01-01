import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const colors = {
    dark: {
      background: '#000000',
      text: '#FFFFFF',
      textSecondary: '#999999',
      border: '#2d2d2d',
      cardBg: '#0a0a0a'
    },
    light: {
      background: '#e5e5e5',
      text: '#0a0a0a',
      textSecondary: '#666666',
      border: '#cccccc',
      cardBg: '#f5f5f5'
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}
