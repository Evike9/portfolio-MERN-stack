import React from "react";
import image from "../assets/avatar.jpg";  



const Home = () => {
  return (
    <div className="home">
      
      <div className="avatar-card">
        <div className="avatar-image">
      <img  src={image} alt="img" />
      </div>
      <div className="skills">
      <h2>WELCOME TO MY DESIGN PORTFOLIO</h2>
      <p>Hello, I am a junior web dev with a design and <br></br>a delivery manager background.
      
      <br></br>My main skills are:</p>
      <ul>
      <li>Adobe Creative Suite</li>
      <li>Blender 3D</li>
      <li>HTML5 and CSS3</li>
      <li>JavaScript</li>
      </ul>
      <br></br>
      <p>Enjoy my designs</p>
      
      </div> 
      
      </div>
    </div>
  );
};

export default Home;
