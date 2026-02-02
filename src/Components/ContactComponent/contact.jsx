import React from 'react'
import NavBar from '../NavBar'
import MultipleHome from '../StyledComponents/MultipleHome'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../footer'
import ContactDetails from './contactDetails';
import Send from './send';




export default function Contact() {
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
      head='CONTACT US'
      page='Get A Free Quote'
      />
      <ContactDetails/>
      <Send/>
      <Footer/>
    </>
    </ThemeProvider>
  )
}
