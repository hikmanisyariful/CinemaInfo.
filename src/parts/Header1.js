import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "elements/Button";
import IconText from "parts/IconText";

import { BiSearchAlt } from "react-icons/bi";
import { NavDropdown } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import OffCanvasRight from "parts/OffCanvas";

// import IconSearch from "assets/images/icons/icon-search.svg";
// import IconProfile from "assets/images/icons/profile.svg";

const routesHeader = [
  {
    route: "/",
    name: "Home"
  },
  {
    route: "/topMovies",
    name: "Top Movies"
  },
  {
    route: "/topSeries",
    name: "Top Series"
  }
];

export default function Header1({ toggle }) {
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
  }, [scrollNav]);

  return (
    <header
      className={`sticky-top ${
        scrollNav
          ? "scroll-active-header scroll-transition"
          : "bg-transparent scroll-transition"
      }`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid justify-content-between px-0">
            <IconText />
            <OffCanvasRight placement="end" className="nav-offcanvas" />
            <div className="justify-content-between w-100 ms-5 me-1 nav-full">
              <ul className="navbar-nav">
                {routesHeader.map((routeElement, index) => {
                  return (
                    <li
                      className="nav-item mx-3"
                      key={`header-navigation-${index}-${routeElement}`}
                    >
                      <NavLink
                        to={routeElement.route}
                        className="nav-link"
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "500" : "400",
                            textDecoration: isActive ? "underline" : "none",
                            color: isActive ? "#d0a33c" : ""
                          };
                        }}
                      >
                        {routeElement.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/search"
                    className="nav-link mx-3"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "500" : "400",
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#d0a33c" : ""
                      };
                    }}
                  >
                    <BiSearchAlt className="fs-3" /> Search
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <Button
                    href="/login"
                    type="link"
                    className="btn btn-light nav-link px-4 py-1 mt-1 text-black"
                  >
                    Login
                  </Button>
                </li>
                <NavDropdown
                  title="Account"
                  className="nav-item mx-3"
                  bg="bg-black"
                  variant="dark"
                >
                  <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item to="/collection">
                    Collection
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
