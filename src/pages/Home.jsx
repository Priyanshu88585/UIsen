import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb:2 }}>UI Element Library</Typography>
      <Typography color="text.secondary" sx={{ mb:4 }}>Browse community UI elements — buttons, loaders, inputs and more.</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button component={Link} to="/elements" variant="outlined">Browse elements</Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/upload" variant="contained">Upload element</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
