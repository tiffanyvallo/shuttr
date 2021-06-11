import React, {Component, useState} from 'react'
import Axios from 'axios'
import {Image} from 'cloudinary-react'
import './index.css'
 
function ImageUpload() {
  const [hashtag, setHashtag] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState("")
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState("")

  // if file changes then change state on everything
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

  const previewFile = (file => {
    const reader = new FileReader();
    // reads the file as url to create preview
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  })

  // handles the submit and prevents the page reloading then pushes it online
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    const reader = new FileReader()
    uploadImage(previewSource)
  }
   // turns the image into a string then does async request to push could change to axios
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
      await fetch('/uploadImage', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form_wrapper">
      <input type="text" placeholder="hashtag" />
      <input type="text" placeholder="caption" />
      <form onSubmit={handleSubmitFile}>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                />
                <button type="submit">
                    Submit
                </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
      )}
      <Image className="cloud_photo" cloudName="cyber_photos" publicId="https://res.cloudinary.com/dryaxqxie/image/upload/v1623337463/jckg0zqclgbkitlzv9uv.jpg"/> 
    </div>
  )
}

export default ImageUpload