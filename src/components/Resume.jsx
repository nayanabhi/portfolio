import React from "react";
import config from "../config";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Resume = () => {
  const educationData = config.educationData;
  const experienceData = config.experience;
  return (
    <section id="resume" className="resume section" style={{ backgroundColor: "#121212", color: "#ffffff" }}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p>
        Take a look at my resume to learn more about my experience, skills, and the impact I’ve made in the tech industry.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div className="resume-wrapper">
              {/* Work Experience */}
              <div className="resume-block" data-aos="fade-up">
                <h2>Work Experience</h2>
                <p className="lead">
                Explore my professional journey, where I’ve contributed to impactful projects and collaborated with talented teams to deliver innovative solutions.
                </p>

                <div className="timeline">
                  {experienceData.map((item, index) => (
                    <div
                      className="timeline-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="timeline-left">
                        <h4 className="company">{item.company}</h4>
                        <span className="period">{item.period}</span>
                      </div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-right">
                        <h3 className="position">{item.role}</h3>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div
                className="resume-block"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2>Education</h2>
                <p className="lead">
                Discover my academic background, where I developed a strong foundation in key technical areas and honed my problem-solving skills.
                </p>

                <div className="timeline">
                  {educationData.map((item, index) => (
                    <div
                      className="timeline-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="timeline-left">
                        <h4 className="company">{item.institution}</h4>
                        <span className="period">{item.period}</span>
                      </div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-right">
                        <h3 className="position">{item.degree}</h3>
                        <p className="description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
