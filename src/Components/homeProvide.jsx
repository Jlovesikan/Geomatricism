import { Box,Container,Grid } from '@mui/material'
import React from 'react'
import HomeProvideCrad from './homeProvideCrad'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RoofingIcon from '@mui/icons-material/Roofing';
import ConstructionIcon from '@mui/icons-material/Construction';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';

export default function HomeProvide() {
  return (
    <Box
    sx={{
        minHeight:'100vh',
        my:5,
    }}>
       
       <Container maxWidth='xl'>
         <Box sx={{
        Width:'100vw',
        }}>
            
        <Grid container spacing={2}  sx={{mb:5}}>
         <Grid item sm={6}>
           <HomeProvideCrad
           Icon={HomeWorkIcon}
           name='Design build'
           details='A complete solution that brings design and construction under one team, ensuring smooth execution from concept to completion'
           />
         </Grid>

        <Grid item sm={6}>
           <HomeProvideCrad
           Icon={EngineeringIcon}
           name='General Construction'
           details='Comprehensive construction services delivered with superior craftsmanship, attention to detail, and trusted expertise.'
           />
         </Grid>

         <Grid item sm={6}>
           <HomeProvideCrad
           Icon={RoofingIcon}
           name='Floors & Roofs'
           details='Premium flooring and roofing solutions engineered for durability, safety, and long-lasting visual appeal'
           />
         </Grid>

         <Grid item sm={6} >
           <HomeProvideCrad
           Icon={AgricultureIcon}
           name='Building Construction'
           details='A complete, high-end construction solution that combines expert planning, quality materials, and precise execution from concept to final delivery.'
           />
         </Grid>

         <Grid item sm={6}>
           <HomeProvideCrad
           Icon={ImagesearchRollerIcon}
           name='Rooms & Halls'
           details='Beautifully designed living spaces that blend comfort, functionality, and refined aesthetics for a premium lifestyle experience.'
           />
         </Grid>

         <Grid item sm={6}>
           <HomeProvideCrad
           Icon={ConstructionIcon}
           name='Architecture Design'
           details='Thoughtfully crafted architectural designs that balance creativity, structural integrity, and modern luxury standards.'
           />
         </Grid>
         
        </Grid>
        </Box>
       </Container>
  
    </Box>
  )
}
