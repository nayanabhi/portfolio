import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config"

const HeroSection = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - config.careerStartYear;
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="main"
      style={{ backgroundColor: "#121212", color: "#ffffff" }}
    >
      <div id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h2>Building Scalable Software with Purpose</h2>
              <p className="lead">
                Turning complex challenges into efficient, maintainable code
                through thoughtful design and clean development practices
              </p>
              <div
                className="cta-buttons"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="#portfolio" className="btn btn-primary">
                  Explore My Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1XuwHFGmuYfPWGnPtdM819DgmMNviyFyk/view"
                  className="btn btn-outline"
                  target="_blank"
                >
                  View My Resume
                </a>
              </div>
              <div
                className="hero-stats"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="stat-item">
                  <span className="stat-number">{yearsOfExperience}+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{config.featuresIntegration}+</span>
                  <span className="stat-label">Features Integration</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{config.constestParticipation}+</span>
                  <span className="stat-label">
                  Contests Participated
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ball-container">
                <div className="crystal-ball top-left"></div>
                <div className="crystal-ball top-right"></div>
                <div className="crystal-ball bottom-left"></div>
                <div className="crystal-ball bottom-right"></div>
                {/* <div className="rotating-star"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
