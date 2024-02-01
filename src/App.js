import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Prof from "./components/Prof/Prof";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Prof />
    </div>
  );
};

export default App;
