import React from 'react'
import { Box, Typography } from '@mui/material'
import useScrollFade from './Scroll'
import Multiplehome from '../StyledImages/MultipleHome.jpg'

export default function MultipleHome(props) {
  const { ref, visible } = useScrollFade()

  return (
    <Box
      sx={{
        mt: 5,
        backgroundImage: `url(${Multiplehome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        width: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#00255e',
          opacity: 0.9,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          ref={ref}
          sx={{
            background: 'transparent',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(-5px)',
            transition: 'all 1s ease-in-out',
            px: 2,
          }}
        >
            
          <Typography
            variant="body2"
            sx={{
              color: '#fff',
              textAlign: 'center',
              lineHeight: 2,
            }}
          >
            {props.head}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              fontWeight: 600,
              textAlign: 'center',
             
            }}
          >
           {props.page}
          </Typography>

        </Box>
      </Box>
    </Box>
  )
}
