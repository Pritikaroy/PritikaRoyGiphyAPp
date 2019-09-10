import React from "react";

import GifResult from "./GifResult";
import Navigation from "./Navigation";
import Options from "./Options";


const GifHome = () => {

    return (
        <div>
            <h1>React Giphy Generator</h1>
            <p>
            Click the <strong>Search</strong> icon to begin searching for Gifs:
            </p>
            <Navigation />

            <p> <strong>OR</strong></p>
            
            <p>You can opt for these cute options: </p>

            <Options />
            
            <GifResult term="dance" />
        </div>
    );
};

export default GifHome;