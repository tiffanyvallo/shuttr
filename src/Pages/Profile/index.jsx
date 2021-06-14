import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Image} from 'cloudinary-react';

function Profile() {
  return (
    <div>
      <div class="userwrapper">
      <div class="profilephoto_wrapper">
      <Image className="profile_photo" cloudName="cyber_photos" publicId="https://res.cloudinary.com/dryaxqxie/image/upload/v1623337513/hjvq77wfl4aycsw4juvw.jpg" />
      </div>
      <div>
      <h3>@kittymcwhiskerson</h3>
      <p class="profile-title">Avid photographer of fish</p>
      <small>London, UK</small>
      </div>
      </div>
      <div class="userposts"><p>To put all the posts in here</p></div>
    </div>
   );
}

export default Profile;
