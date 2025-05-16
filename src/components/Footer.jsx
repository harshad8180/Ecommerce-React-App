import React from "react";

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
                <span className="sitename text-light">
                  {import.meta.env.VITE_SITE_NAME}
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Useful Links</h4>
              <ul>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-light col-lg-2 col-md-3 footer-links">
              <h4 className="text-light">Our Services</h4>
              <ul>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Web Design
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Product Management
                  </a>
                </li>
                <li>
                  <i className="text-light bi bi-chevron-right"></i>
                  <a className="text-light" href="#">
                    Marketing
                  </a>
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
                <a className="text-light" href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a className="text-light" href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a className="text-light" href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a className="text-light" href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">
              {" "}
              {import.meta.env.VITE_SITE_NAME}
            </strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
}
