import React from "react";
import "./NavLinks.css";
import { Link, useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NAVLINKCURRENT } from "../../Utility/ReduxConstants/NavLinksConstants/NavLinksConstants";

const NavLinks = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const links = [
    { title: "Home", link: "/" },
    { title: "Photos", link: "/photos" },
    { title: "Illustrations", link: "/illustrations" },
    { title: "Vectors", link: "/vectors" },
    { title: "Videos", link: "/videos" },
  ];

  const handleClick = (e) => {
    dispatch({
      type: NAVLINKCURRENT,
      payload: e?.title,
    });
  };

  return (
    <div className="navlink-root">
      {links?.map((e) => (
        <div className="link">
          <Link
            to={e?.link}
            onClick={() => handleClick(e)}
            style={{
              fontWeight: e?.link === location?.pathname ? "bold" : "none",
            }}
          >
            {e?.title}
          </Link>
        </div>
      ))}
      <div className="filter">
        Filter
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default NavLinks;
