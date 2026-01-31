import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Services', 'All Project'];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
};

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccountBalanceIcon sx={{ fontSize: '20px',color:'#1a1c5e',}}/>
        GeoMatricism
      </Typography>

      <Divider />

      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'white', boxShadow: 'none' }}>
        <Toolbar sx={{ py: 2, px: { xs: 2, sm: 6, md: 12 } }}>
          <IconButton
            color="#1a1c5e"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, 
                display: { sm: 'none' } 
            }}>

          <MenuIcon />

          </IconButton>
          
        <Box sx={{
              flexGrow: 1,
              display: 'flex',
              my: 2,
              alignItems: 'center',
              gap: 2,
              ml: { xs: 0, sm: 5 },
              fontSize: '25px',
              color: '#09316f',
            }}>
             <AccountBalanceIcon sx={{ fontSize: '30px',color:'#09316f',}} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: '600',
            }}
          >
            GeoMatricism
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item}
                sx={{
                  color: '#09316f',
                  fontWeight: '600',
                  mx: 2,
                  '&:hover': {
                    color: '#e35e25',
                  },
                }}
              >
                {item}
              </Button>
            ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Toolbar /> {/* pushes content below AppBar */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
