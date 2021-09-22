import React, { useState } from 'react';


function Card(props) {
    const [clicked, setClicked] = useState(false);

    return (
        props.photo.img_src ? 

        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
            <img className="w-full" src={props.photo.img_src} alt="Mars Rover"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">{props.photo.rover.name} Rover</div>
                <div className="text-l mb-2">{props.photo.camera.full_name}</div>
                <div className="mb-2">{props.photo.earth_date}</div>
                <button onClick={() => setClicked(!clicked)}>
                    {clicked ? <i className="fa fa-heart fa-2x fill-current text-red-500" /> : <i className="fa fa-heart fa-2x" />}
                </button>
            </div>
        </div> : null
    );
}


export default Card;