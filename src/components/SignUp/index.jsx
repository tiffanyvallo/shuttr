import React, {useState} from "react";
import Axios from "axios";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import Box from '@material-ui/core/Box';
import '@fontsource/roboto';
import './index.css'

export default function SignUp() {
  
  const[usernameReg, setUsernameReg] = useState('');
  const[passwordReg, setPasswordReg] = useState('');
  const[emailReg, setEmailReg] = useState('');
  const[nameReg, setNameReg] = useState('');

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  
  const register = () => {
    
      Axios.post("http://localhost:3001/signup", {
      name: nameReg,
      username: usernameReg, 
      password: passwordReg,
      email: emailReg,
  },
  {
      withCredentials: true,
   }).then((response) => {
     console.log(response);
     if (response.data === "User Created") {
       window.location.href = "/login";
     }
   });
  };

  return (
    <div>
    <Box class="form_wrapper" mt={300}> 
      <h1>Sign up in here</h1>
      <FormControl paddingTop={300}>
        <TextField
        className={classes.margin}
        onChange={(e) => {
          setNameReg(e.target.value)}}
        id="input-with-icon-textfield"
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <br/>
        <TextField
        className={classes.margin}
        onChange={(e) => {
          setUsernameReg(e.target.value)}}
        id="input-with-icon-textfield"
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <br/>
        <TextField
        className={classes.margin}
        onChange={(e) => {
          setEmailReg(e.target.value)}}
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <br/>
        <TextField
        className={classes.margin}
        onChange={(e) => {
          setPasswordReg(e.target.value)}}
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />
      <br/>
      <div>
        <br />
        <Button variant="contained" color="primary" type="submit" onClick={register}>Create User</Button>
      </div>
      </FormControl>
    </Box>
    </div>
    )
}

 
