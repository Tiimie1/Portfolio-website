import React, { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/layout/appbar/Appbar";
import Navbar from "./components/layout/navbar/Navbar";
import NewsPage from "./pages/newsPage/NewsPage";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import "react-toastify/dist/ReactToastify.css";
import WelcomeDialog from "./components/welcomeDialog/WelcomeDialog";
import ContactPage from "./pages/contactPage/ContactPage";
import Bottombar from "./components/layout/bottombar/Bottombar";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import { ProjectItems } from "./components/ProjectItems";

function App() {
  const [keySequence, setKeySequence] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
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
      navigate("/projects");
    } else if (keySequence === "600") {
      navigate("/news");
    } else if (keySequence === "999") {
      setShowDialog(false);
      localStorage.setItem("hasVisited", "true");
    } else if (keySequence === "300") {
      navigate("/contact");
    } else if (
      keySequence === "210" &&
      location.pathname.includes("/projects")
    ) {
      const openurl = ProjectItems.find((item) => item.num === 210)?.url;
      setTimeout(() => {
        window.open(openurl, "_blank");
      }, 0);
    } else if (keySequence === "220") {
      const openurl = ProjectItems.find((item) => item.num === 220)?.url;
      setTimeout(() => {
        window.open(openurl, "_blank");
      }, 0);
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
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {showDialog && <WelcomeDialog showContinue={showContinue} />}
      <Bottombar keySequence={keySequence} />
    </>
  );
}

export default App;
