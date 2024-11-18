import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const AppFooter = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
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
              <a href="/about" style={{ color: "inherit" }}>
                About
              </a>
            </li>
            <li>
              <a href="/explore" style={{ color: "inherit" }}>
                Explore
              </a>
            </li>
            <li>
              <a href="/blog" style={{ color: "inherit" }}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "inherit" }}>
                Contact
              </a>
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
              <a href="/licenses" style={{ color: "inherit" }}>
                Licenses
              </a>
            </li>
            <li>
              <a href="/api" style={{ color: "inherit" }}>
                API
              </a>
            </li>
            <li>
              <a href="/terms" style={{ color: "inherit" }}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" style={{ color: "inherit" }}>
                Privacy Policy
              </a>
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
