import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class MainProjectItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.projectData
        }
    }

    render(){
        const value = this.state.value;       
        console.log(value.sections[0].Summary[0].Year);
        return(
            
            <div className="mainProject_container" style={{ backgroundImage: `url("assets/${value.index}/${value.hero}")` }}>
                <ReactWOW animation='fadeIn' delay="1.5s">
                    <div className="mainProject_text_container largeWrapper">
                        <div className="mainProject_metaData_container">
                            <div className="mainProject_metaData_typeYear">
                                <h6 className="mainProject_type">{value.type}</h6>
                                <h6>{value.sections[0].Summary[0].Year}</h6>
                            </div>
                            <div><ul className="mainProject_metadata_tags">
                                {value.metadata.map((item, i)=>{
                                    return(<li key={i}><h6>{item}</h6></li>)
                                })}
                            </ul></div>
                        </div>

                        <h2 className="mainProject_title">{value.name}</h2>
                        <h5>{value.subtitle}</h5>
                        <h6 className="mainProject_click">Click to see more</h6>
                </div>
                </ReactWOW>
            </div>
        )
    }
}

export default MainProjectItem;
