import React from "react";
import "./Navbar.css"; // Import your custom CSS file for additional styling
import logoImg from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { UserButton, useAuth } from "@clerk/clerk-react";

const Navbar = () => {
  const { userId } = useAuth();
  const details = useAuth();
  console.log(details, "userId");
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
        {!userId ? (
          <div className="last-nav">
            <Link to={"/signup"} className="signup-link">
              <div className="nav-signup">Signup</div>
            </Link>
            <Link className="login-link" to={"/login"}>
              <div className="nav-login">Login</div>
            </Link>
          </div>
        ) : (
          <UserButton showName signInUrl="/login" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
