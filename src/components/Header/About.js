import React from "react";
import "./About.css";
import Cloth from "../../assets/images/c.jpg";
import Clothh from "../../assets/images/e.jpg";
import Clothhh from "../../assets/images/f.jpg";

const About = () => {
  return (
    <div>
      <h1 className="about">About US</h1>
      <p>
        Crotchet Haven is a fashion wear which is knitted to make customers feel
        comfortable and unique.
        <br /> Available for all genders, different sizes and ages.
      </p>
      <img src={Cloth} alt="cloth" className="cloth" />
      <img src={Clothh} alt="cloth" className="cloth" />
      <img src={Clothhh} alt="cloth" className="cloth" />
    </div>
  );
};

export default About;
