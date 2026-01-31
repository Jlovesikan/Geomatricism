import { Box, Container, Grid, Typography} from '@mui/material'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import FooterSocialIcons from './footerSocialIcons';

export default function Footer() {
  return (
<Box
sx={{
mt:5,
width:'100%',
height:'auto',
background:'#09316f',

}}
>
   
   <Container maxWidth='lg'>
     <Grid container spacing={{xs:2,md:20}} columns={12} >
        <Grid item md={4}>
            <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:4,
            }}>
            <PhoneForwardedIcon sx={{
                color:'#fff',
                fontSize:'30px'
            }}/>
            <Box >
                <Typography variant='h6' component='div'sx={{
                color:'#fff',
                 fontSize:'20px',
              
            }}>
                    Contacts
                </Typography>
                <Typography variant='body2' component='div'sx={{
                color:'#fff',
                mb:1,
            }}>
                    Call Us : +123 456 789 
                </Typography>
                <Typography variant='body2' component='div'sx={{
                color:'#fff',
                mb:1,
            }}>
                    Email Us At :hammer@gmailcom
                </Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item md={4}>
            <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:4,
            }}>
            <HomeIcon sx={{
                color:'#fff',
                fontSize:'30px'
            }}/>
            <Box>
                <Typography variant='h6' component='div'sx={{
                color:'#fff',
               
            }}>
                    Address
                </Typography>
                <Typography variant='body2' component='div'sx={{
                color:'#fff',
                mb:1,
            }}>
                    Hemmer Builder, Downtown, Victoria
                </Typography>
                <Typography variant='body2' component='div'sx={{
                color:'#fff',
                mb:1,
            }}>
                    Australia
                </Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item md={4}>
            <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:4,
            }}>
            <ThumbUpIcon sx={{
                color:'#fff',
                fontSize:'30px'
            }}/>
            <Box>
                <Typography variant='h6' component='div'sx={{
                color:'#fff',
               
            }}>
                    Follow Us
                </Typography>
                <Grid container spacing={2} columns={16}>
                    <Grid item>
                        <FooterSocialIcons
                        Icon={FacebookIcon}
                        />

                    </Grid>
                    <Grid item>
                        <FooterSocialIcons
                        Icon={TwitterIcon }
                        />
                    </Grid>

                    <Grid item>
                        <FooterSocialIcons
                        Icon={LinkedInIcon}
                        />
                    </Grid>

                    <Grid item>
                        <FooterSocialIcons
                        Icon={InstagramIcon}
                        />
                    </Grid>

                </Grid>
            </Box>
            </Box>
        </Grid>
    </Grid>
   </Container>
    

    <Typography variant='body2' component='div'
    sx={{
    color:'#09316f',
    textAlign:'center',
  
    bgcolor:'#fff',
    width:'100%',
    height:'auto',
    }}
    >
    Copyright ©2026 Mugli. All Rights Reserved
    </Typography>

</Box>
  )
}
