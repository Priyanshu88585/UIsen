import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchElement, api } from '../api'
import { Box, Typography, Paper } from '@mui/material'
import CodeViewer from '../components/CodeViewer'

export default function ElementDetail() {
  const { slug } = useParams()
  const [el, setEl] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchElement(slug).then(data => setEl(data)).catch(console.error).finally(()=>setLoading(false))
    // increment view
    api.post(`/elements/${slug}/view`).catch(()=>{})
  }, [slug])

  if (loading) return <div>Loading...</div>
  if (!el) return <div>Element not found</div>

  const srcDoc = `${el.code?.html || ''}<style>${el.code?.css || ''}</style>`

  return (
    <Box sx={{ display:'grid', gridTemplateColumns: '2fr 1fr', gap:3 }}>
      <Paper sx={{ p:2 }}>
        <Box sx={{ mb:2, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Typography variant="h6">{el.title}</Typography>
          <Typography color="text.secondary">{el.authorName}</Typography>
        </Box>
        <iframe sandbox="allow-scripts allow-same-origin" title="preview" srcDoc={srcDoc} className="preview-iframe" style={{ width:'100%', height:480, borderRadius:8, border:'1px solid rgba(0,0,0,0.06)' }} />
      </Paper>

      <Box>
        <CodeViewer code={el.code || {}} />
      </Box>
    </Box>
  )
}
