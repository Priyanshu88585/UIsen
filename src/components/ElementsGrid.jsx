import React from 'react'
import { Grid } from '@mui/material'
import ElementCard from './ElementCard'

export default function ElementsGrid({ items = [] }) {
  return (
    <Grid container spacing={3}>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item._id || item.slug}>
          <ElementCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}
