import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return(
        <nav className="navBar">
                <h6><Link to="/Home" className="hoverHighlight">Maggie Chiu Yee Chan</Link></h6>
                <h6><Link to="/Resume" className="hoverHighlight">Resume</Link></h6>
        </nav> 
    )
}

export default NavBar;