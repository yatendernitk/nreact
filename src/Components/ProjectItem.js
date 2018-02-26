import React, { Component } from 'react';

class ProjectItem extends Component{
    render(){
        console.log('prop came here');
        console.log(this.props.project);
        return(
           <li><b>{this.props.project.title}</b> - {this.props.project.category}</li>
        );
    }
}

export default ProjectItem;