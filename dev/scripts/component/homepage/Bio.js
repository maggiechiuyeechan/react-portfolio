import React, { Component } from 'react';

const Bio = props => {
    return(
        <div className="bio_Container largeWrapper">
            <div className="bio_text_container">
                <h3>Maggie Chiu Yee Chan</h3>

                <div className="bio_paragraph">
                <p>
                I am a developer and product (UX/UI) designer focused on building thoughtful digital experiences. I have designed and built immersive digital experiences, insightful data visualizations and effective, usable applications. My most impactful work involved designing products that use data to aid public health policy-making for the US CDC, ASEAN and WHO . My data visualizations have appeared in The Economist, The Washington Post, and The Lancet Infectious Diseases. My projects have been featured on CBC, The Creators Project, CP24, Forbes and more.
                </p><p>
                I am inspired by the opportunities presented by new technologies and new media. I’m always looking to build and design compelling experiences, innovative ways of engaging with information through our world of connected objects, data visualizations and screen-based interfaces.
                </p><p>
                I have a particular interest in design and development for social benefit and civic engagement. My goal is to imagine and create a brighter future.
                </p>
                </div>
            </div>
            <div>
                <img className="bio_picture" src="assets/bio/bio.jpg"></img>
            </div>
        </div>
    )
}

export default Bio;
