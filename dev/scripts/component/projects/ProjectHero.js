import React, { Component } from 'react';

const ProjectHero = props => {
    return(
        <div className="projectHero_Container" style={{ backgroundImage: `url("/assets/${props.projectInfo.index}/00.jpg")`}}>
        </div> 
    )
}

export default ProjectHero;
