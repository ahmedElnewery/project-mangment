import React from 'react';
import { NavLink } from 'react-router-dom';
const SignoutLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li>
                <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    );
}

export default SignoutLinks;