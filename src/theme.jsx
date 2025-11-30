import React, { createContext, useContext, useMemo, useState } from 'react'
import { createTheme } from '@mui/material/styles'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    },
    mode
  }), [mode])

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'dark' ? {
        background: { default: '#000000ff', paper: '#000000ff' },
        primary: { main: '#8b5cf6' }
      } : {
        background: { default: '#f7f7f8', paper: '#fff' },
        primary: { main: '#5b21b6' }
      }),
    },
    components: {
      MuiPaper: { defaultProps: { elevation: 0 } },
    }
  }), [mode])

  return (
    <ColorModeContext.Provider value={{ ...colorMode, theme }}>
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  return useContext(ColorModeContext)
}
