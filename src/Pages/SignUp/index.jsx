import React, { useState } from "react";
import Axios from "axios";
import './index.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const url = 'https://api.cloudinary.com/v1_1/dryaxqxie/image/upload';
  const preset = 'cyber_photos';
  const [image, setImage] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [jobReg, setJobReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [passwordConfirmationReg, setPasswordConfirmationReg] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isMsg, setIsMsg] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})");
  const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  let newMsgTimeoutHandle = 0;
  const passwordCriteria = ["Password does not meet criteria:",
    "\n• Must be over 4 characters long",
    "\n• Must include numbers and letters",
    "\n• Must include at least 1 upper and lower case letter"]

  let newText = passwordCriteria.join('').split('\n').map(i => {
    return <p>{i}</p>
  });


  const componentWillUnmount = () => {
    clearTimeout(newMsgTimeoutHandle);
  }

  const register = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    const res = await Axios.post(url, formData);
    const imageUrl = res.data.secure_url;
    try {
      await Axios.post("http://localhost:3001/signup", {
        name: nameReg,
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
        publicId: imageUrl,
        job: jobReg,

      },
        {
          withCredentials: true,
        }).then((response) => {
          console.log(response);
          if (response.data === "User Created") {
            window.location.href = "/login";
          } else if (response.data !== "User Created") {
            setIsMsg("User already exists, please sign in or create new account")
            clearTimeout(newMsgTimeoutHandle);
            newMsgTimeoutHandle = setTimeout(() => {
              setIsMsg("")
              newMsgTimeoutHandle = 0;
            }, 6500)
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = e => {
    setImage(e.target.files[0]);
    const file = e.target.files[0]
  };

  const checkValidation = (e) => {
    if (!emailRegex.test(emailReg)) {
      setEmailMsg("Not a valid email address")
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setEmailMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else if (!strongRegex.test(passwordReg)) {
      setNewMsg(newText)
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setNewMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else if (passwordReg !== passwordConfirmationReg) {
      setIsMsg("Passwords do not match")
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setIsMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else {
      register()
    }
  };
  const classes = useStyles();
  return (
    <Container  style={{backgroundColor: '#2c3531', color: '#ffffff'}}component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      {emailMsg} {newMsg} {isMsg} {userMsg}
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Username"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => {
          setUsernameReg(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Name"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => {
          setNameReg(e.target.value);
          }}
        />
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Job Title"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => {
        setJobReg(e.target.value);
        }}
        />
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => {
        setEmailReg(e.target.value);
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
          setPasswordReg(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password Confirmation"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => {
          setPasswordConfirmationReg(e.target.value);
          }}
        />
        
        <Button
          variant="contained"
          component="label"
          style={{backgroundColor: '#51fbee', color: '#000000' }}
        >
        Profile Picture
        <input
        type="file"
        hidden
        onChange={onChange}
        style={{display: 'none'}}
        />
          </Button>
        
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={checkValidation}
          // href = "/login"
          style={{backgroundColor: '#51fbee', color: '#000000'}}
        >
          Create User
        </Button>
        <Grid container>
          
          <Grid item>
            
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  )
}
