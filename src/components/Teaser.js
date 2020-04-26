import React from "react";
import "./Teaser.css";

const Teaser = ({ scrollHandler }) => {
  function handleClick(e) {
    e.preventDefault();
    scrollHandler("About");
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
          <div onClick={handleClick} className="button text-xl cursor-pointer">
            Mehr erfahren
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
