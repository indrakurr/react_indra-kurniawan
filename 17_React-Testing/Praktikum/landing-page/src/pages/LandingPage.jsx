import React from "react";
import Header from "./components/Header";
import heroImage from "../assets/hero-img.png";
import "../assets/LandingPage.css";
import { Link } from "react-router-dom";
import ModalWelcome from "./components/Welcome";


function LandingPage() {
  return (
    <div>
      <ModalWelcome />
      <Header />
      <main>
        <section id="hero">
          <div className="hero-section">
            <div className="container1">
              <h1>Better Solutions For Your Business</h1>
              <p>
                We are a team of talented designers making websites with
                Bootstrap
              </p>
              <div className="btn-one">
                <button className="btn-get" type="button">
                  <Link to="/create-product">Create Product</Link>
                </button>
                <button className="btn-watch" type="button">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="container2">
              <img className="hero-img" src={heroImage} alt="Hero Img" />
            </div>
          </div>
        </section>
        <section id="join">
          <div className="join-section">
            <h2>Join Our Newsletter</h2>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form className="subscribe">
              <input className="form-subs" type="text" />
              <button className="btn-subs" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <section id="footer">
          <div className="footer-section">
            <div className="arsha">
              <h2>ARSHA</h2>
              <address>
                <p>
                  A108 Adam Street
                  <br />
                  New York, NY 535022
                  <br />
                  United States
                </p>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                </p>
              </address>
            </div>
            <div className="useful-links">
              <h2>Useful Links</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="services">
              <h2>Our Services</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="social-network">
              <h2>Our Social Network</h2>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="circleSection">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
            </div>
          </div>
        </section>

        <section id="copyright">
          <div className="copyright1">
            <p>
              © Copyright
              <strong>Arsha.</strong>
              All Right Reserved
            </p>
          </div>
          <div className="copyright2">
            <p>
              Designed By
              <span> BootstrapMade</span>
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default LandingPage;
