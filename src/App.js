import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { scroller } from "react-scroll";
import Contact from "./components/Contact";
import Dienstleistungen from "./components/Dienstleistungen";

function App() {
  const [show, setShow] = useState(false);

  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      setTimeout(function () {
        window.scrollTo(0, 0);
        setShow(true);
      }, 0);
    }
  };

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 2500,
      delay: 150,
      smooth: "easeOutQuint",
    });
  };

  return (
    <>
      {show && (
        <div style={{ animation: "fadeIn 0.5s" }}>
          <Navigation></Navigation>
          <Home scrollHandler={scrollTo}></Home>
          <Dienstleistungen></Dienstleistungen>
          <div id="About">
            <About></About>
          </div>
          <div id="Contact">
            <Contact></Contact>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
