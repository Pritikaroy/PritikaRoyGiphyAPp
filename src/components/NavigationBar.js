import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <NavLink to="/search/search">Search</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;
