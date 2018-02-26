import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: "Business web",
          category: "web dev"
        },
        {
          title: "Ecommerce Site",
          category: "App dev"
        },
        {
          title: "Datebase design",
          category: "backend part"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        MyApp
      <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
