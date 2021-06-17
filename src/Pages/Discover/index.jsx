import "./index.css";

import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Image } from 'cloudinary-react';
import Location from "../../components/Location";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function TitlebarGridList() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchTag = (event) => {

    let userInput = event.target.value;
    if (!userInput) {
      setInput("")
    } else {
      setInput("Showing search results for: " + userInput)
    }
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

  return (

    <div>
      <div class="page">

        <div class="discover_container" >
          <label class="title">Search Locations:</label>
          <input type="text" placeholder="Search Locations" onChange={(event) => searchTag(event)} />
          <div class="search"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="search_results" >
          <br />
          {<b>{input}</b>}
        </div>

        <div class="container" >

          {filteredData.map((value, index) => (
            <div class="card">
              <div class="face1">
                <div class="content" key={value.id}>
                  <Image class="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
                </div>
              </div>
              <div class="face2">
                <div class="content">
                  <p>#{value.hashtag}</p>
                  <p>Taken at: {value.location}</p>
                 <a href={'/profile/' + value.author}> @{value.author}</a>
          {/* <a href="http://maps.google.com/maps?&z={10}&q={value.coordinates.lat}+{value.coordinates.lon}">Link To Maps</a> */}

          {/* <button type="button">View More</button> */}
         {/* <Popup Popup trigger={<button> View More</button>} position="right center">

          <div>          <Location name={value.name} hashtag={value.hashtag} location={value.location} coordinates={value.coordinates.lat} caption={value.caption} description={value.description} publicId={value.publicId}/></div>
          </Popup> */}

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


