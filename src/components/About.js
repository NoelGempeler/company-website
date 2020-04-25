import React from "react";
import bild from "../images/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg";

const About = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={bild} className="shadow-2xl " alt="Norway"></img>
      </div>
      <div className="p-16 w-1/2">
        <span className="text-4xl font-bold mr-1 ">Über</span>{" "}
        <span className="text-4xl ">mich</span>
        <div className="text-2xl mb-2">
          <span className="text">Hallo, </span>{" "}
          <span className="text-renovering-rot ">
            {" "}
            wir sind eine Firma aus der Zentralschweiz.
          </span>
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
