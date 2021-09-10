import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';

import "react-datepicker/dist/react-datepicker.css";

// date picker
// rover picker
// search icon 
// random button

// TODO: Add random button
// TODO: Add rover picker query option
// TODO: Add loading symbol


function Navbar() {

    let cameras = ["NONE","FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM", "PANCAM", "MINITES"];

    const [startDate, setStartDate] = useState(new Date());

    function convertDate() {
        let month = startDate.getMonth() + 1
        return startDate.getFullYear() + '-' + month + '-' + startDate.getDate();
    }

    const linkTarget = {
        pathname: `/search/${convertDate()}`,
        key: uuidv4(),
        state: {
            applied: true
        }
    };

    return (
        <div className="py-6">
            <nav className="fixed left-0 right-0 top-0 bg-white">
                <ul className="container mx-auto bg-white h-12 grid grid-cols-4 items-center">
                    <li className="text-xl">Spacestagram</li>
                    <li>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </li>
                    <li>
                        <select>
                            {cameras.map((camera) => {
                                return <option key={camera} value={camera}>{camera}</option>
                            })}
                        </select>
                    </li>
                    <li className="justify-self-end">
                        <button className="bg-blue-500 text-white rounded-full mr-4 w-8 h-8">
                            <Link to={linkTarget}>
                                <i className="fa fa-search py-2"></i>
                            </Link>
                        </button>
                    </li>
                </ul>
                <hr />
            </nav>
        </div>
    );
}


export default Navbar;