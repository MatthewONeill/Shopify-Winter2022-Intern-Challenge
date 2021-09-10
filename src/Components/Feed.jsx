import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useParams } from "react-router-dom";

function Feed() {

    const { query } = useParams();

    const [photos, setPhotos] = useState([]);

    const cards = photos.map((photo, index) => {
        return <Card key={index} photo={photo}/>
    })
    
    useEffect(() => {
        if({query}) {
          axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + query +'&api_key=' + process.env.REACT_APP_NASA_API_KEY)
          .then(res => {
            setPhotos(res.data.photos);
          })
          .catch(err => console.log(err));
        }
        else {
          axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=' + process.env.REACT_APP_NASA_API_KEY)
          .then(res => {
            setPhotos(res.data.photos);
          })
          .catch(err => console.log(err));
        }
      }, [query]);


      return (
        <div className="flex justify-center pt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {cards}
          </div>
        </div>

      );

}

export default Feed;