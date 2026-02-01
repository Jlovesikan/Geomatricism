import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';

export default function ChooseCard(props) {
  return (
    <Box sx={{ 
        display: 'flex', 
        width: '100%', 
        mb: 3,
        transition: 'transform 0.3s ease', // smooth effect
    '&:hover': {
      transform: 'translateX(8px)', } 
        }}>
      
      <ArrowForwardIosIcon sx={{ fontSize: '1rem', color: '#ff5722', mr: 2, mt: 0.5 }} />
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{
             fontWeight: '600',
              lineHeight: 1.2,
              color:'#09316f' 
              }}>
          {props.reason}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {props.details}
        </Typography>
      </Box>
    </Box>
  )
}
