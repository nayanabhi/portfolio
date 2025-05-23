import React from "react";
import config from "../config";

const Footer = () => {
  return (
    <div
      id="footer"
      className="footer"
      style={{ backgroundColor: "#121212", color: "#ffffff" }}
    >
      <div className="container">
        {/* Copyright Section */}
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>
            {""}
            <strong className="px-1 sitename">{config.name}.</strong>
            {""}
            <span>All Rights Reserved</span>
          </p>
        </div>

        {/* Social Links Section */}
        <div className="social-links d-flex justify-content-center">
          <a href={config.github} target="_blank" className="github">
            <i className="bi bi-github"></i>
          </a>
          <a href={config.linkedin} target="_blank" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={`mailto:${config.email}`} target="_blank" className="email">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
