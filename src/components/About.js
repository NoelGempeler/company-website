import React from "react";
import "./About.css";
import bild from "../images/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg";

const About = () => {
  return (
    <div
      className="image"
      style={{
        display: "flex",
      }}
    >
      <div>
        {/*         <img
          style={{ width: "200px" }}
          src={bild}
          className="bild"
          alt="Norway"
        ></img> */}
        BILD
      </div>
      <div>
        <div>TEXT</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
