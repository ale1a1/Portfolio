import React, { Fragment } from "react";
// import AboutAndContact from "./AboutAndContact";
import "../Style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed-top mt-1 mt-md-5 pt-md-5 headerSection d-lg-flex flex-lg-column">
        {/* //////////////////// Display only on screens >= md //////////////////////////  */}
        <div class="d-none d-md-flex justify-content-between mt-3 mx-3 d-lg-flex flex-lg-column mt-lg-1 me-lg-5">
          <div className="me-lg-auto">
            <h1 className="display-2 bg-grey-transparent shadow rounded p-2 ms-2 ms-lg-5">
              I am <span className="badge bg-secondary">Alex</span>
            </h1>
          </div>
          <div class="mt-5 d-flex flex-column flex-lg-row me-3 ms-lg-auto front-end-dev">
            <h2 className="display-4 bg-grey-transparent shadow rounded p-1 p-lg-2 me-5 mb-3 me-lg-0 mb-lg-0 front-end">
            Front End
            </h2>
            <h2 className="display-4 bg-grey-transparent shadow rounded p-1 p-lg-2 text-center ms-5 ms-lg-0 mb-lg-0 developer">
            Developer 
            </h2>
          </div>
        </div>
        <div className="d-none d-md-flex flex-column flex-lg-row mt-1 pt-0 ms-lg-auto mt-lg-5 me-lg-3 pt-lg-5 header-buttons">
          <button
            className="btn btn-lg btn-outline-warning bg-dark2-transparent col-1 col-lg-auto ms-4 mt-2 mb-2 header-button-email mb-lg-0 ms-lg-0 mt-lg-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#email"
            aria-controls="email"
          >
            <i className="bi bi-envelope-open"></i>
          </button>
          <button
            className="btn btn-lg btn-outline-danger text-uppercase fw-bold bg-dark2-transparent col-2 col-lg-auto ms-4 mt-5 mt-lg-0 ms-lg-2 mt-lg-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#portfolio"
            aria-controls="portfolio"
          >
            portfolio
          </button>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <h2 className="mt-5 mx-4 rounded display-3 text-center bg-secondary d-md-none">
          Front End Developer
        </h2>
        {/* <AboutAndContact /> */}
      </header>
    </Fragment>
  );
};

export default Header;
