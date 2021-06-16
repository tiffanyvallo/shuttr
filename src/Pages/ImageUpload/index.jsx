import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import loadingGif from './Loading_icon.gif';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import MiniMap from '../../components/MiniMap';

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
    lat: null,
    lng: null
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

  return(
    <div>
    <div className="form_wrapper">
        <h1>Upload</h1>
        {isLoading()}
        <input type='file' name='image' onChange={onChange}/>
        <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

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

        {/* <MiniMap /> */}
         </div>

         {(previewSource) && (
          <div class="preview-image-div">
            <h3 className="preview-text">Preview:</h3>
            <img src={previewSource} alt="chosen" className="preview-image"/>
          </div>
        )}
         </div>
  )
}