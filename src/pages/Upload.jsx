import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import UploadForm from '../components/UploadForm'

export default function Upload() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          maxWidth: 700,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: 600, color: 'primary.main', textAlign: 'center' }}
        >
          Upload a new element
        </Typography>
        <UploadForm onSuccess={() => {}} />
      </Paper>
    </Box>
  )
}
