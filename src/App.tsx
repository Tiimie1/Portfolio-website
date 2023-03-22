import React, { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/layout/appbar/Appbar";
import Navbar from "./components/layout/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [keySequence, setKeySequence] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleDialogBox = () => {
    setIsOpen(!isOpen);
  };

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

  // Keep track of distance mouse is moved
  // const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const { movementX, movementY } = event;
  //   const distanceMoved = Math.sqrt(Math.pow(movementX, 2) + Math.pow(movementY, 2));
  //   setDistance(distance + distanceMoved);

  //   if (distanceMoved + distanceMoved >  100 ) {
  //     //TOOD alert here
  //     window.alert('You have moved your mouse 1000 pixels!');
  //   }
  // };

  // <div onMouseMove={handleMouseMove}>

  return (
    <>
      <Appbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>WELCOME TO MY WEBSITE</h2>
            <p>
              Website is inspired by 90's teletext. You can navigate thru
              website by pressing the right sequence of numbers
            </p>
            <button>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
