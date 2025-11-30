import React, { useState } from 'react'
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function CodeViewer({ code = {} }) {
  const [tab, setTab] = useState('html')
  function handleChange(_, val) { if(val) setTab(val) }

  return (
    <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
      <Box sx={{ display:'flex', gap:1, alignItems:'center' }}>
        <ToggleButtonGroup value={tab} exclusive onChange={handleChange} size="small">
          <ToggleButton value="html">HTML</ToggleButton>
          <ToggleButton value="css">CSS</ToggleButton>
          <ToggleButton value="react">React</ToggleButton>
        </ToggleButtonGroup>
        <Box sx={{ flex:1 }} />
        <CopyToClipboard text={code[tab] || ''}>
          <Button variant="contained" size="small">Copy</Button>
        </CopyToClipboard>
      </Box>

      <Box component="pre" sx={{
        bgcolor:'background.default', color:'text.primary', p:2, borderRadius:1, overflow:'auto', maxHeight:420, whiteSpace:'pre-wrap'
      }}>
        <code>{code[tab] || ''}</code>
      </Box>
    </Box>
  )
}
