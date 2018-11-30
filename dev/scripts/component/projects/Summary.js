import React, { Component } from 'react';

const Summary = props => {
    
    const value = props.projectInfo;
    
    return(
        <div className="summary_container projectDetails_InnerWrapper">
            <div className="summary_metadata_container">
                {value.Summary.map((item, i)=>{
                    let objectKey = Object.keys(item);
                    return(
                        <div className="summary_metadata_item" key={i}><p className="summary_metadata_item_title" key={i}>{objectKey}</p><p>{item[objectKey]}</p></div>
                )})}
            </div>
        </div> 
    )
}

export default Summary;

