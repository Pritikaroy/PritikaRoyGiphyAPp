import React from 'react';
import { NavLink } from 'react-router-dom';

const OptionsBar = () => {
    return (
        <nav className="OptBar">
            <ul>
                <li>
                    <NavLink to="/search/puppies">Puppies</NavLink>
                </li>
                <li>
                    <NavLink to="/search/babies">Babies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default OptionsBar;
