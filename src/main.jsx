import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ColorModeProvider, useColorMode } from './theme.jsx'

function Root() {
  const { theme } = useColorMode()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

/**
 * Wrap with ColorModeProvider to allow toggling dark/light from anywhere.
 */
createRoot(document.getElementById('root')).render(
  <ColorModeProvider>
    <Root />
  </ColorModeProvider>
)
