import React from 'react'
import { Drawer, List, ListItemButton, ListItemText, Box, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const categories = [
  'All','Buttons','Checkboxes','Toggle switches','Cards','Loaders','Inputs','Radio buttons','Forms','Patterns','Tooltips'
]

export default function Sidebar() {
  const loc = useLocation()
  return (
    <Drawer variant="permanent" open PaperProps={{ sx:{ background:'#060607', color:'rgba(255,255,255,0.85)', width:240 } }}>
      <Box sx={{ height: 80, display:'flex', alignItems:'center', pl:2 }}>
        <Typography variant="h6" sx={{ color:'primary.main', fontWeight:700 }}>UI</Typography>
      </Box>
      <List>
        {categories.map(cat => (
          <ListItemButton
            key={cat}
            component={Link}
            to={`/elements?category=${encodeURIComponent(cat)}`}
            selected={loc.search.includes(cat)}
            sx={{ color:'inherit' }}
          >
            <ListItemText primary={cat} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
