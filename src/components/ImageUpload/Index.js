// import React from 'react';
import React, {Component} from 'react'
import ImageUploading from 'react-images-uploading';
import axios from 'axios'
 
export class ImageUpload extends Component {
  state = {
    selectedFile: null
  }
  // const [images, setImages] = React.useState([]);
  // const maxNumber = 69;
  // const onChange = (imageList, addUpdateIndex) => {
  //   // data for submit
  //   console.log(imageList, addUpdateIndex);
  //   setImages(imageList);
  // };
  
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log('You clicked submit.');
  // }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    console.log(fd)
    // app.post('/photos', fd)
    // .then(function (response){
    //   console.log(response)
    // })
  }

 render(){
  return (
    <div className="App">
      <input type="file" onChange={this.fileSelectedHandler}></input>
      <button onClick={this.fileUploadHandler}>Upload</button>
      {/* <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        acceptType={['jpg', 'gif', 'png']}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="500" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                  <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                 </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading> */}
    </div>
  );
}}

export default ImageUpload