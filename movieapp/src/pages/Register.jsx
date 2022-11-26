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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../authentication/firebase";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER } from "../redux/types/reduxTypes";
import registerTrueImg from "../assets/registertrue.png"
import registerUnsuccessImg from "../assets/registerwrong.png"
import { toastSuccessNotify, toastErrorNotify, toastInfoNotify } from "../helpers/ToastifyNotifies";

const Register = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.email)
  const password = useSelector((state) => state.password)
  const user = useSelector((state) => state.user)

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [userName, setUserName] = useState("")
  const [userNameError, setUserNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)  
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [registerUnsuccess, setRegisterUnsuccess] = useState(false)

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

  const handleRegisterEmail = (e) => {
    dispatch({type: REGISTER, email:e.target.value, password:password, payload:user})
    setRegisterSuccess(false);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email.match(reg)) {
      setEmailError(false)
      setRegisterUnsuccess(false)
    } else {
      setEmailError(true)
      setRegisterUnsuccess(true)
      toastErrorNotify("Invalid email address!")
    }

    if(String(password).length < 6) {
      setPasswordError(true)
      setRegisterUnsuccess(true)
      toastErrorNotify("Invalid password!")
    } else {
      setPasswordError(false)
    }

    if(String(userName).length < 5) {
      setUserNameError(true)
      setRegisterUnsuccess(true)
      toastErrorNotify("Invalid username!")
    } else {
      setUserNameError(false)
    }
    
    if (!emailError && !passwordError && !userNameError) {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName:userName
        })
        console.log(user);
        dispatch({type:REGISTER, payload:user, email:email, password:password})
        setRegisterSuccess(true)
        setRegisterUnsuccess(false)
        toastSuccessNotify("Registration completed successfully!")
        toastInfoNotify("You can login now...")
      } catch(error) {
        toastErrorNotify("Registration failed!")
        toastErrorNotify("This email has already been registed!")
        toastInfoNotify("You can login with this email address.")
      }
    }
  }

  console.log(user)

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
          <TextField id="outlined-required" label="Username" type="text" required sx={{ width: "80% !important" }} fullWidth error={userNameError} placeholder="Define username at least 5 character..." helperText={userNameError && "Invalid Username"} onChange={(e)=>setUserName(e.target.value)}/>

          <TextField id="outlined-required" label="Email" type="email" required sx={{ width: "80% !important" }} fullWidth error={emailError} helperText={emailError && "Invalid Email"} onChange={handleRegisterEmail}/>
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
                placeholder="Please enter at least 6 character..."
                error={passwordError}
                onChangeCapture={(e) => dispatch({type:REGISTER, password:e.target.value, email:email, PAYLOAD:user})}
              />
              <Button sx={{ marginTop: "1rem", width: "100%" }} type="submit" variant="contained" onClick={handleRegister}>Register</Button>
            </FormControl>

          </div>
        </Box>
        <div className="d-flex justify-content-center mt-1">
        {registerSuccess && <img style={{width:"3rem"}} src={registerTrueImg} alt="successfully-registered" />}
        {registerUnsuccess && <img style={{width:"3rem"}} src={registerUnsuccessImg} alt="successfully-registered" />}
        </div>
        
      </RegisterStyledForm>
    </div>
  );
};

export default Register;
