import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Components/home.jsx';
import HomeFaq from './Components/homeFaq.jsx';
import HomeService from './Components/homeService.jsx'
import NavBar from './Components/NavBar.jsx';
import { createTheme } from '@mui/material/styles';
import HomeProvide from './Components/homeProvide.jsx';
import HomeAwesome from './Components/homeAwesome.jsx';
import HomeImage from './Components/homeImageCard.jsx';
import Footer from './Components/footer.jsx';


function App() {
  const theme = createTheme({
  typography: {
    fontFamily: 'Yantramanav, sans-serif',
  },
});
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
       <>
      <NavBar/>
      <Home/>
      <HomeService/>
      <HomeFaq/>
      <HomeProvide/>
      <HomeAwesome/>
      <HomeImage/>
      <Footer/>
  </>
    </ThemeProvider>
 
  );
}

export default App;
