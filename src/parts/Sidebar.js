import React from "react";
import Button from "elements/Button";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ toggle }) {
  return (
    <aside className="sidebar">
      <div className="icon-wrapper" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/">
              Home
            </Button>
          </li>
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/topMovies">
              Top Movies
            </Button>
          </li>
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/topSeries">
              Top Tv Series
            </Button>
          </li>
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/about">
              About
            </Button>
          </li>
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/profile">
              Profile
            </Button>
          </li>
          <li className="sidebar-link"></li>
          <li className="sidebar-link" onClick={toggle}>
            <Button className="nav-link" type="link" href="/search">
              Search
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
