import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Button, 
  Container 
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Choose from '../StyledImages/ChooseAbout.jpg'
import ChooseCard from './chooseCard';

const WhyChooseUs = () => {


  return (
   <Box sx={{
    display: 'flex',
  flexDirection: { xs: 'column', md: 'row',sm: 'column' }, // mobile column, desktop row
  alignItems: 'center',
  justifyContent: 'center',
  px: { xs: 2, md: 10 },
  py: 5,
  gap: 4,
   }}>
    <Box>
        <Typography variant='h3' sx={{
            color:'#09316f',
            mb:2,
        }}>
            Why Choose Us
        </Typography>
        <Box sx={{gap:2}}>
           <ChooseCard
           reason='Commitment'
           details='We are fully committed to every project we undertake. From initial planning to final completion, we focus on quality, precision, and timely delivery.'
           />

            <ChooseCard
           reason='Dependable'
           details='Our team is reliable and consistent. Clients trust us for meeting deadlines, maintaining standards, and delivering results exactly as promised.'
           />

            <ChooseCard
           reason='Honesty'
           details='Transparency is at the core of our work. We believe in open communication, fair pricing, and keeping our clients informed at every stage of the project.'
           />
        </Box>
    </Box>

      <Box
            component="img"
            src={Choose}
            alt="Welcome"
            sx={{
            height: { xs: '40vh', md: '60vh' },
            width:'100%',
            mx:{sm:3,md:0,xs:0}
            }}
              />
   </Box>
  );
};

export default WhyChooseUs;