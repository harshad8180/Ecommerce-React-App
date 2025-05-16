import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrum({ title }) {
  return (
    <>
      <br />
      <br />
      <section id="hero" className="my-5 bg-primary">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-light">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-light" aria-current="page">
              {title}
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
