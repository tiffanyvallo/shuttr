import React, { useState, useEffect } from 'react';
import {Image} from 'cloudinary-react'
import axios from 'axios';
// import loadingGif from './spinner.gif';

export default function ImageUpload() {
  const url = 'https://api.cloudinary.com/v1_1/dryaxqxie/image/upload';
  const preset = 'cyber_photos';
  const [image, setImage] = useState('');
  const [hashtag, setHashtag] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = e => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async () => {
    console.log('clicked')
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      setLoading(true);
      const res = await axios.post(url, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios.post('http://localhost:3001/upload', {
        imageUrl,
        hashtag, 
        caption
      });
      setLoading(false);
      setImage(image.data);
    } catch (err) {
      console.error(err);
    }
  };
  return(
    <div className="form_wrapper">
        <input type='file' name='image' onChange={onChange} />
        <input type="text"  onChange={(e) => setHashtag(e.target.value)} value={hashtag} placeholder="hashtag" />
        <input type="text" onChange={(e) => setCaption(e.target.value)} value={caption} placeholder="caption" />
        <button onClick={onSubmit} className='btn center'>
          Upload
        </button>
        <Image className="cloud_photo" cloudName="cyber_photos" publicId="https://res.cloudinary.com/dryaxqxie/image/upload/v1623337463/jckg0zqclgbkitlzv9uv.jpg"/> 
    </div>
  )
}