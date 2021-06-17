import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './index.css'

const images = [
  {
    url: "https://res.cloudinary.com/dryaxqxie/image/upload/v1623939967/erilqk0qiguividbjvq5.jpg",
    title: 'Architecture',
    width: '33.4%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939946/brvw91jzygfjpuky8rsk.jpg',
    title: 'Colourful',
    width: '33.3%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939957/hcie3peztxbtsatgxgy8.jpg',
    title: 'Greenery',
    width: '33.3%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623687028/a10bfadoyvgduczxatit.jpg',
    title: 'Vibes',
    value: 'vibes',
    width: '33.4%',
  },
  {
    url: "https://res.cloudinary.com/dryaxqxie/image/upload/v1623338814/qcmksfniv6ml6uyx8kes.jpg",
    title: 'Tourist',
    width: '33.3%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939955/jtopwat1d4jttdthmxuv.jpg',
    title: 'StreetArt',
    width: '33.3%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939960/znb8jjsgqqiyn9xgyhg7.jpg',
    title: 'Rooftop',
    width: '33.4%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939961/mxmibcyxrbs2ckgxye1k.jpg',
    title: 'Sunset',
    width: '33.3%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623939967/m3ecnwe1gsrbjoqsf4ip.jpg',
    title: 'Lights',
    width: '33.3%',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100vw',
    height: '100vh',
    
  },
  image: {
    position: 'relative',
    height: '33.4%',
    [theme.breakpoints.down('xs')]: {
      width: '255px !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid #ffcb9a',
        color: '#ffcb9a',
        backgroundColor: '#2c35317a',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d1e8e2',
  },
  

  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  return (
    <div class="hashtagswrapper">
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick= {(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3000/'+ image.title;
            }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </div>
  );
}


