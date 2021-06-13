import React, { useState, useEffect } from 'react';
import {Image} from 'cloudinary-react'
import axios from 'axios';
import './index.css'
import loadingGif from './Loading_icon.gif';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ImageUpload() {
  const classes = useStyles();
  const url = 'https://api.cloudinary.com/v1_1/dryaxqxie/image/upload';
  const preset = 'cyber_photos';
  const [image, setImage] = useState('');
  const [hashtag, setHashtag] = useState("");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewSource, setPreviewSource] = useState("")

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
      return <img src={loadingGif}/>
    } else if (loading == false) {
      return <p>Not Uploading</p>
    }
  }
  

  const onSubmit = async () => {
    console.log('clicked')
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      setLoading(true);
      isLoading(true)
      const res = await axios.post(url, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios.post('http://localhost:3001/upload', {
        imageUrl,
        hashtag, 
        caption
      });
      setLoading(false);
      isLoading(false)
      setImage(image.data);
      setPreviewSource("")
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className="form_wrapper">
        {isLoading()}
        <input type='file' name='image' onChange={onChange} />
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined">Hashtag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        >
          <MenuItem value={"Abstract"}>Abstract</MenuItem>
          <MenuItem value={"Colourful"}>Colourful</MenuItem>
          <MenuItem value={"Rustic"}>Rustic</MenuItem>
          <MenuItem value={"Weird"}>Rustic</MenuItem>
          <MenuItem value={"Pubs"}>Pubs</MenuItem>
          <MenuItem value={"Architecture"}>Architecture</MenuItem>
        </Select>
      </FormControl>
        {/* <input type="text"  onChange={(e) => setHashtag(e.target.value)} value={hashtag} placeholder="hashtag" /> */}
        <input type="text"  onChange={(e) => setLocation(e.target.value)} value={location} placeholder="location" />
        <input type="text" onChange={(e) => setCaption(e.target.value)} value={caption} placeholder="caption" />
        <button onClick={onSubmit}>
          Upload
        </button>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
        )}
     
        <Image className="cloud_photo" cloudName="cyber_photos" publicId="https://res.cloudinary.com/dryaxqxie/image/upload/v1623337463/jckg0zqclgbkitlzv9uv.jpg"/> 
    </div>
  )
}