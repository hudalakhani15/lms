import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Drawer as MuiDrawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

function Drawer(props) {
  const { window, dataSource, nestedRoutes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clickNavigate = (routeTo) => {
    navigate(routeTo);
  };

  const drawer = (
    <div>
      <Toolbar
      // sx={{ backgroundColor: '#2B2B42' }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            fontFamily:"fantasy",
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          onClick={() => { clickNavigate('/admin') }}
        >
       
        MY DASHBOARD
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {dataSource && dataSource.length > 0 ? dataSource.map((e, i) => (
          <ListItem key={e.name} disablePadding>
            <ListItemButton onClick={() => { clickNavigate(e.to) }}>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </ListItem>
        )) : null}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1a5b61',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => { clickNavigate('/') }}
            sx={{
              mr: 2,
              fontFamily: 'initial',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Dashboard Screens
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <MuiDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </MuiDrawer>
        <MuiDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </MuiDrawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Admin Screen Text.
        </Typography> */}


        {/* Nested Routes */}
        {nestedRoutes}
  

      </Box>
    </Box>
  );
}

Drawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Drawer;