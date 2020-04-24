import React from "react";
import "./About.css";
import bild from "../images/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg";

const About = () => {
  return (
    <div
      className="image "
      style={{
        display: "flex",
      }}
    >
      <div>
        <img
          style={{ width: "500px" }}
          src={bild}
          className="bild shadow-2xl"
          alt="Norway"
        ></img>
      </div>
      <div className="Text_about">
        <div
          style={{
            fontSize: "35px",
            marginBottom: "15px",
            fontFamily: "Oswald, sans-serif",
          }}
        >
          Über mich
        </div>
        <div style={{ fontSize: "25px", marginBottom: "10px" }}>
          Hallo, wir sind eine Firma aus der Zentralschweiz.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          facilis quis perferendis, praesentium eaque minima optio aliquid iure
          architecto ipsum?
        </div>
      </div>
    </div>
  );
};

export default About;
