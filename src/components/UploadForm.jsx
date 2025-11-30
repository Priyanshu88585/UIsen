import React, { useState } from 'react'
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { createElement, uploadImage } from '../api'
import { useNavigate } from 'react-router-dom'

const categories = ['Buttons','Checkboxes','Cards','Loaders','Inputs']

export default function UploadForm({ onSuccess }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Buttons')
  const [tags, setTags] = useState('')
  const [html, setHtml] = useState('<button>Click me</button>')
  const [css, setCss] = useState('button{padding:8px;border-radius:8px;}')
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const nav = useNavigate()

  const onDrop = accepted => {
    if (accepted && accepted[0]) {
      setFile(Object.assign(accepted[0], { preview: URL.createObjectURL(accepted[0]) }))
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept:{'image/*':[]}, maxFiles:1 })

  async function handleSubmit(e) {
    e.preventDefault()
    setUploading(true)
    try {
      let thumbnailUrl = ''
      if (file) {
        const fd = new FormData()
        fd.append('image', file)
        const r = await uploadImage(fd)
        thumbnailUrl = r.url
      }
      const payload = { title, category, tags: tags.split(',').map(t=>t.trim()).filter(Boolean), code: { html, css }, thumbnailUrl, authorName:'You' }
      const saved = await createElement(payload)
      setUploading(false)
      onSuccess?.(saved)
      nav(`/elements/${saved.slug}`)
    } catch (err) {
      console.error(err)
      setUploading(false)
      alert('Upload failed')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display:'grid', gap:2 }}>
      <TextField label="Title" value={title} onChange={e=>setTitle(e.target.value)} fullWidth required />
      <TextField select label="Category" value={category} onChange={e=>setCategory(e.target.value)} fullWidth>
        {categories.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)}
      </TextField>

      <Box {...getRootProps()} sx={{
        border: '1px dashed rgba(255,255,255,0.06)', p:2, borderRadius:1, textAlign:'center', bgcolor: 'transparent'
      }}>
        <input {...getInputProps()} />
        {file ? (
          <Box sx={{ display:'flex', gap:2, alignItems:'center' }}>
            <img src={file.preview} alt="thumb" style={{ width:120, height:80, objectFit:'cover', borderRadius:8 }} />
            <Typography>{file.name}</Typography>
          </Box>
        ) : (
          <Typography>{isDragActive ? 'Drop image here' : 'Drag & drop a thumbnail, or click to select'}</Typography>
        )}
      </Box>

      <TextField label="Tags (comma separated)" value={tags} onChange={e=>setTags(e.target.value)} fullWidth />
      <TextField label="HTML" value={html} onChange={e=>setHtml(e.target.value)} multiline rows={6} fullWidth />
      <TextField label="CSS" value={css} onChange={e=>setCss(e.target.value)} multiline rows={6} fullWidth />

      <Button type="submit" variant="contained" color="primary" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</Button>
    </Box>
  )
}
