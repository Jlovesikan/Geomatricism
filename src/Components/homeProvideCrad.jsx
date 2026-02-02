import React from 'react';
import { Card, Box, Typography } from '@mui/material';


export default function HomeProvideCrad(props) {

   const Icon =props.Icon; 
  return (
   <Card 
      elevation={0}
      sx={{ 
        maxWidth: {md:420,sm:350}, 
        textAlign: 'center', 
        p: 4, 
        mb:3,
        color:'#09316f', 
        border: 'none',
        '&:hover .hex-box': {
          bgcolor:'#e35e25',
          color: 'white',
          transform: 'rotateY(180deg)', // Optional: Add a flip effect like some templates
        },
       
      }}
    >
      {/* The Hexagon Container */}
      <Box
        className="hex-box"
        sx={{
          width: 80,
          height: 90,
          bgcolor: '#f0eded',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          transition: 'all 0.4s ease',
          // This creates the Hexagon shape
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        <Icon sx={{
            fontSize: 40,
            fontWeight:100,
            transition: 'transform 0.6s ease, color 0.3s ease',
            transform: 'rotateY(0deg)',
            color:'#e35e25',
            '.MuiCard-root:hover &': {
            transform: 'rotateY(-180deg)',
            color:'#fff',
            },
             }} />
      </Box>

      <Typography 
        variant="h6" 
        className="title" 
        sx={{ 
         fontWeight: 'bold',
         mb: 1, 
         color:'#09316f',
       }}
      >
       {props.name}
      </Typography>

      <Typography variant="body2" sx={{
        color:'#565969',
      }}>
        {props.details}
      </Typography>
    </Card>
  );
};

