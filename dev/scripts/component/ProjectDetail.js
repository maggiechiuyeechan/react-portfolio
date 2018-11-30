import React from 'react';
import mainProjects from '../data/dictionary';

import ProjectHero from './projects/ProjectHero';
import Summary from './projects/Summary';
import OneImage from './projects/OneImage';

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: mainProjects[this.props.match.params.projectId]
        }
    }

    render(){
        const value = this.state.value;
        return(
            <div>
                    <ProjectHero projectInfo={value} projectIndex={value.index}/>

                    <div className="largeWrapper projectDetails_container">
                        <div className="projectDetails_InnerWrapper projectDetails_title">
                            <h1>{value.name}</h1>
                            <h4>{value.subtitle}</h4>
                        </div>
                        {value.sections.map((item, i)=>{
                            const SectionType = Object.keys(item)[0];
                            switch(SectionType){
                                case 'Summary':
                                    return <Summary projectInfo={item} projectIndex={value.index}/>;
                            case 'OneImage':
                                    return <OneImage projectInfo={item} projectIndex={value.index}/>;
                            }
                            })}
                    </div>

                    <div className="footerFiller"></div>
            </div>
        )
    }
}

export default ProjectDetail;