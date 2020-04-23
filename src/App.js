import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
    </>
  );
}

export default App;
