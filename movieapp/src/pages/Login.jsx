import { LoginStyledDıvImg, LoginStyledForm } from "./Login.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const Login = () => {

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email.match(reg)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }

  return (
    <div className="d-flex">
      <LoginStyledDıvImg></LoginStyledDıvImg>
      <LoginStyledForm className="d-flex flex-column justify-content-center">
        <h2 className="text-center">LOGIN</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="d-flex flex-column align-items-center">
          <TextField id="outlined-required" label="Email" type="" required sx={{ width: "80% !important" }} fullWidth error={emailError} helperText={emailError && "Invalid Email"} onChange={handleEmail}/>
            <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
              
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                required
              />
              <Button sx={{ marginTop: "1rem", width: "100%" }} type="submit" variant="contained" onClick={handleLogin}>Login</Button>
              <Button sx={{ marginTop: "1rem", width: "100%", textTransform: "initial" }} variant="contained">Continue with Google</Button>
            </FormControl>

          </div>
        </Box>
      </LoginStyledForm>
    </div>
  );
};

export default Login;
