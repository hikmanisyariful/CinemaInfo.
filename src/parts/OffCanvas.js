import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { Button, Offcanvas } from "react-bootstrap";
import IconText from "parts/IconText";
import { BiSearchAlt } from "react-icons/bi";
import { MdManageAccounts, MdCollectionsBookmark } from "react-icons/md";

export default function OffCanvasRight({ name, routesHeader, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div {...props}>
      <Button onClick={handleShow} className="bg-transparent border-0">
        <FaBars className="fs-4 text-light" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <IconText />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <ul className="navbar-nav">
              {routesHeader.map((routeElement, index) => {
                return (
                  <li
                    className="nav-item mx-3 my-2"
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
                      onClick={handleClose}
                    >
                      {routeElement.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav mt-5">
              <li className="nav-item my-2">
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
                  onClick={handleClose}
                >
                  <BiSearchAlt className="fs-3" /> Search
                </NavLink>
              </li>
              <>
                <li className="nav-item my-2">
                  <NavLink
                    to="/profile"
                    className="nav-link mx-3"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "500" : "400",
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#d0a33c" : ""
                      };
                    }}
                    onClick={handleClose}
                  >
                    <MdManageAccounts className="fs-3 pb-1" /> Profile
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    to="/collection"
                    className="nav-link mx-3"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "500" : "400",
                        textDecoration: isActive ? "underline" : "none",
                        color: isActive ? "#d0a33c" : ""
                      };
                    }}
                    onClick={handleClose}
                  >
                    <MdCollectionsBookmark className="fs-3 pb-1" /> Collection
                  </NavLink>
                </li>

                <li className="nav-item mx-3 w-50 my-5">
                  <NavLink
                    to="/"
                    onClick={handleClose}
                    type="link"
                    className="btn btn-light nav-link px-4 py-1 mt-1 text-black"
                  >
                    Logout
                  </NavLink>
                </li>
              </>

              <li className="nav-item mx-3 w-50 my-5">
                <NavLink
                  to="/login"
                  onClick={handleClose}
                  type="link"
                  className="btn btn-light nav-link px-4 py-1 mt-1 text-black"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
