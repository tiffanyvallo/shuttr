import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './index.css'

const images = [
  {
    url: "https://res.cloudinary.com/dryaxqxie/image/upload/v1623688191/y9z8fmdalbouam54h427.jpg",
    title: 'Architecture',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623687028/a10bfadoyvgduczxatit.jpg',
    title: 'Colourful',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623335228/sample.jpg',
    title: 'Park',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623688175/jqpiawqates2qijb3sbe.jpg',
    title: 'Monument',
    width: '30%',
  },
  {
    url: "https://res.cloudinary.com/dryaxqxie/image/upload/v1623338814/qcmksfniv6ml6uyx8kes.jpg",
    title: 'Sightseeing',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623687932/ve0wggzncpawe2slxbt0.jpg',
    title: 'Station',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623688578/gxrvmyljsw1zwkcc9weq.jpg',
    title: 'Iconic Pubs',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623687960/nvx7q1na2ikwjupg5kf2.jpg',
    title: 'Alley',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dryaxqxie/image/upload/v1623688057/qz949gvy0zszruoycypr.jpg',
    title: 'Stairs',
    width: '30%',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
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
        border: '4px solid currentColor',
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
    color: theme.palette.common.white,
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
    backgroundColor: theme.palette.common.white,
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


