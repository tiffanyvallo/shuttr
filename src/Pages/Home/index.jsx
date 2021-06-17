import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react'
import './index.css'
import drone from './banner_dark.mp4';
import logo from './shuttrlogo.png'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';

export default function Home() {
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
  const classes = useStyles();
  return (
    <div class="home-wrapper">
      <div class="fullscrenvideo">
      <div class="overlay"><img class="shuttrlogo" src={logo}></img></div>
      <video className='videoTag' autoPlay loop muted>
            <source src={drone} type='video/mp4' />
      </video>
      </div>
      <div class="cta-wrapper"></div>
      <div class="grid">
        <div class="grid-right">
        </div>
      </div>
      <div >
      <p style={{color: 'white'}}>Don't have an account?</p>  
           
      <Button
          type="button"
          width='50%'
          variant="contained"
          color="primary"
          href="/signup"
          className={classes.submit}
          style={{backgroundColor: '#51fbee', color: '#000000'}}
          >
          Sign up
      </Button>
      
    </div>
    </div>


       

   

  //   <Player poster="/assets/poster.png" fluid={true} preload={"auto"} autoPlay={true}>
  //   <source src="./drone_london.mp4" />
  // </Player>
  );
}