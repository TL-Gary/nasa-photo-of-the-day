import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard.js";

function App() {
  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
      .then((res) => {
        console.log(res); // Study the data!
        setPhotoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <PhotoCard photo={photoData} />
    </div>
  );
}

export default App;
