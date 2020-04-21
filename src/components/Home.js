import React from "react";
import "./Home.css";
import { directive } from "@babel/types";
import Teaser from "./Teaser";

const Home = () => {
  return (
    <section className="Home_screen">
      <Teaser></Teaser>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
