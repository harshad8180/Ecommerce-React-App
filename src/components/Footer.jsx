import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer text-light">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4 className="text-light">Join Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center">
                <span className="sitename text-light fd-2">
                  {import.meta.env.VITE_SITE_NAME}
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p className="fs-5">{import.meta.env.VITE_SITE_ADDRESS}</p>

                <p>
                  <strong>Email:</strong>
                  <Link
                    className="text-light fs-5"
                    target="_blank"
                    rel="noreferrer"
                    to={`mailto:${import.meta.env.VITE_SITE_EMAIL}`}
                  >
                    {import.meta.env.VITE_SITE_EMAIL}
                  </Link>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <Link
                    className="text-light fs-5"
                    target="_blank"
                    rel="noreferrer"
                    to={`tel:${import.meta.env.VITE_SITE_PHONE}`}
                  >
                    {import.meta.env.VITE_SITE_PHONE}
                  </Link>
                </p>
                <p>
                  <strong>Whatsapp:</strong>
                  <Link
                    className="text-light fs-5"
                    target="_blank"
                    rel="noreferrer"
                    to={`https://wa.me/${import.meta.env.VITE_SITE_WHATSAPP}`}
                  >
                    {import.meta.env.VITE_SITE_WHATSAPP}
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Useful Links</h4>
              <ul>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-light col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Our Services</h4>
              <ul>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/features">
                    Features
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <Link className="text-light" to="/#">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-light col-lg-4 col-md-12">
              <h4 className="text-light">Follow Us</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links d-flex">
                <Link
                  className="me-3"
                  to={`${import.meta.env.VITE_SITE_FACEBOOK}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-facebook "></i>
                </Link>
                <Link
                  className="me-3"
                  to={`${import.meta.env.VITE_SITE_INSTAGRAM}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-instagram "></i>
                </Link>
                <Link
                  className="me-3"
                  to={`${import.meta.env.VITE_SITE_LINKEDIN}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-linkedin "></i>
                </Link>
                <Link
                  className="me-3"
                  to={`${import.meta.env.VITE_SITE_TWITTER}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-twitter-x "></i>
                </Link>
                <Link
                  className="me-3"
                  to={`${import.meta.env.VITE_SITE_YOUTUBE}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-light bi bi-youtube "></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">
              {import.meta.env.VITE_SITE_NAME}
            </strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
}
