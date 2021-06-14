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
         <ul>
            { filteredData.map((value,index) => { 
              return (
               <li>
                 <a href="" class="card" key={value.id}>
                 <Image className="card_image" cloudName="cyber_photos" publicId={value.publicId} />
                    <div class="ccard__overlay">
                    <div class="card__header"></div>
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>  
                  <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />  
                       <div class="card__header-text">
                        <h3>{value.location}</h3>
                        <span class="card__status">{value.hashtag}</span>
                       </div>
                    <p class="card_description">{value.description}</p>
                    </div>
            </a>
            </li>
          </ul>
          );
         })}
        </div>
  </div>
   );
}




export default HashtagsPage;
