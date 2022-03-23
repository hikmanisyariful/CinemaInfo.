import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { VscRunAll } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { ImPlay } from "react-icons/im";
import { MdMovie } from "react-icons/md";

const childRouteCollection = [
  {
    route: "/collection/all",
    nameRoute: "All",
    icon: (
      <VscRunAll
        className="text-light me-0 me-md-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/liked",
    nameRoute: "Liked",
    icon: (
      <FcLike
        className="text-danger me-0 me-md-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/favorite",
    nameRoute: "Favorite",
    icon: (
      <AiFillStar
        className="text-warning me-0 me-md-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/wantToWatch",
    nameRoute: "Want to Watch",
    icon: (
      <ImPlay
        className="text-info me-0 me-md-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/watched",
    nameRoute: "Watched",
    icon: (
      <MdMovie
        className="text-success me-0 me-md-2"
        style={{ width: 30, height: 30 }}
      />
    )
  }
];

export default function Collection() {
  return (
    <div
      className="container-fluid position-relative px-0"
      style={{ marginTop: 80 }}
    >
      <div className="container">
        <div className="row pt-4">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 activated-sidebar">
            <ul className="navbar-nav w-100">
              {childRouteCollection.map((item, index) => (
                <li
                  key={`${item.nameRoute}-${index}`}
                  className="w-100 my-2 py-2"
                >
                  <NavLink
                    className="w-100 py-2 ps-2 pe-2 d-flex align-items-center"
                    to={`${item.route}`}
                    style={({ isActive }) => ({
                      background: isActive ? "white" : "none",
                      color: isActive ? "black" : "white",
                      textDecoration: "none",
                      borderRadius: "0 20px 20px 0"
                    })}
                  >
                    {item.icon}
                    {item.nameRoute}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* end sidebar */}

          <div
            className="col-12 col-md-9 ms-0 ms-lg-5"
            style={{ marginBottom: 100 }}
          >
            <Outlet />
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-fixed bottom-0 start-0 bg-dark shadow-lg activated-menubar"
        style={{ zIndex: 100, borderRadius: "10px 10px 0px 0px" }}
      >
        <div className="row p-0">
          {childRouteCollection.map((item, index) => {
            return (
              <div
                key={`${item.nameRoute}-${index}`}
                className="col p-0 d-flex justify-content-center align-items-center"
              >
                <NavLink
                  className="row d-flex align-items-center justify-content-center py-2"
                  to={`${item.route}`}
                  style={({ isActive }) => ({
                    background: isActive ? "black" : "none",
                    color: isActive ? "white" : "black",
                    textDecoration: "none",
                    borderRadius: "10px 10px 0px 0px"
                  })}
                >
                  <div className="col-12 text-center ">{item.icon}</div>
                  <div
                    className="col-12 text-center "
                    style={{ fontSize: "8px" }}
                  >
                    {item.nameRoute}
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
