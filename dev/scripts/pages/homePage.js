import React, { Component } from 'react';


import HomeHero from '../component/homepage/Hero';
import ProjectList from './ProjectList';
import Bio from '../component/homepage/Bio';
import Footer from '../component/Footer';

const Home = props => {
    return(
        <div>
            <HomeHero />
            <ProjectList />
            <Bio />
            <Footer />
            <div className="footerFiller"></div>
        </div> 
    )
}

export default Home;
