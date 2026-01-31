import { Box, Grid } from '@mui/material'
import React from 'react'
import HomeImageCard from './homeImageCard'

export default function HomeImage() {
  return (
    <Box sx={{
        height:'70vh',
    }}>
     <Grid container spacing={1} columns={12}>
       <Grid item >
          <HomeImageCard/>
       </Grid>
     </Grid>
    </Box>
  )
}
