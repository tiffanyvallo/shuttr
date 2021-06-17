import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import loadingGif from './Loading_icon.gif';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import MiniMap from '../../components/MiniMap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function ImageUpload() {
  const url = 'https://api.cloudinary.com/v1_1/dryaxqxie/image/upload';
  const preset = 'cyber_photos';
  const [image, setImage] = useState('');
  const [hashtag, setHashtag] = useState("");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false);
  const [previewSource, setPreviewSource] = useState("")
  const [coordinates, setCoordinates] = useState({
    lat: 51.5073509,
    lng: -0.1277583
  });
  
  const onChange = e => {
    setImage(e.target.files[0]);
    const file = e.target.files[0]
    previewFile(file)
  };

  const previewFile = (file => {
    const reader = new FileReader();
    // reads the file as url to create preview
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  })

  function isLoading(){
    if (loading == true) {
      return <div><h4>Uploading</h4><img style={{width: 100}}src={loadingGif}/></div>
    } 
  }
  

  const onSubmit = async () => {
    console.log(location)
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      setLoading(true);
      isLoading(true)
      const config = {withCredentials: true}
      const res = await axios.post(url, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios.post('http://localhost:3001/upload', {
        imageUrl,
        hashtag, 
        caption, 
        location,
        coordinates, 
        description
      }, config).then (window.location.href = "/discover")
      console.log(image.data);
      setLoading(false);
      isLoading(false)
      setImage('');
      setCaption('')
      setHashtag('')
      setLocation('')
      setDescription('')
      setPreviewSource('')
    } catch (err) {
      console.error(err);
      
    }
  }; 

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value);
    setCoordinates(latLng);
  };

  const searchOptions = {
    componentRestrictions: { country: ['gb'] }
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundColor: '#2c3531',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
  
  // export default function SignInSide() {
  //   const classes = useStyles();
  
  //   return (
  //     <Grid container component="main" className={classes.root}>
  //       <CssBaseline />
  //       <Grid item xs={false} sm={4} md={7} className={classes.image} />
  //       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //         <div className={classes.paper}>
  //           <Typography component="h1" variant="h5">
  //             Upload
  //           </Typography>
  //           <form className={classes.form} noValidate>
  //             <TextField
  //               variant="outlined"
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Address"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //             />
  //             <TextField
  //               variant="outlined"
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //             />
  //             <FormControlLabel
  //               control={<Checkbox value="remember" color="primary" />}
  //               label="Remember me"
  //             />
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               color="primary"
  //               className={classes.submit}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link href="#" variant="body2">
  //                   Forgot password?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <Link href="#" variant="body2">
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //             <Box mt={5}>
  //               <Copyright />
  //             </Box>
  //           </form>
  //         </div>
  //       </Grid>
  //     </Grid>
  //   );
  // }
  return(
    <div class="page_wrapper">
    <div className="form_wrapper">
        <h1>Upload</h1>
        {isLoading()}
        <input type='file' name='image' onChange={onChange}/>
        <PlacesAutocomplete
        searchOptions={searchOptions}
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  cursor: "pointer"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <input type="text"  onChange={(e) => setHashtag(e.target.value)} value={hashtag} placeholder="#hashtag" />
        <input type="text" onChange={(e) => setCaption(e.target.value)} value={caption} placeholder="caption" />
        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="description" />
        <button onClick={onSubmit}>
          Upload
        </button>
        {(previewSource) && (
          <div>
            <h3 className="preview-text">Upload preview:</h3>
            <img src={previewSource} alt="chosen" className="preview-image"/>
          </div>
        )}
         </div>
          <div class="map_card">
         <h2>Preview</h2>
         <div class="minimap_wrapper">
           <MiniMap lat={coordinates.lat} lng={coordinates.lng} />
           </div>
           </div>
         </div>
  )
}