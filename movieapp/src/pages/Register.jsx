import { RegisterStyledDıvImg, RegisterStyledForm, RegisterStyledImg } from "./Register.styled";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/firebase";

const Register = () => {

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email.match(reg)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    
    if (!emailError) {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        setRegisterSuccess(true)
        console.log(user)
      } catch(error) {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="d-flex">
      <RegisterStyledDıvImg>
        <RegisterStyledImg src="https://i.pinimg.com/originals/46/a1/66/46a166a81cd2190436ddabb20fb625e5.png" alt="register-img" />
        </RegisterStyledDıvImg>
      <RegisterStyledForm className="d-flex flex-column justify-content-center">
        <h2 className="text-center">REGISTER</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="d-flex flex-column align-items-center">
          <TextField id="outlined-required" label="Email" type="" required sx={{ width: "80% !important" }} fullWidth error={emailError} helperText={emailError && "Invalid Email"} onChange={(e) => {
            setEmail(e.target.value)
            setRegisterSuccess(false)}}/>
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
                onChangeCapture={(e) => setPassword(e.target.value)}
              />
              <Button sx={{ marginTop: "1rem", width: "100%" }} type="submit" variant="contained" onClick={handleRegister}>Register</Button>
            </FormControl>

          </div>
        </Box>
        <div className="d-flex justify-content-center mt-1">
        {registerSuccess && <img style={{width:"3rem"}} src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-02-512.png" alt="successfully-registered" />}
        </div>
        
      </RegisterStyledForm>
    </div>
  );
};

export default Register;
