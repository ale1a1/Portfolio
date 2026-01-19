import React, { Fragment } from "react";
import "../Style.css";

const AboutAndContactOffCanvas = () => {
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-end bg-dark"
        id="aboutAndContact"
        tabIndex="-1"
        aria-labelledby="offcanvasAboutAndContactLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title text-danger">Info</h1>
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="card card-body text-start shadow bg-dark2-transparent border border-secondary mb-4">
            <h5 className="card-title text-danger text-center">Technical Skills</h5>
            <div className="card-text">
              <ul className="list-unstyled text-center mb-0">
                <li className="d-flex flex-column mt-2 mb-2">
                  <div className="text-decoration-underline">
                    Languages: 
                  </div>
                  <div className="">
                    HTML, CSS, Sass, JavaScript, TypeScript
                  </div>
                </li>
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Frameworks: 
                  </div>
                  <div className="">
                     React-Next.js, Angular, Svelte-kit, Vue3-Nuxt, jQuery, Bootstrap, Tailwind CSS
                  </div>
                </li> 
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Unit Testing: 
                  </div>
                  <div className="">
                    Jest, Vitest
                  </div>
                </li>         
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Design tools: 
                  </div>
                  <div className="">
                    Figma, Webflow, MockFlow
                  </div>
                </li>  
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    CMS:
                  </div>
                  <div className="">
                    Squarespace
                  </div>
                </li>              
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Database(basic): 
                  </div>
                  <div className="">
                    Firebase, SQL (MySQL, SSMS)
                  </div>
                </li>
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Collaboration Tools: 
                  </div>
                  <div className="">
                    Airtable, Confluence, Trello
                  </div>
                </li>           
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Cloud platforms: 
                  </div>
                  <div className="">
                    Heroku, Netlify
                  </div>
                </li>
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Version control systems: 
                  </div>
                  <div className="">
                    Git, GitHub, GitLab
                  </div>
                </li>   
                <li className="d-flex flex-column mb-2">
                  <div className="text-decoration-underline">
                    Methodologies: 
                  </div>
                  <div className="">
                    AgilePM
                  </div>
                </li>              
              </ul>
            </div>
          </div>
          <div className="card card-body text-start shadow bg-dark2-transparent border border-secondary">
            <h5 className="card-title text-danger ">Contact</h5>
            <div className="card-text">
              <ul className="list-unstyled ms-2">
                <li>
                  <i className="bi bi-house me-2 text-danger"></i> City: Liverpool
                </li>
                <li>
                  <i className="bi bi-signpost me-2 text-danger"></i> Street: Front End Developers Street
                </li>
                <li>
                  <i className="bi bi-telephone me-2 text-danger"></i> Phone: +447481184619
                </li>
                <li>
                  <i className="bi bi-envelope me-2 text-danger"></i> Email: ale1a184@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutAndContactOffCanvas;
