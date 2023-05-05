import React from "react";
import { Outlet } from "react-router-dom";
import "../css/Header.css";

const LayoutClient = () => {
  return (
    <div>
      <div className="wrapper">
        <header className="">
          <div className="nav">
            <div className="nav-pc">
              <div className="nav-left">
                <div className="logo">
                  <img
                    src="https://res.cloudinary.com/freelencer/image/upload/v1682446409/Movie/logo_fqzfvp.png"
                    alt=""
                  />
                </div>
                <ul className="nav-list">
                  <li>
                    <a href="/" className="nav-link">
                      HOME
                    </a>
                    <a href="#" className="nav-link">
                      MOVIE
                    </a>
                    <a href="#" className="nav-link">
                      TV SHOW
                    </a>
                    <a href="blog" className="nav-link">
                      BLOG
                    </a>
                    <a href="#" className="nav-link">
                      CONTACTS
                    </a>
                  </li>
                </ul>
                <form action="" className="nav-search-input">
                  <input
                    className=""
                    type="text"
                    placeholder="Find Favorite Movie"
                  />
                  <button className="nav-search-submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="nav-right">
                <a href="#">SIGN IN</a>
                <a href="#">SIGN UP</a>
              </div>

              <label htmlFor="check" className="nav-bar">
                <i className="fas fa-bars"></i>
              </label>
            </div>
          </div>
          <input type="checkbox" hidden id="check" className="input-check" />
          <label htmlFor="check" className="nav-over-lay"></label>
          <div className="nav-mobile">
            <label htmlFor="check" className="nav-mobile-close">
              <i className="fas fa-times"></i>
            </label>
            <ul className="nav-mobile-list">
              <li>
                <a href="#" className="nav-mobile-link">
                  HOME
                </a>
                <a href="#" className="nav-mobile-link">
                  MOVIE
                </a>
                <a href="#" className="nav-mobile-link">
                  TV SHOW
                </a>
                <a href="blog" className="nav-mobile-link">
                  BLOG
                </a>
                <a href="#" className="nav-mobile-link">
                  CONTACTS
                </a>
                <hr />
                <a href="#" className="nav-mobile-button-link">
                  ĐĂNG NHẬP
                </a>
                <a href="#" className="nav-mobile-button-link">
                  ĐĂNG KÝ
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutClient;
