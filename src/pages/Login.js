import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import login_image from "../images/login.jpg";
import logo_image from "../images/logo.jpg";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../auth/firebase";
import ErrorHandler from "./ErrorHandler";


 
function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export default function Login() {
  const [isSignUp,setIsSignUp] = React.useState(false)
  const [isSignedUp,setIsSignedUp] = React.useState(false);
  const [errorLogged, setErrorLogged] = React.useState(false);
  const signInFormRef = React.useRef(null);
  const signUpFormRef = React.useRef(null);
  const navigate = useNavigate();
  const domain = "gmail.com";
  const isValidEmail = (email) => {
    const regexPattern = new RegExp(`\\b\\w+@${domain}\\b`, "gi");
    return regexPattern.test(email);
  };

  React.useEffect(() => {
    if(sessionStorage.getItem('isLoggedIn')){
      navigate('/home')
    }
  
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    if (!data.get('email') && !data.get('password')){
   
      // Show error message for empty fields
      setErrorLogged("Please fill in both email and password fields.");
      return;
    }
    if (!data.get('email') ){
      setErrorLogged("Please enter the email");
      return;
  
    }
    if(!isValidEmail(data.get('email'))){
      setErrorLogged("Please enter the valid email");
      return;
    }
    if (!data.get('password') ){
      setErrorLogged("Please enter the password");
      return;
  
    }
    
    setErrorLogged("");
   
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
  .then((userCredential) => {
    setErrorLogged("");
    signInFormRef.current?.reset();
    sessionStorage.setItem('isLoggedIn','yes')
    navigate("/home");
    // ...
  })
  .catch((error) => {
    setErrorLogged(error.message);
  });

   
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get('signupEmail') && !data.get('signupPassword')){
   
      // Show error message for empty fields
      setErrorLogged("Please fill in both email and password fields.");
      return;
    }
    if (!data.get('signupEmail') ){
      setErrorLogged("Please enter the email");
      return;
  
    }
    if(!isValidEmail(data.get('signupEmail'))){
      setErrorLogged("Please enter the valid email");
      return;
    }
    if (!data.get('signupPassword') ){
      setErrorLogged("Please enter the password");
      return;
  
    }
    
    setErrorLogged("");
   
   
    createUserWithEmailAndPassword(auth, data.get('signupEmail'), data.get('signupPassword'))
    .then((userCredential) => {
      setErrorLogged("");
      signUpFormRef.current?.reset();
      setIsSignedUp(true);
     // setIsSignUp(false)

      
      // ...
    })
    .catch((error) => {
      setErrorLogged(error.message);
      // ..
    });
  

    //navigate("/home");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container className="login-page" component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:`url(${login_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position:'relative',
          }}
        >
          <Box className="bg"></Box>
            <Box
            sx={{
              textAlign: 'center',
              width:'60%',
              position: 'absolute',
              color: '#ffffff',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Center the content vertically and horizontally
            }}
          >
            
            <Typography component="h1" variant="h3" className='login-title'>
              Welcome to RMG Sports Club!
            </Typography>
            <Typography variant="body1" component="p" paragraph className='login-content'>
              Sign in to access your account and stay updated with the latest events and news in the sports club community.
            </Typography>
            {/* Add any additional content or components you want here */}
          </Box>
          </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}

            className={`signin-form ${!isSignUp ? 'active' : ''}`}
          >
            
            <img className = "logo" src={logo_image} alt="Logo" />
           
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {errorLogged && <ErrorHandler error={errorLogged} />}
            <Box component="form" ref={signInFormRef} noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
             <Box className="button-box">
              <Button
                type="submit"
                className='btn'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              </Box>
              <Grid container>
              {/*<Grid item xs>
                 <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>*/}
                <Grid item>
                  <Link href="#" variant="body2" onClick = {() => setIsSignUp(true)}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
          <Box
          sx={{
            my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
          className={`signup-form ${isSignUp ? 'active' : ''}`}
        >
          
          <img className = "logo" src={logo_image} alt="Logo" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {errorLogged && <ErrorHandler error={errorLogged} />}
          { isSignedUp &&
        <Box style={{'color':'green'}}>
          User registered successfully.Try to <a href="/login">login</a> now
        </Box>
        }
          <Box component="form" noValidate ref={signUpFormRef} onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="signupEmail"
                  label="Email Address"
                  name="signupEmail"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="signupPassword"
                  label="Password"
                  type="password"
                  id="signupPassword"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Box className="button-box">
            <Button
              type="submit"
              
              className='btn'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Box>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick = {() => setIsSignUp(false)}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      
        
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
