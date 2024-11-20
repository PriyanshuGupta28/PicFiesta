import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo and Tagline */}
        <div style={{ flex: "1 1 250px", minWidth: "200px" }}>
          <h2 style={{ color: "#333", fontWeight: "bold" }}>MyWebsite</h2>
          <p style={{ color: "#555" }}>
            Discover the world through stunning images.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
          <h3 style={{ color: "#333" }}>Navigation</h3>
          <ul
            style={{ listStyle: "none", padding: 0, margin: 0, color: "#555" }}
          >
            <li>
              <Link
                to="/about"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/editor"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Editor’s Pics
              </Link>
            </li>
            <li>
              <Link
                to="/trending"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Trending This Week
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Explore By Theme
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
          <h3 style={{ color: "#333" }}>Resources</h3>
          <ul
            style={{ listStyle: "none", padding: 0, margin: 0, color: "#555" }}
          >
            <li>
              <Link
                to="https://pixabay.com/service/license-summary/"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Licenses
              </Link>
            </li>
            <li>
              <Link
                to="https://pixabay.com/service/about/api/"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                API
              </Link>
            </li>
            <li>
              <Link
                to="https://pixabay.com/service/terms/"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="https://pixabay.com/service/privacy/"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
          <h3 style={{ color: "#333" }}>Follow Us</h3>
          <div style={{ fontSize: "1.5rem", display: "flex", gap: "10px" }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

      {/* Copyright */}
      <div style={{ textAlign: "center", color: "#888" }}>
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default AppFooter;
