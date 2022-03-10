import React, { useState, useEffect } from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";
import { FaBars } from "react-icons/fa";

import IconSearch from "assets/images/icons/icon-search.svg";
import IconProfile from "assets/images/icons/profile.svg";

export default function Header({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    // Dynamically Update SCSS
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      scrollNav ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.0)"
    );
  }, [scrollNav]);

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <IconText />
          <div className="icon-wrapper" onClick={toggle}>
            <FaBars />
          </div>
          <div className="collapse navbar-collapse main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/topMovies">
                  Top Movies
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/topSeries">
                  Top Tv Series
                </Button>
              </li>
              {/* <li className="nav-item">
                <Button className="nav-link" type="link" href="/about">
                  About
                </Button>
              </li> */}
            </ul>
          </div>

          <div className="main-navbar">
            <ul className="navbar-nav icon">
              <li className="nav-item" style={{ marginTop: "7px" }}>
                <Button className="nav-icon" type="link" href="/search">
                  <img src={IconSearch} alt="search movies" />
                  <p className="text-icon">Search</p>
                </Button>
              </li>
              <li className="nav-item">
                <Button className="btn">
                  <img
                    src={IconProfile}
                    alt="Look at profile"
                    style={{ color: "black" }}
                  />
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
