import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { auth } from "../authentication/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/types/reduxTypes";
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginInformation = useSelector((state) => state.loginInformation);
    const user = useSelector((state) => state.user);
    
    console.log(user)

    const handleLogout = async () => {
      try {
        await signOut(auth);
        dispatch({type:LOGOUT})
        navigate("/")
      } catch(error) {
        console.log(error.message);
      }
    }

    console.log(loginInformation)
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='d-flex justify-content-between'>
          <div>
          <Typography variant="h5" component="h5" sx={{ flexGrow: 1, cursor:"pointer"}} onClick={() => navigate("/")}> Movie App </Typography>
          </div>
          { loginInformation || (<div>
          <Button sx={{fontSize:"medium"}} color="inherit" onClick={() => navigate("/login")}>Login</Button>
          <Button sx={{fontSize:"medium"}} color="inherit" onClick={() => navigate("/register")}>Register</Button>
          </div>) }
          { loginInformation && (<div>
          <h5 style={{display:"inline"}}>{user?.user?.email || user}</h5>
          <Button sx={{fontSize:"medium"}} color="inherit" onClick={() => navigate("/register")} onClick={handleLogout}>Logout</Button>
          </div>) }
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;