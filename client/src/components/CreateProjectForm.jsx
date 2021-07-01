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

class CreateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fileSelectedHandler = (event) => {
    this.setState({ ...this.state, picture: event.target.files[0] });
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("picture", this.state.picture);
    // formData is only use when file need to be uploaded >> fileSelectedHandler
    // Object.keys(this.state).forEach(key=> formData.append(key, this.state[key]));
    formData.append("title", this.state.title);
    formData.append("type", this.state.type);
    formData.append("description", this.state.description);
    formData.append("tool", this.state.tool);

    console.log(formData);

    apiHandler
      .createProject(formData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="form-section">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="form-title">Add your new project</h1>
          <div className="image-project-uploader">
            <input
              type="file"
              name="picture"
              onChange={this.fileSelectedHandler}
            />
          </div>

          <div className="form-container">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Type your creation's title"
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
              <option value="Blender">Blender 3D</option>
              <option value="Photoshop">Adobe Photoshop CC</option>
              <option value="Illustrator">Adobe Illustrator CC</option>
            </select>
          </div>

          <button type="submit" className="btn">
          {/* <Link
                  to={"/projects"} */}
      
                {/* > */}
                  {/* </Link>  */}
            SUBMIT
          </button>
        </form>
      </section>
    );
  }
}

export default CreateProjectForm;
