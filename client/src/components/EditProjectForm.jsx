import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "../styles/style.css";
// import { Link } from "react-router-dom";

const initialState = {
  picture: "",
  title: "",
  description: "",
  type: "",
  tool: "",
};

class EditProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // fileSelectedHandler = (event) => {
  //   this.setState({ ...this.state, picture: event.target.files[0] });
  // };

  componentDidMount() {
    apiHandler
      .getProject(this.props.match.params.id)
      .then((data) => {
        console.log(data);
        this.setState({
          id: data._id,
          picture: data.picture,
          title: data.title,
          description: data.description,
          type: data.type,
          tool: data.tool,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateProject(this.props.match.params.id, {
        title: this.state.title,
        description: this.state.description,
        type: this.state.type,
        tool: this.state.tool,
      }) // formData use only to updload files
      .then((data) => {
        console.log(data);
        this.props.history.push("/projects"); // ("/projects/{Id}")
        this.setState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // soit j'envoi un object js  -> object avec state va directement au BackEND

  render() {
    console.log(this.state.picture);
    return (
      <section className="form-section">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="form-title">Update your project</h1>

          <div className="project-image">
            <img
              src={this.state.picture}
              alt={this.state.title}
              style={{ width: "100px", height: "100px" }}
            />
          </div>

          <div className="form-container">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Type your creation's title"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-container">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Describe your creation"
            ></textarea>
          </div>
          <div className="form-container">
            <label className="form-label" htmlFor="type">
              Type
            </label>
            <select
              name="type"
              onChange={this.handleChange}
              value={this.state.type}
            >
              <option value="3D">3D</option>
              <option value="2D">2D</option>
              <option value="DigitalPainting">Digital Painting</option>
              <option value="vector">Vector</option>
            </select>
          </div>

          <div className="form-container">
            <label className="form-label" htmlFor="tool">
              Tool
            </label>
            <select
              name="tool"
              onChange={this.handleChange}
              value={this.state.tool}
            >
              <option value="Blender">Blender</option>
              <option value="Photoshop">Photoshop</option>
              <option value="Illustrator">Illustrator</option>
            </select>
          </div>

          <button type="submit" className="btn">
            {/* <Link
                  to={`projects/${project.id}`}
                  > */}
            Submit
            {/* </Link> */}
          </button>
        </form>
      </section>
    );
  }
}

export default EditProjectForm;
