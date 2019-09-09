import React from "react";

const ZeroResults = props => {
    return (
        <li className="notFound">
            <i className="fa fa-frown-o" aria-hidden="true" />
            <h3>Zero Results Found</h3>
            <p>Your search did not yield any results. Please try again.</p>
        </li>
    );
};

export default ZeroResults;