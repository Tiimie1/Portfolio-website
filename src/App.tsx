import React, { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/layout/appbar/Appbar";
import Navbar from "./components/layout/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutMePage from "./pages/aboutMePage/AboutMePage";

function App() {
  const [keySequence, setKeySequence] = useState("");
  const navigate = useNavigate();

  //Acknowledge a keydown event
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      const key = event.key.toLowerCase();
      setKeySequence((prevSequence) => prevSequence + key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //Keep track of what keys were pressed
  useEffect(() => {
    const interval = setInterval(() => {
      setKeySequence("");
    }, 2000);

    if (keySequence.length === 3) {
      console.log(keySequence);
      setKeySequence("");
      clearInterval(interval);
    }

    if (keySequence === "xyz") {
      console.log(keySequence);
    } else if (keySequence === "110") {
      navigate("/about");
    } else if (keySequence === "600") {
      navigate("/");
    }

    return () => clearInterval(interval);
  }, [keySequence]);

  return (
    <>
      <Appbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
