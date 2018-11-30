import React, { Component } from 'react';
import ReactWOW from 'react-wow';

const OneImage = props => {
    
    const value = props.projectInfo;
    const index = props.projectIndex;
    return(
        <ReactWOW animation='fadeIn' delay="0.75s"><div className="OneImage_Container">

            <h3 className="OneImage_title">{value.OneImage[0].title}</h3>
            
            <div className="OneImage_MainContent">
                <div className="OneImage_MainImage" style={{ backgroundImage: `url("/assets/${index}/${value.OneImage[1].image}")` }}></div>
                <p>{value.OneImage[2].paragraph}</p>
            </div>
        </div></ReactWOW>
    )
}

export default OneImage;
