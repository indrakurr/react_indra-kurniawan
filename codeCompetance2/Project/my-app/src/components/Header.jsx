import React from "react";

const Header = (props) => {
  const handleAboutClick = () => {
    props.scrollToAbout();
  };

  const handleContactClick = () => {
    props.scrollToContact();
  };

    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container pb-1">
            <a className="navbar-brand" href="/#">
              <img
                src="https://cdn.aboutstatic.com/file/79ece4caa24b33ea5285a444a2b86d00.png?quality=75&transparent=1&trim=1&height=480&width=360"
                width=""
                height="30"
                className="d-inline-block align-top"
                alt="Website Logo"
              />
              adidas
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-xl-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item ms-3">
                  <a
                    className="nav-link link-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This is Features button."
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a
                    className="nav-link link-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This is Features button."
                    href="/#"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item ms-3" onClick={handleAboutClick}>
                  <a
                    className="nav-link link-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This is Pricing button."
                    href="/#"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item ms-3" onClick={handleContactClick}>
                  <a
                    className="nav-link link-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This is FAQs button."
                    href="/#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header;