import { UserButton, useAuth } from "@clerk/clerk-react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import logoImg from "../../Images/logo.png";
import picfiestamobileLogo from "../../Images/picfiestamobileLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const [isOpen, setOpen] = useState(false); // For hamburger state
  const [isDrawerOpen, setDrawerOpen] = useState(false); // For drawer state
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen); // Toggle drawer open/close
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
            toggled={isOpen}
            toggle={setOpen}
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
            toggled={isOpen}
            toggle={setOpen}
            onToggle={toggleDrawer}
          />
        }
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <div>
          <Link to="/trending" onClick={toggleDrawer}>
            Trending This Week
          </Link>
        </div>
        <div>
          <Link to="/editors-pics" onClick={toggleDrawer}>
            Editor’s Pics
          </Link>
        </div>
        <div>
          <Link to="/explore-themes" onClick={toggleDrawer}>
            Explore By Theme
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
