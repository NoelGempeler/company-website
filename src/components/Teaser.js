import React from "react";
import "./Teaser.css";
import { directive } from "@babel/types";

const Teaser = () => {
  return (
    <div className="teaser">
      <div className="flex">
        <div className="mitte">
          <h4 className="teaser_text">Willkommen bei Renovering.</h4>
          <h1 className="teaser_text">Ich renoviere Ihre Webseite.</h1>
          <div className="teaser_text teaser_text_spezial">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </div>
          <div className="button">Mehr erfahren</div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
