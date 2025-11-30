import React, { useEffect, useState } from 'react'
import { Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import ElementsGrid from '../components/ElementsGrid'
import { fetchElements } from '../api'
import { useSearchParams } from 'react-router-dom'

export default function Browse() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('random')
  const [params] = useSearchParams()
  const category = params.get('category') || 'All'

  useEffect(() => {
    setLoading(true)
    fetchElements({ category: category === 'All' ? undefined : category, sort })
      .then(d => setItems(d))
      .catch(console.error)
      .finally(()=> setLoading(false))
  }, [category, sort])

  return (
    <Box>
      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', mb:3 }}>
        <Typography variant="h5">Browse — {category}</Typography>
        <FormControl size="small" sx={{ minWidth:160 }}>
          <InputLabel>Sort</InputLabel>
          <Select value={sort} label="Sort" onChange={e=>setSort(e.target.value)}>
            <MenuItem value="random">Randomized</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="popular">Popular</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {loading ? <Typography>Loading...</Typography> : <ElementsGrid items={items} />}
    </Box>
  )
}
