import React from "react";
import image from "../assets/avatar.jpg";  



const Home = () => {
  return (
    <div className="home">
      {/* <h1>WELCOME TO MY PORTFOLIO</h1> */}
      <div className="avatar-card">
        <div className="avatar-image">
      <img  src={image} alt="img" />
      </div>
      <div className="skills">
      <h2>evi:ke</h2>
      </div> 
      
      </div>
    </div>
  );
};

export default Home;
