import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <NavLink to="/search/dance" className="fas fa-search"></NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
