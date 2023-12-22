import React from "react";
import "./Navbar.css"; // Import your custom CSS file for additional styling
import logoImg from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-root">
      <div className="custom-navbar">
        <div className="nav-logo">
          <div>
            <img src={logoImg} alt="Logo" className="logo" />
          </div>
          <div className="logoText">PICFIESTA</div>
        </div>
        <div className="nav-links">
          <div>Trending This Week</div>
          <div>Editor’s Pics</div>
          <div>Explore By Theme</div>
        </div>
        <div className="last-nav">
          <div className="nav-login">Signup</div>
          <div className="nav-signup">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
