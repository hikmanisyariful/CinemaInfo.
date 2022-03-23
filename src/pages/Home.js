import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// import Hero from "../parts/Hero";
import Hero from "parts/Hero";
import Movies from "parts/Movies";
import Footer from "parts/Footer";
import LoadingCard from "parts/LoadingCard";

// import { homePages } from "assets/DummyData/homePages";

export default function Home() {
  const homePages = useSelector(state => state.homePages);
  const topMovies = useSelector(state => state.topMoviesPage);
  const topSeries = useSelector(state => state.topSeriesPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {homePages.heroSection && <Hero heroSection={homePages.heroSection} />}

      {homePages.trending ? (
        <Movies label="Trending" movies={homePages.trending} />
      ) : (
        <LoadingCard />
      )}
      {homePages.nowPlaying ? (
        <Movies label="Now Playing" movies={homePages.nowPlaying} />
      ) : (
        <LoadingCard />
      )}
      {homePages.upcoming ? (
        <Movies label="Upcoming" movies={homePages.upcoming} />
      ) : (
        <LoadingCard />
      )}

      {/* <LoadingCard /> */}

      {Object.keys(homePages).length === 4 && <Footer />}

      {homePages && (
        <div className="container w-100 bg-white text-black m-5 border border-dark">
          {JSON.stringify(homePages)}
        </div>
      )}

      {topMovies && (
        <div className="container w-100 bg-white text-black m-5 border border-dark">
          {JSON.stringify(topMovies)}
        </div>
      )}

      {topSeries && (
        <div className="container w-100 bg-white text-black m-5 border border-dark">
          {JSON.stringify(topSeries)}
        </div>
      )}
    </div>
  );
}
