import React, { useState } from 'react'
import {
  Box, AppBar, Toolbar, IconButton, Typography, InputBase,
  Drawer, Button, useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { styled, alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { useColorMode } from '../theme'
import Sidebar from './Sidebar'

const drawerWidth = 240

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.07),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.1) },
  marginLeft: theme.spacing(2),
  width: 'auto',
  [theme.breakpoints.down('sm')]: { display: 'none' }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '20ch',
    [theme.breakpoints.up('md')]: { width: '30ch' },
  },
}))

export default function Shell({ children }) {
  const theme = useTheme()
  const { mode, toggleColorMode } = useColorMode()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none' }}
              >
                UISEN
              </Typography>
            </Box>

            <Search>
              <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/upload"
                sx={{ fontWeight: 600, borderRadius: 2 }}
              >
                Create
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{
          p: { xs: 2, sm: 3, md: 4 },
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%'
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
