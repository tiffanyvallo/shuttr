import React, {useState} from "react";
import Axios from "axios";
import './index.css'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" style={{color: '#51fbee'}} align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      Shuttr 
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  
  root: {
    height: '100vh',
    backgroundColor: '#fffffff',
  },
  text: {
    colorBlack: "#000000"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?london,shoreditch)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1), 
    color: '#ffffff',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const signup = () =>{
  //   window.location.href = "/"; 
  // }
   const login = () => {
    
    Axios({     
       method: "POST",      
       data: { 
        username: loginUsername.toLowerCase(),        
        password: loginPassword,      
      },      withCredentials: true,      
      url: "http://localhost:3001/login",    
      }).then((res) => {      
       if (res.data === "Successfully Authenticated") {
        window.location.href = "/discover";      
       }    
    });  
  };
  const classes = useStyles();
  return (
    <Grid  container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid style={{backgroundColor: '#2c3531', color: '#ffffff'}} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div  className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form  className={classes.form} noValidate>
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            autoFocus
            // style={{backgroundColor: 'grey', border: 'white'}}
            onChange={(e) => {
             setLoginUsername(e.target.value);
             
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
            setLoginPassword(e.target.value);
            }}
          />
          
          <Button
            type="button"
            fullWidth
            variant="contained"
            
            className={classes.submit}
            onClick={login}
            style={{backgroundColor: '#51fbee', color: '#000000'}}
          >
            Login
          </Button>
          <Grid container>
            
            <Grid item>
              <Link to="/signup" style={{color: "#ffffff"}} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
    )
}