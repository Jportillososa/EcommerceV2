import React, { useState } from "react";
import "../pages/Home.css";
import { Outlet, Link } from "react-router-dom";

export default function Header(props) {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <figure className="brand-title">
          <Link to="/">
            <h1>
              Fat<span className="brand-title2">Cat</span> Guitars
            </h1>
          </Link>
          <div className="toggle-button">
            <span className="bar1"></span>
            <span className="bar1"></span>
            <span className="bar1"></span>
          </div>
        </figure>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="toggle-button">
            <span className="bar1"></span>
            <span className="bar1"></span>
            <span className="bar1"></span>
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
