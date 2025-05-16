import React from "react";

export default function CategorySlider() {
  return (
    <>
      <section id="clients" className="clients section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Clients</h2>
          <p>
            We work with best clients
            <br />
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            {/* <script type="application/json" className="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "480": {
                  "slidesPerView": 3,
                  "spaceBetween": 60
                },
                "640": {
                  "slidesPerView": 4,
                  "spaceBetween": 80
                },
                "992": {
                  "slidesPerView": 6,
                  "spaceBetween": 120
                }
              }
            }
          </script> */}
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-7.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="../assets/img/clients/client-8.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}
