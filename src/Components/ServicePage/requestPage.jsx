import { Box ,TextField, Typography,Grid} from '@mui/material'
import React from 'react'
import Choosen from '../StyledImages/ChooseAbout.jpg'

export default function RequestPage() {
  return (
  <Box
  sx={{
    height: '80vh',
    width: '100%',
    bgcolor: '#09316f',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // mobile stacked, desktop row
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, md: 10 },
    gap: 4,
  }}
>

      {/* <Box>
       
             <Box>
            <Typography variant='h3' component='p'sx={{
                color:'#fff',
            }}>
                Request Call Back
            </Typography>
            <TextField
          required
          id="filled-required"
          defaultValue="Your name"
          
        />
        </Box>
       

      
            
         <Box
                component="img"
                src={Choosen}
                alt="Welcome"
                sx={{
                height: { xs: '40vh', md: '40vh' },
                width:'100%',
                // opacity: visible ? 1 : 0,
                // transform: visible ? 'translateY(0px)' : 'translateY(5px)',
                // transition: 'all 0.9s ease-in-out',
                mx:{sm:3,md:0,xs:0}
                }}
        />
  

  
      </Box> */}

    </Box>
  )
}
