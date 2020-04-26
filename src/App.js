import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { scroller } from "react-scroll";

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
      duration: 3000,
      delay: 200,
      smooth: "easeOutQuint",
    });
  };

  return (
    <>
      {show && (
        <div style={{ animation: "fadeIn 0.5s" }}>
          <Navigation></Navigation>
          <Home scrollHandler={scrollTo}></Home>
          <div id="About">
            <About></About>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
