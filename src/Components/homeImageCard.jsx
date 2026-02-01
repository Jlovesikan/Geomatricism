import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, MobileStepper, Grid,} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Modern from '../images/Modern.jpg'
import Interior from '../images/Interior.jpeg'
import Building from '../images/Building.jpg'

const slides = [
  {
    title: "Working in new case",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    tag: "Building",
    img: Modern,
  },
  {
    title: "Modern Interior Design",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    tag: "Interior",
    img: Interior,
  },
  {
    title: "Modern Architectural Construction",
    desc: "High-end construction solutions delivering sleek designs.",
    tag: "Construction",
    img: Building,

  }

];

export default function HomeImageCard() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  // --- AUTO-CHANGE LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, 1000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);

  return (
    <Box sx={{
       Width: '100vw', 
       my:2,
        display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems:'center'
       }}>
    
         
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16} md={8}>
             <Box
          component="img"
          sx={{
            height: {xs:400,md:500},
            width: {md:'40vw',xs:'100vw'},
            objectFit: 'cover',
          }}
          src={slides[activeStep].img}
          alt={slides[activeStep].title}
        />
          </Grid>
          <Grid item xs={16} md={8}>
     
              <Box sx={{ 
         
          bgcolor: '#ff6b35', 
          color: 'white', 
          px:6,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          minWidth:{md:'50vw',sm:'100vw'}, 
          height:{md:'60vh',sm:'60vh',xs:'60vh'},
        }}>
          <Typography variant="overline" sx={{ borderBottom: '2px solid white', Width: 'fit-content', mb: 2 }}>
            {slides[activeStep].tag}
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{
              maxWidth: '100%',
              fontSize:{sm:20},
              whiteSpace: 'normal',
              overflowWrap: 'anywhere',
              }}
         > 
            {slides[activeStep].title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, }}>
            {slides[activeStep].desc}
          </Typography>
          <Button variant="contained" sx={{ bgcolor: 'black', color: 'white', width: 'fit-content' }}>
            READ MORE +
          </Button>
        </Box>
     
         <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}  sx={{color:'#09316f'}}>
            Next <KeyboardArrowRight  sx={{color:'#09316f'}} />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} sx={{color:'#09316f'}}>
            <KeyboardArrowLeft  sx={{color:'#09316f'}} /> Back
          </Button>
        }
        sx={{ mt: 2, bgcolor: 'transparent' }}
      />
          </Grid>
        </Grid>
     
    </Box>
  );
}