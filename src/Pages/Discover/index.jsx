import "./index.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {Image} from 'cloudinary-react';

function HashtagsPage() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchTag = (event) => {
    let value = event.target.value.toLowerCase();
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
 
  return (
    <div className="discover_wrapper">
      <div class="discover_container">
        <input type="text" placeholder="Search Locations" onChange={(event) => searchTag(event)} />
          <div class="search"></div>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
       <div class="grid">
         
        { filteredData.map((value,index) => { 
          return (
            <div class="discover_card" key={value.id}>
             {value.location}
             <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
            </div>
          );
         })}
        </div>
  </div>
   );
}

export default HashtagsPage;
