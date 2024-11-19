import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import logoImg from "../../Images/logo.png";
import picfiestamobileLogo from "../../Images/picfiestamobileLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="nav-root">
      <div className="custom-navbar">
        <div
          className="nav-logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <div>
            <img src={logoImg} alt="Logo" className="logo" />
            <img
              className="picfiestamobileLogo"
              src={picfiestamobileLogo}
              alt="Logo"
            />
          </div>
          <div className="logoText">PICFIESTA</div>
        </div>

        <div className="nav-links">
          <div>Trending This Week</div>
          <div>Editor’s Pics</div>
          <div>Explore By Theme</div>
        </div>

        <div className="hamburger">
          <Hamburger
            toggled={isDrawerOpen}
            toggle={setDrawerOpen}
            onToggle={toggleDrawer}
          />
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer
        title="Menu"
        placement="right"
        closeIcon={
          <Hamburger
            toggled={isDrawerOpen}
            toggle={setDrawerOpen}
            onToggle={toggleDrawer}
          />
        }
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
            paddingLeft: "1rem",
          }}
        >
          {navLinks?.map((e, i) => (
            <div key={i}>
              <Link to={e?.link} onClick={toggleDrawer}>
                {e?.title}
              </Link>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Photos",
    link: "/photos",
  },
  {
    title: "Illustrations",
    link: "/illustrations",
  },
  {
    title: "Vectors",
    link: "/vectors",
  },
  {
    title: "Videos",
    link: "/videos",
  },
  {
    title: "Contact Us",
    link: "/contactus",
  },
  {
    title: "Login",
    link: "/login",
  },
  {
    title: "Signup",
    link: "/signup",
  },
  {
    title: "Search",
    link: "/search",
  },
  {
    title: "Trending This Week",
    link: "/trending",
  },
  {
    title: "Editor's Pics",
    link: "/editors-pics",
  },
  {
    title: "Explore By Theme",
    link: "/explore-themes",
  },
];
