import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}> Movie App </Typography>
          <Button sx={{fontSize:"medium"}} color="inherit">Login</Button>
          <Button sx={{fontSize:"medium"}} color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;