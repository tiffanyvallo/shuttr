import React from 'react';
import './index.css';

const Photo = ({ id, hashtag, src }) => {
  return (
    <div className="photo">
      <p className="photo-id">The id of the photo is: {id}</p>
      <p className="photo-hashtag">Hashtag is: {hashtag}</p>
      <img src={process.env.PUBLIC_URL + src} />
    </div>
  );
};

export default Photo; 