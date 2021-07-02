import React, { Component } from "react";
import axios from "axios";
import "../styles/style.css";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

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

  handleDelete = (id) => {
    console.log("hello fucker", id);

    apiHandler.deleteProject(id).then(() => {
      this.setState({
        projects: this.state.projects.filter((project) => project._id !== id),
      });
    });
  };

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

              {/* Regular space: &nbsp;
Two spaces gap: &ensp;
Four spaces gap: &emsp; */}

              <div className="project-details">
                <h3>{project.title}</h3>
                <p>
                  <b>Description:&ensp;</b> {project.description}
                </p>
                <p>
                  <b>Type:&ensp;</b> {project.type}
                </p>
                <p>
                  <b>Tool:&ensp;</b> {project.tool}
                </p>
              </div>

              <div id="buttons">
                <Link
                  to={`projects/update/${project._id}`}
                  className="btn-update"
                >
                  UPDATE
                </Link>
              </div>
              <div>
                <button
                  onClick={() => this.handleDelete(project._id)}
                  className="btn-delete"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default myProjects;
