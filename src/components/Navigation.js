import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <NavLink to="/search/dance" className="fas fa-search">Search</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/search/Puppies">Puppies</NavLink>
                </li>
                <li>
                    <NavLink to="/search/Babies">Babies</NavLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navigation;
