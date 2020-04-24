import React from "react";
import "./Teaser.css";
import { directive } from "@babel/types";

const Teaser = () => {
  return (
    <div className="teaser">
      <div className="flex">
        <div className="mitte">
          <h4 className="teaser_text">Willkommen bei Renovering.</h4>
          <h1 className="teaser_text" style={{ fontSize: "60px" }}>
            Ich renoviere Ihre Webseite.
          </h1>
          <div className="teaser_text teaser_text_spezial">
            Nichts ist mächtiger als eine Idee zur richtigen Zeit.
          </div>
          <div className="button text-xl">Mehr erfahren</div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
