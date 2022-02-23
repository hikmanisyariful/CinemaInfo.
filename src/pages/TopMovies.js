import React, { useEffect } from "react";
import NavigateTopSection from "parts/NavigateTopSection";
import Footer from "parts/Footer";
import PaginatedTables from "parts/PaginatedTables";
import { topMovieSeries } from "assets/DummyData/topMoviePage";

export default function TopMovies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <NavigateTopSection />
      <PaginatedTables itemsPerPage={10} items={topMovieSeries.mostPopular} />
      <Footer />
    </div>
  );
}
