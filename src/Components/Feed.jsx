import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function Feed() {

    const [photos, setPhotos] = useState([]);

    const cards = photos.map((photo) => {
        return <Card photo={photo}/>
    })
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=' + process.env.REACT_APP_NASA_API_KEY)
          .then(res => {
            setPhotos(res.data.photos);
          })
          .catch(err => console.log(err));
      }, []);


      return (
        <div>
            {cards}
        </div>

      );

}

export default Feed;