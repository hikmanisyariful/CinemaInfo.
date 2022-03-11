import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";

// Import Pages
import Home from "pages/Home";
import TopMovies from "pages/TopMovies";
import Movies from "pages/TopMovies/Movies";
import TvSeries from "pages/TopTvSeries/TvSeries";
import IndexRouteMovie from "pages/TopMovies/IndexRouteMovie";
import IndexRouteTvSeries from "pages/TopTvSeries/IndexRouteTvSeries";

import TopTvSeries from "pages/TopTvSeries";
import About from "pages/About";
import Search from "pages/Search";
import Profile from "pages/Profile";
import MovieId from "pages/MovieId";
import NameId from "pages/NameId";
import Login from "pages/Login";

// Import Component parts
import Header from "parts/Header1";
import Sidebar from "parts/Sidebar";

import { handleInitialData, handleDataMoviesSeries } from "./actions/shared";

function App() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // dispatch(handleInitialData());
    dispatch(handleDataMoviesSeries());
  }, [dispatch]);

  useEffect(() => {
    // Dynamically Update SCSS for Sidebar
    const root = document.documentElement;
    root?.style.setProperty("--opacity-sidebar", isOpen ? "100%" : "0");
    root?.style.setProperty("--top-sidebar", isOpen ? "0" : "-100%");
    root?.style.setProperty("--display-faBars", isOpen ? "none" : "block");
  }, [isOpen]);

  return (
    <div className="App">
      <Header toggle={toggle} />
      {/* <Sidebar toggle={toggle} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/topMovies" element={<TopMovies />}>
          <Route index element={<IndexRouteMovie />} />
          <Route path=":category" element={<Movies />} />
        </Route>
        <Route path="/topSeries" element={<TopTvSeries />}>
          <Route index element={<IndexRouteTvSeries />} />
          <Route path=":category" element={<TvSeries />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:movieId" element={<MovieId />} />
        <Route path="/name/:nameId" element={<NameId />} />
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
