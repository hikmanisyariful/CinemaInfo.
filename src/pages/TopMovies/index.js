import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigateTopSection from "parts/NavigateTopSection";
import Footer from "parts/Footer";

export default function TopMovies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <NavigateTopSection currentPage={"topMovies"} />
      <Outlet />
      <Footer />
    </div>
  );
}
