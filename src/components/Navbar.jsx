import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="top-bar bg-primary p-2">
        <div className="row">
          <div className="col-md-9 col-6">
            <div className="ms-5">
              <Link className="me-4" to="mailto:harshad.sunbeam98@gmail.com">
                <i className="text-light fa fa-envelope">
                  <span className="d-none d-md-inline">
                    harshad.sunbeam98@gmail.com
                  </span>
                </i>
              </Link>

              <Link className="me-4" to="tel:+91 9112801380">
                <i className="text-light fa fa-phone">
                  <span className="d-none d-md-inline">+91 9112801380</span>
                </i>
              </Link>

              <Link className="me-4" to="https://wa.me/+919112801380">
                <i className=" text-light fa fa-whatsapp">
                  <span className="d-none d-md-inline">+91 9112801380</span>
                </i>
              </Link>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="float-end me-5">
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="text-light fa fa-facebook "></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="text-light fa fa-instagram "></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="text-light fa fa-linkedin "></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="text-light fa fa-twitter "></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="text-light fa fa-youtube "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">{import.meta.env.VITE_SITE_NAME}</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              {/*               
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
               */}
              {/* 
              <li className="listing-dropdown">
                <a href="#">
                  <span>Listing Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Column 1 link 1</a>
                    <a href="#">Column 1 link 2</a>
                    <a href="#">Column 1 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 2 link 1</a>
                    <a href="#">Column 2 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 3 link 1</a>
                    <a href="#">Column 3 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 4 link 1</a>
                    <a href="#">Column 4 link 2</a>
                    <a href="#">Column 4 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 5 link 1</a>
                    <a href="#">Column 5 link 2</a>
                    <a href="#">Column 5 link 3</a>
                  </li>
                </ul>
              </li>
               */}

              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="btn-getstarted flex-md-shrink-0"
            href="index.html#about"
          >
            Get Started
          </a>
        </div>
      </header>
    </>
  );
}
