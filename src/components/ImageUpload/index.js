import React, {Component, useState} from 'react'
import Axios from 'axios'
import {Image} from 'cloudinary-react'
import './index.css'
 
function ImageUpload() {
  const [hashtag, setHashtag] = useState("");
  const [caption, setCaption] = useState("");
  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    console.log(imageSelected)
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "cyber_photos")

    Axios.post("https://api.cloudinary.com/v1_1/dryaxqxie/image/upload", formData).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="form_wrapper">
      <input type="file" onChange={(event) => {setImageSelected(event.target.files[0])}}/>
      <input type="text" placeholder="hashtag" />
      <input type="text" placeholder="caption" />
      <button onClick={uploadImage}>Upload Image</button>

      <Image className="cloud_photo" cloudName="cyber_photos" publicId="https://res.cloudinary.com/dryaxqxie/image/upload/v1623337463/jckg0zqclgbkitlzv9uv.jpg"/> 
    </div>
  )
}

export default ImageUpload