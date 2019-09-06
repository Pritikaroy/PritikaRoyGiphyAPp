import React from 'react';
import NavigationBar from './NavigationBar';
import OptionsBar from './OptionsBar';

const GiphyHome = () => {

    return (
        <div>
            <h1>For the love of GIFs</h1>
            <p>
                Click the <strong>Search Tab</strong> to search for your favorite gifs.
            </p>
            <NavigationBar />
            <p>
                Wondering what to look for? Here's some inspiration:
            </p>
            <OptionsBar />
        </div>
    )
}

export default GiphyHome;