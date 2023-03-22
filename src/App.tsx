import React, { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/layout/appbar/Appbar";
import Navbar from "./components/layout/navbar/Navbar";
import NewsPage from "./pages/newsPage/NewsPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import "react-toastify/dist/ReactToastify.css";
import WelcomeDialog from "./components/welcomeDialog/WelcomeDialog";
import ContactPage from "./pages/contactPage/ContactPage";
import Bottombar from "./components/layout/bottombar/Bottombar";

function App() {
  const [keySequence, setKeySequence] = useState("");
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(true);
  const [showContinue, setShowContinue] = useState(true);

  //Acknwledge a keydown event
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
    }, 1000);

    if (keySequence.length === 3) {
      setKeySequence("");
      clearInterval(interval);
    }

    if (keySequence === "110") {
      navigate("/");
    } else if (keySequence === "200") {
      navigate("/");
    } else if (keySequence === "600") {
      navigate("/news");
    } else if (keySequence === "999") {
      setShowDialog(false);
      localStorage.setItem("hasVisited", "true");
    } else if (keySequence === "300") {
      navigate("/contact");
    }

    return () => clearInterval(interval);
  }, [keySequence]);

  //Check if its a first time user to show WelcomeDialog
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowDialog(false);
    } else {
      setShowDialog(true);
    }
  }, []);

  return (
    <>
      <Appbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {showDialog && <WelcomeDialog showContinue={showContinue} />}
      <Bottombar />
    </>
  );
}

export default App;
