import React from "react";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config";
import profileImg from '../assets/profile.png';

interface InfoItemProps {
  label: string;
  value: string | number; // Adjust according to the actual type of `value`
}

const AboutSection = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - config.careerStartYear;
  return (
    <div
      id="about"
      className="about section"
      style={{ backgroundColor: "#121212", color: "#E0E0E0" }}
    >
      <div className="container section-title">
        <h2>About</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
        Let’s explore a little bit about me. I’m a curious developer who enjoys turning complex problems into simple, elegant solutions.
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative">
            <div className="about-image">
              <img
                src={profileImg}
                alt="Profile"
                className="img-fluid rounded-4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <span className="subtitle">About Me</span>
              <h2>{config.role}</h2>
              <p className="lead mb-4">{config.bio}</p>
              <p className="mb-4">
                {config.description}
              </p>

              <div className="personal-info">
                <div className="row g-4">
                  <InfoItem label="Name" value={config.name} />
                  <InfoItem label="Phone" value={config.phone} />
                  <InfoItem label="Email" value={config.email} />
                  <InfoItem label="Work Experience" value={`${yearsOfExperience}+ Years`} />
                  <InfoItem label="Nationality" value={config.nationality} />
                  <InfoItem label="Location" value={config.location} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div className="col-6">
    <div className="info-item">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  </div>
);

export default AboutSection;
