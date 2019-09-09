import React from "react";

import ZeroResult from "./ZeroResult";
import Gif from "./Gif";

const GifList = props => {
    const results = props.data;
    let gifs;
    if (results.length > 0) {
        gifs = results.map(gif => (
            <Gif url={gif.images.fixed_height.url} key={gif.id} />
        ));
    } else {
        gifs = <ZeroResult />;
    }

    return (
        <div className="photoContainer">
            <h2>Results</h2>
            <ul>{gifs}</ul>
        </div>
    );
};

export default GifList;
