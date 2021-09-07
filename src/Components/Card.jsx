import React, { useState } from 'react';


function Card(props) {
    const [clicked, setClicked] = useState(false);

    return (
        props.photo.img_src ? 

        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img class="w-full" src={props.photo.img_src} alt=""></img>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 ">{props.photo.rover.name} Rover</div>
                <div class="text-l mb-2">{props.photo.camera.full_name}</div>
                <div class="mb-2">{props.photo.earth_date}</div>
                <button onClick={() => setClicked(!clicked)}>
                    {clicked ? <i className="fa fa-heart fa-2x fill-current text-red-500" /> : <i className="fa fa-heart fa-2x" />}
                </button>
            </div>
        </div> : null
    );
}


export default Card;