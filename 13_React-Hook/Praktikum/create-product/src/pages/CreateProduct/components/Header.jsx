function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid pb-1">
        <a className="navbar-brand" href="/#">
          Simple Header
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
            <li className="nav-item me-3">
              <button
                type="button"
                className="btn btn-primary p-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                title="This is Home button."
              >
                Home
              </button>
            </li>
            <li className="nav-item me-4">
              <a
                className="nav-link link-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                title="This is Features button."
                href="/#"
              >
                Features
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link link-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                title="This is Pricing button."
                href="/#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link link-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                title="This is FAQs button."
                href="/#"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link link-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                title="This is About button."
                href="/#"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
