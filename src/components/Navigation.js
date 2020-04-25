import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="flex_2">
        <div className="renovering"> Renovering </div>
        <div
          className="hover"
          style={{ display: "flex", marginRight: "30px", marginRight: "70px" }}
        >
          <div className="margin cursor-pointer">About</div>
          <div className="margin cursor-pointer">What we do</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
