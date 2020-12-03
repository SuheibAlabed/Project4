import React, { useState } from "react";
import Logo from "../../images/Logo1.png";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <div>
      <nav className="w-navbar">
        <div className="w-navbar-container">
          <Link to="/" className="w-navbar-logo">
            <img src={Logo} alt="Website logo"></img>ebSoft
          </Link>
          <div className="w-menu-icon" onClick={handelClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "w-nav-menu active" : "w-nav-menu"}>
            <li className="w-nav-item">
              <Link to="/" className="w-nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="w-nav-item">
              <Link to="/" className="w-nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="w-nav-item">
              <Link
                to="services"
                className="w-nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <button className="w-nav-item btn-nav-item">
              <Link
                to="/"
                className="w-nav-links btn"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
// export default Navbar;
