import React from "react";
import { NavLink } from "react-router-dom";

const Options = props => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <NavLink to="/search/Puppies" className="fas fa-paw"></NavLink>
                </li>
                <li>
                    <NavLink to="/search/Babies" className="fas fa-baby"></NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Options;