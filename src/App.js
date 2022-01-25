import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";

// Import Pages
import Home from "pages/Home";
import TopMovies from "pages/TopMovies";
import TopTvSeries from "pages/TopTvSeries";
import About from "pages/About";
import Search from "pages/Search";
import Profile from "pages/Profile";

// Import Component parts
import Header from "parts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topMovies" element={<TopMovies />} />
        <Route path="/topSeries" element={<TopTvSeries />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
