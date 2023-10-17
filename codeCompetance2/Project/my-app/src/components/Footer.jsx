import React from "react";
import instagramLogo from "../assets/img/instagram.svg";
import linkedinLogo from "../assets/img/linkedin.svg";
import githubLogo from "../assets/img/github.svg";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section>
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="mb-4">
                <div className="me-3">
                  <img
                    src="https://cdn.aboutstatic.com/file/79ece4caa24b33ea5285a444a2b86d00.png?quality=75&transparent=1&trim=1&height=480&width=360"
                    alt="Logo"
                    width="30px"
                  />
                </div>
                adidas
              </h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lacinia fermentum felis, nec facilisis ante imperdiet vitae.
                Pellentesque et egestas augue.
              </h5>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Support</h6>
              <p>
                <a className="text-white" href="/#">
                  adidas Indonesia
                </a>
              </p>
              <p>
                <a className="text-white" href="/#">
                  adidas UK
                </a>
              </p>
              <p>
                <a className="text-white" href="/#">
                  adidas US
                </a>
              </p>
              <p>
                <a className="text-white" href="/#">
                  Lorem Ipsum
                </a>
              </p>
            </div>

            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Purwokerto, Jawa Tengah,
                Indonesia
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>{" "}
                kurniawanindra9d@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> 0815 7572 6544
              </p>
              {/* social media */}
              <div className="icon d-flex gap-3 mt-3">
                <a href="https://www.instagram.com/indrakuur">
                  <img src={instagramLogo} alt="Instagram Icon" />
                </a>
                <a href="https://www.linkedin.com/in/indrakurr/">
                  <img src={linkedinLogo} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/indrakurr">
                  <img src={githubLogo} alt="GitHub Icon" />
                </a>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright:
                <a className="text-white" href="/#">
                  adidas
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
