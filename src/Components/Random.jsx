import axios from "axios";
import { useEffect, useState } from "react";
import Card from './Card';


export default function Random() {

    // 2015
    // 2020

    // 1-28
    // 1-12
    const [results, setResults] = useState([]);
    
    const cards = results.map((photo, index) => {
        return <Card key={index} photo={photo}/>
    })

    useEffect(() => {
        const year = Math.floor(Math.random() * (2020 - 2015) + 2015);
        const month = Math.floor(Math.random() * (12 - 1) + 1);
        const day = Math.floor(Math.random() * (28 - 1) + 1);

        const date = year + '-' + month + '-' + day

        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=' + date +'&api_key=' + process.env.REACT_APP_NASA_API_KEY, {
            params: {
                _limit: 10
            }
        })
            .then(res => {setResults(res.data.photos)})
            .catch(err => console.log(err));

    }, [])

    return(
        <div className="flex justify-center pt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {cards}
          </div>
        </div>
    );
}