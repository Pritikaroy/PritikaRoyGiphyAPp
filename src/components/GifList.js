import React from "react";

import GifResult from "./GifResult";
import Navigation from "./Navigation";
import Options from "./Options";
import Form from "./Form";

const GifList = (props, { match }) => {
    let term = props.match.params.term;

    return (
        <div>
            <h2>Search for your Gif:</h2>
            <Form />
            <Navigation />
            <Options />
            
            <GifResult term={term} />
        </div>
    );
};

export default GifList;
