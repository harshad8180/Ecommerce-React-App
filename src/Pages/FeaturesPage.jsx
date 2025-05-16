import React from "react";
import About from "../components/About";
import Values from "../components/Values";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Breadcrum from "../components/Breadcrum";

export default function FeaturesPage() {
  return (
    <>
      <Breadcrum title="Features" />
      <Values />
      <Facts />
      <Features />
      <About />
      <Testimonial />
    </>
  );
}
