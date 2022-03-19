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
        className="text-light me-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/liked",
    nameRoute: "Liked",
    icon: (
      <FcLike className="text-danger me-2" style={{ width: 30, height: 30 }} />
    )
  },
  {
    route: "/collection/favorite",
    nameRoute: "Favorite",
    icon: (
      <AiFillStar
        className="text-warning me-2"
        style={{ width: 30, height: 30 }}
      />
    )
  },
  {
    route: "/collection/wantToWatch",
    nameRoute: "Want to Watch",
    icon: (
      <ImPlay className="text-info me-2" style={{ width: 30, height: 30 }} />
    )
  },
  {
    route: "/collection/watched",
    nameRoute: "Watched",
    icon: (
      <MdMovie
        className="text-success me-2"
        style={{ width: 30, height: 30 }}
      />
    )
  }
];

export default function Collection() {
  return (
    <div className="container" style={{ marginTop: 80 }}>
      <div className="row pt-4">
        <div className="col-2">
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
        <div className="col-9 ms-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
