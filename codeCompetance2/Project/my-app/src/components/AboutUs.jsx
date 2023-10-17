import React, { forwardRef } from "react";
import Adidas from "../assets/img/adidas-logo.png";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section className="about-section">
      <div className="container pt-5 pb-5" ref={ref}>
        <div className="row about">
          <div className="col-6">
            <img src={Adidas} alt="About Us" className="img-fluid" />
          </div>
          <div className="col-6">
            <h2 className="fw-bold">About Us</h2>
            <p className="mt-3 text-justify">
              Welcome to Adidas, where sportswear innovation and style meet.
              Founded in 1949, we've been pioneers in sports performance and
              fashion. Our journey began with one simple goal: to provide
              athletes with top-quality gear. Today, we're known worldwide for
              our premium athletic footwear, apparel, and accessories. Whether
              you're at the gym, on the track, the court, or the streets, we've
              got you covered. At Adidas, we believe in the power of sports to
              change lives. We're dedicated to creating products that help
              people excel, achieve their goals, and make a difference. Our
              commitment to sustainability and social responsibility drives us
              to have a positive impact on the environment and communities. Our
              brand is more than just a logo; it's a symbol of passion,
              dedication, and excellence. Join us on our journey to inspire and
              enable people to embrace the power of sports. Experience the
              Adidas difference, explore our innovations, and be part of a
              global community celebrating sport and style. Adidas - Here to
              Create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
