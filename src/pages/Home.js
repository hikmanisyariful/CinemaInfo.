import React from "react";
import { useSelector } from "react-redux";

import Hero from "../parts/Hero";
import Movies from "parts/Movies";

export default function Home() {
  const homePages = useSelector(state => state.homePages);

  return (
    <div className="pages-test">
      {homePages.heroSection && <Hero heroSection={homePages.heroSection} />}
      {homePages.trending && (
        <Movies label="Trending" movies={homePages.trending} />
      )}
      {homePages.nowPlaying && (
        <Movies label="Now Playing" movies={homePages.nowPlaying} />
      )}
      {homePages.upcoming && (
        <Movies label="Upcoming" movies={homePages.upcoming} />
      )}
    </div>
  );
}
