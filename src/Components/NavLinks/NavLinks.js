import React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const NavLinks = () => {
  const hadnleClick = () => {
    console.log("Home");
  };
  return (
    <div className="navlink-root">
      <div className="link">
        <Link to={"/"} onClick={hadnleClick} style={{ fontWeight: "bold" }}>
          Home
        </Link>
      </div>
      <div className="link">
        <Link to={"/photos"}>Photos</Link>
      </div>
      <div className="link">
        <Link to={"/illustrations"}>Illustrations</Link>
      </div>
      <div className="link">
        <Link to={"/vectors"}>Vectors</Link>
      </div>
      <div className="link">
        <Link to={"/videos"}>Videos</Link>
      </div>
      <div className="filter">
        Filter
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default NavLinks;
