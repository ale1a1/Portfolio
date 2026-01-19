import React from "react";
import "../Style.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark2-transparent">
      <div className="h-100 d-flex align-items-center justify-content-between mt-1 mx-lg-3">
        <p className="ms-4 text-white-50 d-md-none mt-1">
          <em>ALW Media </em>
        </p>
        <p className="ms-4 d-none text-white-50 d-md-flex mt-1">          
          <span>
            “Creativity is nothing but the way to solve new problems...”
          </span>
        </p>       
        <ul className="list-unstyled d-flex me-4 mt-1">
          <li className="mx-2 mx-lg-4">
            <a href="https://www.instagram.com" title="Instagram" target="blank">
              <i className="bi bi-instagram text-white-50 icon-hover"></i>
            </a>
          </li>
          <li className="mx-2 mx-lg-4">
            <a href="https://www.linkedin.com/in/alessandro-ladu-69196a239/" title="Linkedin" target="blank">
              <i className="bi bi-linkedin text-white-50 icon-hover"></i>
            </a>
          </li>
          <li className="mx-2 mx-lg-4">
            <a href="https://github.com/ale1a1" title="GitHub" target="blank">
              <i className="bi bi-github text-white-50 icon-hover"></i>
            </a>
          </li>
          <li className="mx-2 mx-lg-4">
            <a href="https://www.youtube.com/" title="Youtube" target="blank">
              <i className="bi bi-youtube text-white-50 icon-hover"></i>
            </a>
          </li>         
          <li className="mx-2 mx-lg-4">
            <a href="https://www.twitch.tv/" title="Twitch" target="blank">
              <i className="bi bi-twitch text-white-50 footerIcon icon-hover"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
