import React from "react";
import image from "../assets/avatar.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="avatar-card">
        <div className="avatar-image">
          <img src={image} alt="img" />
        </div>
        <div className="skills">
          <h2>WELCOME TO MY PORTFOLIO</h2>
          <p>
            Hello,
            <br></br>I am a creative Web Developer with <br></br>a Graphic Designer <text>& </text>
       Manager background.
            <br></br>My main technical skills are:
          </p>
          <ul>
            <li>HTML5/CSS3</li>
            <li>JavaScript/ReactJs</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
            <li>Adobe AfterEffects</li>
            <li>Blender 3D</li>
            <li>Team Management</li>
          </ul>
          <p>Enjoy my designs and contact me</p>
          <p className="github">
            Go to my Github to check out this MERN project's code :&nbsp;
            <a href="https://github.com/Evike9/portfolio-MERN-stack">
              <i class="fab fa-github"></i>
            </a>
          </p>
        </div>
      </div>
      <footer>
        <p className="footer">2021 ©evi:ke.com</p>
      </footer>
    </div>
  );
};

export default Home;
