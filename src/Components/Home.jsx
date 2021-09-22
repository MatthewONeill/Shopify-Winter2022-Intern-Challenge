import React from "react";
import Random from './Random';

function Home() {

    return (
        <div className="container mx-auto ">
            <p className="text-center">Welcome to my submission for the Winter 2022 Front End Shopify Challenge</p>
            <p className="text-center">Please try to search for a specific earth date, or press the random button and get a set of random photos!</p>
        
            <Random />
        </div>
    );
}


export default Home;