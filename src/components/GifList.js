import React from "react";

import GifResult from "./GifResult";
import Form from "./Form";

const GifList = (props, { match }) => {
    let term = props.match.params.term;

    return (
        <div>
            <h2>Search for your Gif:</h2>
            <Form />            
            <GifResult term={term} />
        </div>
    );
};

export default GifList;
