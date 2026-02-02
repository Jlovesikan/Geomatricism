import { Box ,TextField, Typography,Grid,Button} from '@mui/material'
import React from 'react'
import Choosen from '../StyledImages/ChooseAbout.jpg'
import useScrollFade from '../StyledComponents/Scroll'

export default function RequestPage() {
  
  const {ref,visible}=useScrollFade();

  return (

 <Box ref={ref} sx={{
  bgcolor:'#09316f',
  display:'flex',
   justifyContent: "center",
    alignItems: "center",
  height:'80vh',
  width:'100vw',

 }}>

<Grid    container
  direction="row"
  sx={{
     justifyContent: "space-evenly",
    alignItems: "center",
    width:'100vw'
  }}
  >
    <Grid item xs={12} md={8}>

      <Box p={ 2} width={{md:'50vw',xs:'100vw'}} >

          <Typography variant='h4' component='p'sx={{
          color:'#fcfcfc',
          mb:2,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(5px)',
        transition: 'all 0.9s ease-in-out',
          }}>
          Request Call Back
          </Typography>
          
      <Box sx={{
        width:'100%',
        mb:2,
      }}>

     
        <Grid container
          direction="row"
          spacing={2}
          sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          mb:2,
        }}>

            <Grid item>
                  <TextField
                  required
                  placeholder="Your name"
                  variant="outlined"
                  fullWidth
                  sx={{
                  '& .MuiOutlinedInput-root': {
                  height: '50px',
                  width:{md:'23vw' ,xs:'90vw',sm:'95vw'},
                  borderRadius: 0,

                  '& input::placeholder': {
                  color: '#5985c7',
                  fontSize: '14px',
                  opacity: 1, // IMPORTANT (MUI reduces opacity by default)
                  },

                  '& input': {
                  color: '#fff',   // typed text color

                  },
                  '& fieldset': {
                  border: '1px solid #0c50b8',
                  },

                  '&:hover fieldset': {
                  border: '1px solid #0c50b8',
                  },

                  '&.Mui-focused fieldset': {
                  border: '1px solid #0c50b8',
                  },
                  },
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0px)' : 'translateY(5px)',
                    transition: 'all 0.9s ease-in-out',
                  }}
                  />
            </Grid>

            <Grid item>
                <TextField
                required
                placeholder="Your name"
                variant="outlined"
                fullWidth
                sx={{
                '& .MuiOutlinedInput-root': {
                height: '50px',
                width:{md:'23vw' ,xs:'90vw',sm:'95vw'},
                borderRadius: 0,
                '& input::placeholder': {
                color: '#5985c7',
                fontSize: '14px',
                opacity: 1, // IMPORTANT (MUI reduces opacity by default)
                },

                '& input': {
                color: '#fff',   // typed text color

                },

                '& fieldset': {
                border: '1px solid #0c50b8',
                },

                '&:hover fieldset': {
                border: '1px solid #0c50b8',
                },

                '&.Mui-focused fieldset': {
                border: '1px solid #0c50b8',
                },},
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(5px)',
              transition: 'all 0.9s ease-in-out',
                   
              }}/>
            </Grid>

        </Grid>

        <TextField
          multiline
          rows={4}
          placeholder="Type your message..."
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
            borderRadius: 0,

            '& textarea::placeholder': {
          color: '#0c50b8',
          fontSize: '14px',
          opacity: 1,
        },

          '& textarea': {
          color: '#fff',
        
        },

            '& fieldset': {
            border: '1px solid #0c50b8',
            },

            '&:hover fieldset': {
            border: '1px solid #0c50b8',
            },

            '&.Mui-focused fieldset': {
            border: '1px solid #0c50b8',
            },
            },
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(5px)',
            transition: 'all 0.9s ease-in-out',
            
        }}/>

        <Box>
           <Button
              sx={{
              background: '#e35e25',
              color: '#fff',
              borderRadius: 0,
              mt: 3,
              width: { xs: '80%', md: '25%' },
              height: { xs: '48px', md: '6vh' },
              textTransform: 'none',
              '&:hover': {
              background: '#09316f',
              },
              }}
              >
              Submit Now
          </Button>
        </Box>

      </Box>

      </Box>
    
    </Grid>


    <Grid item xs={12} md={4}>
        <Box
        component="img"
        src={Choosen}
        alt="Welcome"
        sx={{
        bgcolor:'#111111',
        display:{xs:'none',md:'block'},
        height: { xs: '40vh', md: '45vh' },
        width:'30vw',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(5px)',
        transition: 'all 0.9s ease-in-out',
        mx:{sm:3,md:0,xs:0}
        }}
        />
    </Grid>

</Grid>

 </Box>
    
  )
}
