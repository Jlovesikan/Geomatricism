import React from 'react'
import { Box, Container, Fade, Grid, Typography } from '@mui/material';
import Faq from '../images/Faq.jpg'
import DropDown from './dropDown';
import useScrollFade from './StyledComponents/Scroll';

export default function HomeFaq() {
   const {ref,visible}=useScrollFade();

  return (
  <Box  sx={{
      minHeight: '100vh',
      background:'#f2f3f5',
      py:15,
      
    }}>
  <Container maxWidth='xl'>
    <Box ref={ref}>
       <Grid container spacing={2}>
    <Grid item>
       <Box
        component="img"
        src={Faq}
        alt="Welcome"
        sx={{
        height: { xs: '40vh', md: '75vh' },
        width:'100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(5px)',
        transition: 'all 0.9s ease-in-out',
        mx:{sm:3,md:0,xs:0}
        }}
          />
    </Grid>
    <Grid item>
       <Typography variant='body1'   cpmponet='span'sx={{
          fontWeight:510,
           opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(5px)',
          transition: 'all 0.9s ease-in-out',
          mb:1,
          color:'#565969',
          fontSize:'18px'
      }}>
        SOME FAQ’s
      </Typography>

       <Typography variant='h3'  cpmponet='span' sx={{
          color:'#09316f',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(5px)',
          transition: 'all 0.9s ease-in-out',
      }}>
        Fequality Ask Question
      </Typography>
      <Box sx={{
      mt:6,
      
      maxWidth:{xs:'100vw',md:'40vw'},
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0px)' : 'translateY(5px)',
      transition: 'all 1.2s ease-in-out',
      }}>
        
      <Grid container  columns={16} sx={{gap:2,}}>
            <Grid item xs={16}>
              <Box sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0px)' : 'translateY(5px)',
                  transition: 'all 1.2s ease-in-out',
                  
                
              }}>
                  <DropDown 
                question='Why We Best?'
                answer='There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique.'
                />
              </Box>
            </Grid>
            <Grid item xs={16}>

              <Box sx={{
                 opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0px)' : 'translateY(5px)',
                  transition: 'all 1.2s ease-in-out',
                

              }}>
                  <DropDown 
                question='Feature With Great Service'
                answer='Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
                />
              </Box>
              
            </Grid>
            <Grid items xs={16}>

              <Box sx={{
              
                opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0px)' : 'translateY(5px)',
                  transition: 'all 1.2s ease-in-out',

              }}>
                <DropDown 
                question='Great Qustion for our customer'
                answer='Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid, 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
                />
              </Box>
              
            </Grid>
      </Grid>
      </Box>
    </Grid>
   </Grid>
    </Box>
  </Container>
  </Box>
  )
}
