import React from "react";
import Collapse from "bootstrap/js/dist/collapse";
import "../Style.css";

const Navigation = () => {
  const getEl = (id) => document.getElementById(id);

  const bs = (id) => {
    const el = getEl(id);
    if (!el) return null;
    return Collapse.getOrCreateInstance(el, { toggle: false });
  };

  const toggleAbout = () => bs("about")?.toggle();
  const toggleContact = () => bs("contact")?.toggle();

  const toggleInfo = () => {
    // "Info" toggles both
    bs("about")?.toggle();
    bs("contact")?.toggle();
  };

  return (
    <nav className="navbar-expand-md navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          <span className="badge bg-danger shadow">Alessandro Ladu</span>
        </a>

        <button
          className="navbar-toggler navbarToggler bg-dark-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3" id="navbarMain">
          <ul className="navbar-nav align-items-end">
            {/* DESKTOP BUTTONS */}
            <li className="nav-item">
              <button
                type="button"
                data-aac-btn="info"
                onClick={toggleInfo}
                className="nav-link btn btn-sm btn-outline-dark text-white mb-1 btn-success d-none d-md-block"
              >
                Info
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                data-aac-btn="about"
                onClick={toggleAbout}
                className="nav-link btn btn-sm btn-outline-dark text-dark m-1 btn-light d-none d-md-block about-navTab-md"
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                data-aac-btn="contact"
                onClick={toggleContact}
                className="nav-link btn btn-sm btn-outline-dark text-white mb-1 btn-danger d-none d-md-block"
              >
                Contact
              </button>
            </li>

            {/* MOBILE (unchanged, but fix class -> className) */}
            <div className="mt-5 row d-md-none">
              <ul className="navbar-nav justify-content-end mobile-nav-bar-ul">
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-warning bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#email"
                    aria-controls="email"
                  >
                    <i className="bi bi-envelope-open"></i>
                  </button>
                </li>
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-success text-uppercase bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#aboutAndContact"
                    aria-controls="aboutAndContact"
                  >
                    info
                  </button>
                </li>
                <li className="nav-item text-end mt-2">
                  <button
                    className="btn btn-outline-danger text-uppercase bg-dark2-transparent"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#portfolio"
                    aria-controls="portfolio"
                  >
                    portfolio
                  </button>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
