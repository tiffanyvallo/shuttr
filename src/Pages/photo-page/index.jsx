import React from 'react';
import './index.css';
import  Photo  from '../../components/Photo';

const PhotosList = () => {
  // const [photos] = usePhotos();
  const photos = [{id:1, hashtag:"logo", src: "/london1.jpg" }, {id:2, hashtag:"Test", src: "/london2.jpg" } ]
  return (
    <div className="photos-list">
      {photos.map((photo) => (
        <Photo key={`${photo.id}`} {...photo}/>
      ))}
    </div>
  );
}
export default PhotosList;
