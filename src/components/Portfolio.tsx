import "aos/dist/aos.css";
import config from "../config";
import "../assets/css/main.css";
import "glightbox/dist/css/glightbox.css";
import {
  BsGithub,
} from "react-icons/bs";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="portfolio section"
      style={{ backgroundColor: "#121212", color: "#ffffff" }}
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
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
          Here are some of the projects I’ve worked on, showcasing my skills in building practical and impactful solutions.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="row g-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {config.projects.map((item, index) => (
              <div
                className={`col-lg-6 col-md-6 portfolio-item isotope-item`}
                key={index}
              >
                <div className="portfolio-card bg-zinc-900 rounded-xl p-4 text-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.desc}</p>

                  {item.techStack && (
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Tech Stack:</strong> {item.techStack.join(", ")}
                    </p>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "2px",
                        textDecoration: "underline",
                        color: "#008080",
                      }}
                    >
                      <BsGithub size={20} className="relative -top-[2px]" />
                      <span className="ml-2">View on GitHub</span>
                    </a>
                  )}

                  {(item.frontend || item.backend) && (
                    <div className="flex flex-col space-y-2 mt-4">
                      {item.frontend && (
                        <a
                          href={item.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "8px",
                            gap: "2px",
                            textDecoration: "underline",
                            color: "#008080",
                          }}
                        >
                          <BsGithub size={20} />
                          Frontend Code
                        </a>
                      )}
                      {item.backend && (
                        <a
                          href={item.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "2px",
                            textDecoration: "underline",
                            color: "#008080",
                          }}
                        >
                          <BsGithub size={20} />
                          Backend Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
