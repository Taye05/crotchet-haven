import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/thread.jpg";

const Navbar = ({ sticky }) => {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
        <h1> Crotchet Haven</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar--link-item">
          <a href="/about#contact_btn">About</a>
        </li>
        <li className="navbar--link-item">
          <a href="tel:09031687355">Contact Us</a>
        </li>
        <li className="navbar--link-item">Blog</li>
      </ul>
    </nav>
  );
};
export default Navbar;
