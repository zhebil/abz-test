import React from "react";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <div className="header__logo">
              <img src={logo} width="135" height="20" alt="TestTask Logo" />
            </div>
          </div>
          <div className="header__right">
            <nav className="header__menu menu">
              <div className="menu__burger">
                <button
                  aria-label="Open menu"
                  className="menu__burger-btn"
                ></button>
              </div>
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#about" className="menu__link">About me</a>
                </li>
                <li className="menu__item">
                  <a href="#relationships" className="menu__link">Relationships</a>
                </li>
                <li className="menu__item">
                  <a href="#requirements" className="menu__link">Requirements</a>
                </li>
                <li className="menu__item">
                  <a href="#users" className="menu__link">Users</a>
                </li>
                <li className="menu__item">
                  <a href="#sign-up" className="menu__link">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
