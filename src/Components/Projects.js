import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component{
    render(){
        let ProjectItems;
        if(this.props.projects){
            ProjectItems = this.props.projects.map( project => {
                console.log(project)
                return (
                    <ProjectItem key={project.title} project={project}/>
                );
            });
        }
        return (
            <ul>
                {ProjectItems}
            </ul>
        );
    }
}

export default Projects;