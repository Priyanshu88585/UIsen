import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ElementCard({ item }) {
  return (
    <Card sx={{
      bgcolor: 'background.paper',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: 3,
      position: 'relative',
      '&:hover .overlay': { opacity: 1, transform: 'translateY(0)' }
    }}>
      <CardActionArea component={Link} to={`/elements/${item.slug}`}>
        <Box sx={{ height: 180, display:'flex', alignItems:'center', justifyContent:'center', bgcolor: 'rgba(255,255,255,0.03)' }}>
          {item.thumbnailUrl ? (
            <CardMedia component="img" image={item.thumbnailUrl} alt={item.title} sx={{ maxHeight:'100%', maxWidth:'100%' }} />
          ) : (
            <Typography color="text.secondary">Preview</Typography>
          )}
        </Box>

        <CardContent sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight:600 }}>{item.title}</Typography>
            <Typography variant="caption" color="text.secondary">{item.authorName || 'Unknown'}</Typography>
          </Box>
          <Box sx={{ textAlign:'right' }}>
            <Typography variant="caption" color="text.secondary">{item.stats?.views ?? 0} views</Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      {/* Hover overlay */}
      <Box className="overlay" sx={{
        position:'absolute', bottom:12, left:12, right:12, display:'flex', justifyContent:'space-between', alignItems:'center',
        opacity: 0, transform: 'translateY(8px)', transition:'all 180ms ease-in-out', pointerEvents: 'none'
      }}>
        <Chip label={item.category || 'UI'} size="small" />
        <Chip label="Get code" size="small" variant="outlined" />
      </Box>
    </Card>
  )
}
