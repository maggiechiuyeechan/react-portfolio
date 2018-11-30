import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainProjects from '../data/dictionary';
import MainProjectItem from '../component/homepage/MainProject';

class ProjectList extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      mainProjects: mainProjects,
    };
  }

  renderMainProjects(i){
    return < MainProjectItem 
    projectData={i} 
    />
  }

  render(){
    return(
    <div>
    <ul className="homeProjectList_container">
      {mainProjects.map((item, i)=>{
        return(
        <li className="homeProjectItem_container" key={i}><Link to={`/Projects/${i}`} key={i}>{this.renderMainProjects(item)}</Link></li>
        )})}
    </ul>
    </div>
    )};

}

// const ProjectList = props => {
//   return (
//     <div>
//       <h3>Project List</h3>
//       <ul>
//         <li>
//           <Link to="/Projects/0">Project 1</Link>
//         </li>
//         <li>
//           <Link to="/Projects/1">Project 2</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default ProjectList;
