import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import config from "../config";

const PortfolioHeader = () => {
  return (
    <div className="index-page" style={{ backgroundColor: "#121212", color: "#ffffff" }}>
      <div id="header" className="header d-flex align-items-center sticky-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
            style={{ color: '#008080' }}
          >
            <h1 className="sitename">{config.name}</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#coding-profiles">Profile</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <a href={`mailto:${config.email}`} target="_blank" className="email">
              <i className="bi bi-envelope-fill fs-4"></i>
            </a>
            <a href={config.github} target="_blank" className="github">
              <i className="bi bi-github fs-4"></i>
            </a>
            <a href={config.linkedin} target="_blank" className="linkedin">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
