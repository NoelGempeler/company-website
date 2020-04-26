import React from "react";
import "./Home.css";
import Teaser from "./Teaser";

const Home = ({ scrollHandler }) => {
  return (
    <section className="Home_screen">
      <Teaser scrollHandler={scrollHandler}></Teaser>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
