import { Box, Grid, Typography, Button, Collapse, Fade} from '@mui/material'
import React, { useState } from 'react'
import Welcome from '../images/Welcome.jpeg'
import man from '../images/Welcome-man.png'
import useScrollFade from '../Components/StyledComponents/Scroll.jsx';
import { Link } from 'react-router-dom';


export default function Home() {

  const [readMore,setReadMore]=useState(false); 
  const { ref, visible } = useScrollFade();
  
  return (

<Box
  sx={{
    background: `url(${Welcome})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: {
      xs: '50vh',
      sm: '60vh',
      md: '80vh',
      lg: '100vh',
    },
    width: '100%',
  }}
>
  <Box
  sx={{
    background: 'rgba(255,255,255,0.7)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 2,
  }}
>
      <Grid container spacing={2} columns={16} alignItems="center" >
        
        <Grid item xs={16} md={8}>
          <Box ref={ref}
          sx={{
          ml: { xs: 2, md: 12 },
          mr: { xs: 2 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(-5px)',
          transition: 'all 0.9s ease-in-out',
          }}
          >
        <Fade in={visible} timeout={600}  easing="cubic-bezier(0.2, 0, 1, 1)">
            <Typography
                variant="h6"
                sx={{
                color: '#09316f',
                fontWeight: 500,
                fontSize: { xs: '1rem', md: '3vh' },
                }}
                >
                WE MAKE
          </Typography>
        </Fade>

        <Fade in={visible} timeout={600}  easing="cubic-bezier(0.2, 0, 1, 1)">
            <Typography
                variant="h2"
                sx={{
                color: '#09316f',
                fontWeight: 500,
                fontSize: { xs: '2.5rem', md: '12vh' },
                lineHeight: 1.1,
                }}
                >
                Dream House
          </Typography>
        </Fade>
        <Fade in={visible} timeout={600}  easing="cubic-bezier(0.2, 0, 1, 1)">
          <Box>
            <Collapse in={readMore} collapsedSize={70}  >

            <Typography
            variant="body1"
            sx={{
            color: '#565969',
            maxWidth: 500,
            mt: 1,
            display: readMore ? 'block':'-webkit-box',
            WebkitLineClamp: readMore ?'none':{ xs: 2, md: 2 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
           
            }}
            >
            A house becomes a home when it’s built with heart. We create dream homes where comfort meets design, and every corner tells your story.
            </Typography>

            </Collapse>
          </Box>
          </Fade>
          <Fade in={visible} timeout={600}  easing="cubic-bezier(0.2, 0, 1, 1)">
          <Typography
          variant='body1'
          sx={{
          color: '#09316f',
          cursor: 'pointer',
          fontWeight: 500,
          }}
          onClick={() => setReadMore(!readMore)}
          >
          {readMore ? 'Read Less' : 'Read More'}
          </Typography>
          
        </Fade>
          <Fade in={true} timeout={600}  easing="cubic-bezier(0.2, 0, 1, 1)">
            <Button
              component={Link}   
              to="/services"        
              variant="contained"
              sx={{
              background: '#e35e25',
              color: '#fff',
              borderRadius: 0,
              mt: 3,
              width: { xs: '80%', md: '25vh' },
              height: { xs: '48px', md: '7vh' },
              textTransform: 'none',
              '&:hover': {
              background: '#09316f',
              },
              }}
              >
              Get Details
          </Button>
          </Fade>
          </Box>
        </Grid>

        <Grid item md={8}>
         
          <Box
          component="img"
          src={man}
          alt="Welcome"
          sx={{
           display: { xs: 'none', md: 'block' },
           height:'99vh',
           width:'90%',
          
          }}
          />
       
        </Grid>

        

      </Grid>
  </Box>
</Box>

  )
}
