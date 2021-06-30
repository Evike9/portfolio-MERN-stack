import React, { Component } from "react";
import axios from "axios";

import "../styles/style.css";
import { Link } from "react-router-dom";

class myProjects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects`)
      .then((response) => {
        this.setState({ projects: response.data });
      });
  }

  render() {
    return (
      <div className="projects">
        {/* <h1>PROJECTS</h1> */}
        <div className="projects-container">
          {this.state.projects.map((project) => (
            <div className="projects-card" key={project._id}>
              
              <img
                className="projects-img"
                src={project.picture}
                alt={project.title}
              />
              
              <div className="project-details">
              <h2>{project.title}</h2>
                <p>Description: {project.description}</p>
                <p>Type: {project.type}</p>
                <p>Tool: {project.tool}</p>
              </div>
              <button type="submit" className="btn-update">
                <Link to={`projects/update/${project._id}`}>Update</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default myProjects;
