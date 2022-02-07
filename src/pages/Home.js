import React from "react";
import { useSelector } from "react-redux";

import Hero from "../parts/Hero";
import Movies from "parts/Movies";

export default function Home() {
  const homePages = useSelector(state => state.homePages);
  console.log("HOME PAGE STATE", homePages);

  const isLoading = () => {
    return (
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  const renderHeroSection = data => {
    if (data.heroSection) {
      return <Hero heroSection={data.heroSection} />;
    } else {
      isLoading();
    }
  };

  const renderTrending = data => {
    if (data.trending) {
      return <Movies label="Trending" movies={data.trending} />;
    } else {
      isLoading();
    }
  };

  const renderNowPlaying = data => {
    if (data.nowPlaying) {
      return <Movies label="Now Playing" movies={data.nowPlaying} />;
    } else {
      isLoading();
    }
  };

  const renderUpcoming = data => {
    if (data.upcoming) {
      return <Movies label="Upcoming" movies={upcoming} />;
    } else {
      isLoading();
    }
  };

  const renderUI = data => {
    renderHeroSection(data);
    renderTrending(data);
    renderNowPlaying(data);
    renderUpcoming(data);
  };

  return (
    <div className="pages-test">
      {/* {JSON.stringify(homePages)} */}
      {Object.keys(homePages).length === 0 ? isLoading() : renderUI(homePages)}
    </div>
  );
}
