import React from 'react'
import { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)


export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
