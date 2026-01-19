import React, { useEffect } from "react";
import Collapse from "bootstrap/js/dist/collapse";
import "../Style.css";

const AboutAndContact = () => {
  useEffect(() => {
    const getEl = (id) => document.getElementById(id);

    const anyOpen = () =>
      getEl("about")?.classList.contains("show") ||
      getEl("contact")?.classList.contains("show");

    const closePanels = () => {
      const aboutEl = getEl("about");
      const contactEl = getEl("contact");

      if (aboutEl)
        Collapse.getOrCreateInstance(aboutEl, { toggle: false }).hide();
      if (contactEl)
        Collapse.getOrCreateInstance(contactEl, { toggle: false }).hide();
    };

    const onDocumentClick = (e) => {
      if (!anyOpen()) return;

      // ✅ allow navbar buttons to toggle normally (don’t close on them)
      if (e.target.closest('[data-bs-toggle="collapse"]')) return;

      // ✅ clicks inside cards do nothing
      if (e.target.closest(".info-and-about-content")) return;

      // ✅ everything else closes
      closePanels();
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  return (
    <div className="row d-none d-md-flex about-and-contact mx-auto justify-content-center justify-content-lg-start">
      <div className="col-md-7 col-lg-5 skills">
        <div className="collapse multi-collapse" id="about">
          <div className="card card-body text-start shadow bg-dark2-transparent bg-black info-and-about-content">
            <h3 className="text-danger ms-3">
              <strong>Technical Skills</strong>
            </h3>
            <div className="card-text">
              <ul className="list-unstyled bulletPoint">
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Languages:</span>
                  <span>HTML, CSS, Sass, JavaScript, TypeScript</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold frameworks">Frameworks:</span>
                  <span>
                    React, Angular, Svelte-kit (basic), Nuxt(basic), Bootstrap,
                    Tailwind CSS
                  </span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Design tools:</span>
                  <span>Figma, Webflow, MockFlow</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">CMS:</span>
                  <span>Squarespace</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Database(basic):</span>
                  <span>Firebase, SQL (MySQL, SSMS)</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Collaboration Tools:</span>
                  <span>Airtable, Confluence, Trello</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Cloud platforms:</span>
                  <span>Heroku, Netlify</span>
                </li>
                <li className="d-flex mt-1">
                  <span className="me-2 fw-bold">Version control systems:</span>
                  <span>Git, GitHub, GitLab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 col-lg-3 contact">
        <div className="collapse multi-collapse" id="contact">
          <div className="card card-body text-start shadow bg-dark2-transparent bg-black info-and-about-content">
            <h3 className="text-danger ms-3">
              <strong>Contact</strong>
            </h3>
            <div className="card-text">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-house text-danger me-1"></i> City: Liverpool
                </li>
                <li>
                  <i className="bi bi-signpost text-danger me-1"></i> Street: Front
                  End Developers St.
                </li>
                <li>
                  <i className="bi bi-telephone text-danger me-1"></i> Phone:
                  +447481184619
                </li>
                <li>
                  <i className="bi bi-envelope text-danger me-1"></i> Email:
                  ale1a184@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndContact;
