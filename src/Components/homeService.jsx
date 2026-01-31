import { Box, Fade, Typography,Grid,Container,Button } from '@mui/material'
import useScrollFade from '../Components/StyledComponents/Scroll.jsx';
import ServiceCrad1 from '../images/ServiceCrad-1.jpg'
import ServiceCrad2 from '../images/ServiceCrad-2.jpg'
import ServiceCrad3 from '../images/ServiceCrad-3.jpg'
import ServiceCrad4 from '../images/ServiceCrad-4.jpg'
import React from 'react';
import ServiceCard from './ServiceCard';

export default function HomeService() {
 const { ref, visible } = useScrollFade();

  return (
<Box ref={ref} sx={{ 
      minHeight: '100vh',
      pb: 4,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0px)' : 'translateY(-5px)',
      transition: 'all 0.9s ease-in-out',}}>

  <Container maxWidth="lg">

    <Box  sx={{
          mt:12,
          flexDirection: 'column',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
      }}>
        <Fade in={visible}  timeout={600}  easing="cubic-bezier(0.4, 0, 0.2, 1)">
      <Typography variant='body1'
      sx={{
          color:'#4b4949',
          fontWeight:500,
      }}>
          WHAT WE DO
      </Typography>
    </Fade>
      <Fade in={visible}  timeout={600}  easing="cubic-bezier(0.4, 0, 0.2, 1)">
      <Typography variant='h4' component='h2'
      sx={{
          color:'#09316f',
          mt:1,
          fontWeight:500,
          lineHeight:1.3,
          fontSize: { xs: '24px', sm: '20px', md: '2.1rem' },
          textAlign:'center',
      }}>
        We build strong brands and grow businesses through branded
      </Typography>
    </Fade>
    <Fade in={visible}  timeout={600}  easing="cubic-bezier(0.4, 0, 0.2, 1)">
      <Typography variant='h4' component='h2'
        sx={{
          color:'#09316f', 
          fontWeight:500,
          fontSize: { xs: '24px', sm: '24px', md: '2.1rem',

          }}}>
          services,
          <Box variant='h2' component='span' 
          sx={{color:'#e35e25', 
          fontWeight:500,
          fontSize: { xs: '24px', sm: '24px', md: '2.1rem' }
          }}>
              digital storytelling.
          </Box>
      </Typography> 
    </Fade>
    </Box>


    <Box sx={{Width:'100vw',mt:10,
        display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      mx:{xs:5,md:0},
    }}>
        <Grid container spacing={4} columns={2} >
          <Grid item xs={16} sm={8} md={4}>
              <ServiceCard 
              image={ServiceCrad1} 
              title='Residential Design' 
              description='We create comfortable and stylish living spaces that reflect your lifestyle.' />
          </Grid>

          <Grid item xs={16} sm={8} md={4}>
              <ServiceCard 
              image={ServiceCrad2} 
              title='Intorior Design' 
              description='We craft elegant interior spaces with smart layouts and balanced colors.
              Every detail is designed.' />
          </Grid>

          <Grid item xs={16} sm={8} md={4}>
          <ServiceCard 
              image={ServiceCrad3} 
              title='Halls Design' 
              description='We design halls that are spacious, welcoming, and visually impressive.
              Perfect for events.' />
          </Grid>

          <Grid item xs={16} sm={8} md={4}>
              <ServiceCard 
              image={ServiceCrad4} 
              title='Complex Design' 
              description='We plan modern complexes with efficient space utilization and strong structure.
               and long-term durability.' />
          </Grid>
        </Grid>
    </Box>

    <Box sx={{
      display:'flex',
      flexDirection:'coloumn',
      alignItems:'center',
      justifyContent:'center',
      gap:2,
      mt: 2,
      mb: { xs: 4, sm: 0 },
    }}>
          <Button
                sx={{
                background: '#e35e25',
                color: '#fff',
                borderRadius: 0,
                width: { xs: '100%', md: '25vh' },
                height: { xs: '48px', md: '7vh' },
                mb:3,
                textTransform: 'none',
                '&:hover': {
                background: '#09316f',
                },
                }}
                >
                All Services
            </Button>

          <Button
                sx={{
                border:'1px solid #8f8c8c',  
                background: '#fff',
                color: '#09316f',
                borderRadius: 0,
                width: { xs: '100%', md: '27vh' },
                height: { xs: '48px', md: '7vh' },
                mb:3,
                textTransform: 'none',
                '&:hover': {
                background: '#e35e25',
                color: '#fff',
                border:'none',
                },
                }}
                >
                Contact us Now
            </Button>

    </Box>

  </Container> 

</Box>
  )
}
