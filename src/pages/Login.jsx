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
import googleicon from "../assets/google-icon.png"
import { useState } from "react";
import { auth } from "../authentication/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/types/reduxTypes";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify, toastInfoNotify } from "../helpers/ToastifyNotifies";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email)
  const password = useSelector((state) => state.password)
  const user = useSelector((state) => state.user)
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const providerGoogle = new GoogleAuthProvider();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.match(reg)) {
      setEmailError(false)
    } else {
      setEmailError(true)
      toastErrorNotify("Invalid email address!")
    }

    if (String(password).length < 6) {
      setPasswordError(true)
      toastErrorNotify("Invalid password!")
    } else {
      setPasswordError(false)
    }

    if (!emailError && !passwordError) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        dispatch({ type: LOGIN, payload: user, email: email, password: password, login: true })
        navigate("/");
        toastSuccessNotify("Logged in successfully!");
      } catch (error) {
        toastErrorNotify("User not found!")
        toastInfoNotify("You must be register to login.")
      }
    }
  }

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your mailbox!")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const userName = result.user.displayName;
        localStorage.setItem("userName", userName)
        dispatch({ type: LOGIN, payload: localStorage.getItem("userName"), email: email, password: password, login: true })
        navigate("/");
        toastSuccessNotify("Logged in successfully with Google!")
      })
      .catch((error) => {
        console.log(error.message)
      })
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
            <TextField id="outlined-required" label="Email" type="" required sx={{ width: "80% !important" }} fullWidth error={emailError} helperText={emailError && "Invalid Email"} onChange={(e) => dispatch({ type: LOGIN, email: e.target.value, password: password, payload: user, login: false })} />
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
                onChangeCapture={(e) => dispatch({ type: LOGIN, password: e.target.value, email: email, payload: user, login: false })}
              />
              <div style={{ marginTop: "0.8rem" }} >
                <p style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }} onClick={() => forgotPassword(email)}>Forgot your password?</p>
              </div>
              <Button sx={{ marginTop: "0.3rem", width: "100%" }} type="submit" variant="contained" onClick={handleLogin}>Login</Button>
              <Button sx={{ marginTop: "1rem", width: "100%", textTransform: "initial", gap: "1rem" }} variant="contained" onClick={signInWithGoogle}>
                <div style={{height:"1.8rem", gap:"0.5rem", alignItems:"center !important" }} className="d-flex flex-row justify-content-center">
                  <img style={{ width: "1.5rem", height: "1.5rem" }} src={googleicon} alt="google-icon" />
                  <p style={{fontSize:"medium"}}>Continue with Google</p>
                </div>
              </Button>
            </FormControl>

          </div>
        </Box>
      </LoginStyledForm>
    </div>
  );
};

export default Login;
