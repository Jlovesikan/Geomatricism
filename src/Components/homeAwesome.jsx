import React from 'react'
import Awesome from '../images/Awesome.jpg'
import { Box, Typography,Button} from '@mui/material'
import useScrollFade from './StyledComponents/Scroll'
import { Link } from 'react-router-dom';

export default function HomeAwesome() {
   const {ref,visible}=useScrollFade();

  return (

    <Box 
   sx={{
    mt:5,
    background: `url(${Awesome})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    width: '100%',
  }}
   >
      <Box
      sx={{
        background: '#00255e',
        opacity:'0.95',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
         
      }}
    >
        <Box ref={ref}
        sx={{
        background:'transprent',
        maxWidth:'800px',    
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:2,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(-5px)',
        transition: 'all 1s ease-in-out',
        }}
        >
            
        <Typography variant='h4' component='span' 
        sx={{
            color:'#fff',
            fontWeight:600,
             textAlign:'center',
            fontSize:{xs:'30px'}
        }}
        >
            Let's Make Awesome Things, Together.
        </Typography>
         <Typography variant='body2' component='span' 
        sx={{
            color:'#fff',
            textAlign:'center',
            lineHeight:2,
        }}
        >
         We deliver comprehensive design and construction services, merging innovative architecture, meticulous planning, and superior craftsmanship to transform every idea into an elegant, functional, and enduring space.
        </Typography>

         <Button
                      component={Link}   
                                      to="/services"        
                                      variant="contained"
                      sx={{
                      background: '#f35917',
                      color: '#fff',
                      borderRadius: 0,
                      width: { xs: '100%', md: '30vh' },
                      height: { xs: '48px', md: '7vh' },
                      textTransform: 'none',
                      '&:hover': {
                      background: '#09316f',
                      },
                      }}
                      >
                      Start your Project
                  </Button>
        </Box>
    </Box>

   </Box>
  )
}
