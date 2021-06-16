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
  

  const searchTag = (event) => {
    
    let userInput = event.target.value;
    let value = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      
      return data.location.search(value) !== -1;
    });
    setFilteredData(result);
  };

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
      <div class="userposts"><p>To put all the posts in here</p></div>
    </div>
   );
}

export default Profile;
