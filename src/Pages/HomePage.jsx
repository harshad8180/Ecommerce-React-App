import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Values from "../components/Values";
import Facts from "../components/Facts";
import Features from "../components/Features";
import ProductSlider from "../components/ProductSlider";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import CategorySlider from "../components/CategorySlider";

export default function HomePage() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">
                      We offer modern and top brands products for all categories
                      of working Male
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                      We Deals in Top 50+ brands and provide upto 90% Discount
                      on Top and Fast Fasion Brands
                    </p>
                    <div
                      className="d-flex flex-column flex-md-row"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <Link to="/shop?mc=Male" className="btn-get-started">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 hero-img"
                    data-aos="zoom-out"
                  >
                    <img
                      src="assets/img/swiper/macbook"
                      className="img-fluid animated"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">
                      We offer modern and top brands products for all categories
                      of working Female
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                      We Deals in Top 50+ brands and provide upto 90% Discount
                      on Top and Fast Fasion Brands
                    </p>
                    <div
                      className="d-flex flex-column flex-md-row"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <Link to="/shop?mc=Female" className="btn-get-started">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 hero-img"
                    data-aos="zoom-out"
                  >
                    <img
                      src="assets/img/swiper/mobile"
                      className="img-fluid animated"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">
                      We offer modern and top brands products of all categories
                      for Kids
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                      We Deals in Top 50+ brands and provide upto 90% Discount
                      on Top and Fast Fasion Brands
                    </p>
                    <div
                      className="d-flex flex-column flex-md-row"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <Link to="/shop?mc=Kids" className="btn-get-started">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 hero-img"
                    data-aos="zoom-out"
                  >
                    <img
                      src="assets/img/swiper/cloths"
                      className="img-fluid animated"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                We are team of talented designers making websites with Bootstrap
              </p>
              <div
                className="d-flex flex-column flex-md-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#about" className="btn-get-started">
                  Get Started <i className="bi bi-arrow-right"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/swiper/macbook"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}

      <About />
      <Values />
      <Facts />
      <Features />
      <ProductSlider />
      <Products />
      <Testimonial />
      <CategorySlider />
    </>
  );
}
