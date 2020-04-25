import React from "react";
import "./Teaser.css";
import { directive } from "@babel/types";

const Teaser = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <div className="teaser">
      <div className="flex_teaser">
        <div className="mitte">
          <h4 className="teaser_text">Willkommen bei Renovering.</h4>
          <h1 className="teaser_text" style={{ fontSize: "60px" }}>
            Ich renoviere Ihre Webseite.
          </h1>
          <div className="teaser_text teaser_text_spezial">
            Nichts ist mächtiger als eine Idee zur richtigen Zeit.
          </div>
          <a
            href="#"
            onClick={handleClick}
            className="button text-xl cursor-pointer"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
