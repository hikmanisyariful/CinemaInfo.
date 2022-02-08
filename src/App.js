import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";
import { handleInitialData } from "./actions/shared";

// Import Pages
import Home from "pages/Home";
import TopMovies from "pages/TopMovies";
import TopTvSeries from "pages/TopTvSeries";
import About from "pages/About";
import Search from "pages/Search";
import Profile from "pages/Profile";

// Import Component parts
import Header from "parts/Header";
import Sidebar from "parts/Sidebar";

function App() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // dispatch(handleInitialData());

    // Dynamically Update SCSS for Sidebar
    const root = document.documentElement;
    root?.style.setProperty("--opacity-sidebar", isOpen ? "100%" : "0");
    root?.style.setProperty("--top-sidebar", isOpen ? "0" : "-100%");
    root?.style.setProperty("--display-faBars", isOpen ? "none" : "block");
  }, [isOpen, dispatch]);

  return (
    <div className="App">
      <Header toggle={toggle} />
      <Sidebar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topMovies" element={<TopMovies />} />
        <Route path="/topSeries" element={<TopTvSeries />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", marginTop: "80px" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
