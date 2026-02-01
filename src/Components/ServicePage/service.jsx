import React from 'react'
import NavBar from '../NavBar'
import MultipleHome from '../StyledComponents/MultipleHome'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../footer';
import HomeService from '../homeService';
import ProvideService from './ProvideService';
import RequestPage from './requestPage';

export default function Service() {
   const theme = createTheme({
  typography: {
    fontFamily: 'Yantramanav, sans-serif',
  },
})
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
    <>
      <NavBar />
      <MultipleHome
      head='WHO WE ARE'
      page='Our Services'
      />
      <ProvideService/>
      <RequestPage/>
      <Footer/>
    </>
    </ThemeProvider>
  )
}
