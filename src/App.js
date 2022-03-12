import React, { useEffect } from "react";
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
import Register from "pages/Register";

// Import Component parts
import Header from "parts/Header";

import { handleInitialData, handleDataMoviesSeries } from "./actions/shared";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(handleInitialData());
    dispatch(handleDataMoviesSeries());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topMovies" element={<TopMovies />}>
          <Route index element={<IndexRouteMovie />} />
          <Route path=":category" element={<Movies />} />
        </Route>
        <Route path="/topSeries" element={<TopTvSeries />}>
          <Route index element={<IndexRouteTvSeries />} />
          <Route path=":category" element={<TvSeries />} />
        </Route>
        <Route path="/movie/:movieId" element={<MovieId />} />
        <Route path="/name/:nameId" element={<NameId />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private route is not handle yet. */}
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
