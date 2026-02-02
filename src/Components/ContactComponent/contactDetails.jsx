import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ContactDetails() {
  return (
    <Grid container
direction="row"
spacing={{ xs: 2, sm: 10, md: 0 }}
sx={{
justifyContent: "space-evenly",
alignItems: "center",
my:15
  }}>
        <Grid item xs={6} md={4}>
            <Box sx={{
                textAlign:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'#09316f'
                }}>
                       Call Us
                </Typography>
                     
                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                    +12 888 729 600
                </Typography>

                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                      +12 974 729 000
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6} md={4}>
            <Box sx={{
                textAlign:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'#09316f'
                }}>
                       Address
                </Typography>
                     
                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                    1216 mirpur dhaka
                </Typography>

                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                     320 cumilla
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6} md={4}>
            <Box sx={{
                textAlign:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'#09316f'
                }}>
                       Skype id
                </Typography>
                     
                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                    @userthemes
                </Typography>

                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                      @monidatheme
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6} md={4}>
            <Box sx={{
                textAlign:'center'
            }}>
                <Typography variant='h4' sx={{
                    color:'#09316f'
                }}>
                       Email
                </Typography>
                     
                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                   userthemes@gmail.com
                </Typography>

                <Typography variant='body2' sx={{
                    color:'#565969'
                }}>
                      info@modinathme.com
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
}
