import { Box, Grid,TextField,Button } from '@mui/material'
import React from 'react'

export default function Send() {
  return (
 

    <Grid container
    rowSpacing={3}
    sx={{
    alignItems:'center',
    justifyContent:'space-evenly'
    }}>
    <Grid item md={3} xs={12} width={{md:'20vw',xs:'80vw'}}>
    <TextField

    placeholder="Your name"
    variant="standard"
    fullWidth
    sx={{
   
    '& .MuiInput-underline:before': {
    borderBottom: '1px dotted #d6d3d3',
    },
    '& .MuiInput-underline:hover:before': {
    borderBottom: '1px dotted #d6d3d3 !important',
    },
    '& .MuiInput-underline:after': {
    borderBottom: '1px dotted #000',
    },
    '& input': {
    color: '#d6d3d3',
    fontSize: '12px',
    },
    '& input::placeholder': {
    color: '#777',
    fontSize: '12px',
    opacity: 1,
    },
    }}
    />

    </Grid>

    <Grid item md={3}  xs={12} width={{md:'20vw',xs:'80vw'}} >
    <TextField
    required
    type="email"
    variant="standard"
    placeholder="Email address"
    fullWidth
    sx={{
   
    '& .MuiInput-underline:before': {
    borderBottom: '1px dotted #d6d3d3',
    },
    '& .MuiInput-underline:hover:before': {
    borderBottom: '1px dotted #d6d3d3 !important',
    },
    '& .MuiInput-underline:after': {
    borderBottom: '1px dotted #000',
    },
    '& input': {
    color: '#d6d3d3',
    fontSize: '12px',
    },
    '& input::placeholder': {
    color: '#777',
    fontSize: '12px',
    opacity: 1,
    },
    }}
    />
    </Grid>

   <Grid item md={3}  xs={12} width={{md:'20vw',xs:'80vw'}}>
<TextField
  variant="standard"
  placeholder="Your Subject"
  fullWidth
  sx={{
    '& .MuiInput-underline:before': {
    borderBottom: '1px dotted #d6d3d3',
    },
    '& .MuiInput-underline:hover:before': {
    borderBottom: '1px dotted #d6d3d3 !important',
    },
    '& .MuiInput-underline:after': {
    borderBottom: '1px dotted #000',
    },
    '& input': {
    color: '#d6d3d3',
    fontSize: '12px',
    },
    '& input::placeholder': {
    color: '#777',
    fontSize: '12px',
    opacity: 1,
    },
    }}
/>



    </Grid>

   <Grid item md={3}  xs={12} width={'80vw'}>
    <TextField
    required
    multiline
    variant="standard"
    placeholder="Your message"
    fullWidth
    rows={8}

    sx={{
    '& .MuiInput-underline:before': {
    borderBottom: '1px dotted #d6d3d3',
    },
    '& .MuiInput-underline:hover:before': {
    borderBottom: '1px dotted #d6d3d3 !important',
    },
    '& .MuiInput-underline:after': {
    borderBottom: '1px dotted #000',
    },
    '& textarea': {
    pl:{md: 5,xs:0},  
    color: '#d6d3d3',
    fontSize: '10px',
    },
    '& textarea::placeholder': {
    color: '#777',
    fontSize: '10px',
    opacity: 1,
   
    },
    }}
    />
    </Grid>

       <Grid item xs={12} md={12} width={'100vw'}textAlign="center">
          <Button
            type="submit"
            variant="contained"
             sx={{
              boxShadow:'none',
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
            Submit
          </Button>
        </Grid>

    </Grid>

   
  )
}
