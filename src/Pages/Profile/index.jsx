import "./index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Image} from 'cloudinary-react';
import {UserContext} from '../../Contexts/UserContext'
import {useContext} from 'react'

function Profile() {

  const data = useContext(UserContext);
  console.log(data)
//--------------------------------------------------------  

const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
const user = data.username
  
  useEffect(() => {
    axios("http://localhost:3001/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const pics = filteredData.filter(picture => picture.author === data.username)

//----------------------------------------------------------
  
  return (
    <div>
      <div class="userwrapper">
      <div class="profilephoto_wrapper">
      <Image className="profile_photo" cloudName="cyber_photos" publicId={data.publicId} />
      </div>
      <div>
      <h3>{data.username}</h3>
      <p class="profile-title">{data.job}</p>
      <small>London, UK</small>
      </div>
      </div>
      <div class="userposts"><p></p></div>
      { pics.map((value,index) => (
          <div key={value.author}>
            <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
            {/* if=> value.author === data.username => diplay, else, dont */}
            {value.location}
           
          </div>
        ))}
    </div>
   );
}

export default Profile;
