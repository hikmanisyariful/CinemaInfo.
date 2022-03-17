import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Collection() {
  return (
    <div className="container" style={{ marginTop: 80 }}>
      <div className="row pt-4">
        <div className="col-3">
          <ul>
            <li>
              <NavLink
                to={`/collection/all`}
                style={({ isActive }) => ({
                  background: isActive ? "white" : "none",
                  color: isActive ? "black" : "white"
                })}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/collection/liked`}
                style={({ isActive }) => ({
                  background: isActive ? "white" : "none",
                  color: isActive ? "black" : "white"
                })}
              >
                Liked
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/collection/favorite`}
                style={({ isActive }) => ({
                  background: isActive ? "white" : "none",
                  color: isActive ? "black" : "white"
                })}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/collection/wantToWatch`}
                style={({ isActive }) => ({
                  background: isActive ? "white" : "none",
                  color: isActive ? "black" : "white"
                })}
              >
                Want to Watch
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/collection/watched`}
                style={({ isActive }) => ({
                  background: isActive ? "white" : "none",
                  color: isActive ? "black" : "white"
                })}
              >
                Watched
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
