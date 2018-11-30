import React, { Component } from 'react';

const Footer = props => {
    return(
        <footer className="largeWrapper">

            <div className="contact_container">
                <h3> 👀 Looking to get in touch? Say hello... </h3>
                <a className="email hoverHighlight" href="mailto:mail@maggiechan.io?Subject=Hello%20Maggie" target="_top"><h1> mail@maggiechan.io </h1></a>
            </div>

            <div className="socialMedia_container">
                <ul className = "footerIcons">
                    <li><a target="_blank" href = "https://medium.com/@maggiechiuyeechan" ><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href = "https://twitter.com/maggie_cy_chan"> <i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href = "https://www.linkedin.com/in/maggie-chiu-yee-chan-195ba549/"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href ="https://github.com/maggiechiuyeechan"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                </ul>
                <h6>Built and designed with <i className="fa fa-heart" id="fa-heart" aria-hidden="true"></i></h6>
            </div>
            
        </footer> 
    )
}

export default Footer;
