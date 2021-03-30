import React from 'react';
import { Link } from 'react-router-dom';
import SigninLinks from './SigninLinks';
import SignoutLinks from './SignoutLinks';

import { connect } from 'react-redux';
const Navbar = ({auth, profile}) => {
    const links =(auth.uid) ? <SigninLinks profile={profile}/> : <SignoutLinks/>
        return (
            <nav className="grey darken-3 navbar">
                <div className="container">

                    <div className="nav-wrapper ">
                        <Link to="/">Project Mangment</Link>
                        {links}                     
                    </div>
                </div>
            </nav>
        );
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);