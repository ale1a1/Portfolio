import React, { Fragment } from "react";
import "../Style.css";

const EmailOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-end bg-dark email"
        tabIndex="-1"
        id="email"
        aria-labelledby="offcanvasEmaillabel"        
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title ms-1 text-danger" id="offcanvasEmaillabel">
            Email me!
          </h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mt-md-5 mt-lg-0 email-body">
          <form
            className="border border-secondary rounded px-3 py-4 bg-dark2-transparent"
            action="https://formsubmit.co/ale1a1@libero.it"         
            method="POST"
          >
            <div className="row">
              <div className="col col-lg-6">
                <input
                  type="text"
                  name="First name"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col col-lg-6">
                <input
                  type="text"
                  name="Second name"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div>
              <div className="col-lg-12 row-sm mt-3 mt-md-4">
                <input
                  type="email"
                  name="Email address"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="email"
                  required
                />
              </div>
              <div className="col mt-3 mt-md-4">
                <textarea
                  type="text"
                  name="message"
                  className="w-100 p-2"
                  rows="14"
                  placeholder="Write a message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-1">
              <button
                type="submit"
                className="btn btn-outline-danger mt-3 mt-md-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailOffCanvas;
