import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useParams } from "react-router-dom";

function Feed() {

    const { date, camera } = useParams();

    const [photos, setPhotos] = useState([]);

    const cards = photos.map((photo, index) => {
        return <Card key={index} photo={photo}/>
    })
    
    useEffect(() => {
        let url = "";

        if (date && camera !== "SELECT CAMERA") {
          url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=' + date +'&camera=' + camera + '&api_key=' + process.env.REACT_APP_NASA_API_KEY;
        }
        else if (date) {
          url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=' + date +'&api_key=' + process.env.REACT_APP_NASA_API_KEY;
        }
        else {
          url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=' + process.env.REACT_APP_NASA_API_KEY
        }

        axios.get(url)
          .then(res => {
            setPhotos(res.data.photos);
          })
          .catch(err => console.log(err));

        
      }, [date, camera]);


      return (
        <div className="flex justify-center pt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {cards}
          </div>
        </div>

      );

}

export default Feed;