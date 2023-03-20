import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Appbar from "./components/layout/Appbar";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <Appbar />
      <HomePage />
    </>
  );
}

export default App;
