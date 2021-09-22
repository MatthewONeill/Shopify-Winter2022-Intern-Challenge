import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


// date picker
// rover picker
// search icon 
// random button

// TODO: Add random button
// TODO: Add rover picker query option
// TODO: Add loading symbol


function Navbar() {

    let cameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM", "PANCAM", "MINITES"];

    const [startDate, setStartDate] = useState(new Date());
    const [selectedCamera, setSelectedCamera] = useState("SELECT CAMERA");
    const [navMenu, setNavMenu] = useState(false);

    function convertDate() {
        let month = startDate.getMonth() + 1
        return startDate.getFullYear() + '-' + month + '-' + startDate.getDate();
    }

    return (
        <nav className="">
            <div className="max-w-7xl mx-auto left-0 right-0 top-0 bg-white">
                <div className="flex justify-between h-12 items-center">
                    <div className="text-xl ml-2">
                        <Link to="/">Spacestagram</Link>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <select className="border-2 border-blue-500 rounded h-8" value={selectedCamera} onChange={e => setSelectedCamera(e.currentTarget.value)}>
                                <option defaultValue="SELECT CAMERA" value="SELECT CAMERA">SELECT CAMERA</option>
                                {cameras.map((camera) => {
                                    return <option key={camera} value={camera}>{camera}</option>
                                })}
                            </select>
                        </li>
                        <li>
                            <DatePicker className="w-32 h-8 text-center border-2 border-blue-500 rounded" selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </li>
                        <li>
                            <button className="bg-blue-500 text-white rounded-full w-8 h-8">
                                <a href={`/search/${convertDate()}/${selectedCamera}`}>
                                    <i className="fa fa-search py-2"></i>
                                </a>
                            </button>
                        </li>
                        <li>
                            <a href="/random">
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/dice.png" alt="dice"/>
                            </a>
                        </li>
                    </ul>

                    <button className="md:hidden flex mr-4" onClick={() => setNavMenu(!navMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className={navMenu ? "hidden flex flex-col" : "md:hidden "}>
                    <div className="bg-gray-100">
                        <select className="bg-gray-100 h-8 mb-2 ml-1" value={selectedCamera} onChange={e => setSelectedCamera(e.currentTarget.value)}>
                            <option defaultValue="SELECT CAMERA" value="SELECT CAMERA">SELECT CAMERA</option>
                            {cameras.map((camera) => {
                                return <option key={camera} value={camera}>{camera}</option>
                            })}
                        </select>
                        <DatePicker className="bg-gray-100 mb-2 ml-2" selected={startDate} onChange={(date) => setStartDate(date)}/>
                        <div className="mb-2 text-lg ml-2"><a href={`/search/${convertDate()}/${selectedCamera}`}>Search</a></div>
                        <div className="mb-2 text-lg ml-2"><a href="/random">Random</a></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;