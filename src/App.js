import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Components/Card';

//https://api.nasa.gov/planetary/apod?api_key=



function App() {

  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + process.env.REACT_APP_NASA_API_KEY)
      .then(res => {
        setPhoto(res.data.photos[855]);
        console.log(res.data.photos[855]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">

      <Card photo={photo} />

      
    </div>
  );
}

export default App;
