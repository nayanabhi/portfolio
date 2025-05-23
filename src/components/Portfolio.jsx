// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import "../assets/css/main.css"

// // Replace Image with regular <img> tag
// const portfolioData = [
//   {
//     id: 1,
//     title: "Modern Dashboard Interface",
//     category: "Web Design",
//     image: "/assets/img/portfolio/portfolio-1.webp",
//     filter: "web",
//   },
//   {
//     id: 2,
//     title: "Creative Brand Identity",
//     category: "Graphics",
//     image: "/assets/img/portfolio/portfolio-10.webp",
//     filter: "graphics",
//   },
//   {
//     id: 3,
//     title: "Product Animation Reel",
//     category: "Motion",
//     image: "/assets/img/portfolio/portfolio-7.webp",
//     filter: "motion",
//   },
//   {
//     id: 4,
//     title: "Luxury Brand Package",
//     category: "Branding",
//     image: "/assets/img/portfolio/portfolio-4.webp",
//     filter: "brand",
//   },
//   {
//     id: 5,
//     title: "E-commerce Platform",
//     category: "Web Design",
//     image: "/assets/img/portfolio/portfolio-2.webp",
//     filter: "web",
//   },
//   {
//     id: 6,
//     title: "Digital Art Collection",
//     category: "Graphics",
//     image: "/assets/img/portfolio/portfolio-11.webp",
//     filter: "graphics",
//   },
// ];

// const filters = [
//   { label: "All Work", value: "*" },
//   { label: "Web Design", value: "web" },
//   { label: "Graphics", value: "graphics" },
//   { label: "Motion", value: "motion" },
//   { label: "Branding", value: "brand" },
// ];

// export default function PortfolioSection() {
//   const [activeFilter, setActiveFilter] = useState("*");

//   const filteredData =
//     activeFilter === "*"
//       ? portfolioData
//       : portfolioData.filter((item) => item.filter === activeFilter);

//   return (
//     <section id="portfolio" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
//           <div className="flex justify-center mb-4">
//             <svg
//               viewBox="0 0 200 20"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-48 text-primary"
//             >
//               <path
//                 d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               />
//             </svg>
//           </div>
//           <p className="max-w-2xl mx-auto text-muted-foreground">
//             Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//             quam nihil molestiae consequatur vel illum qui dolorem
//           </p>
//         </motion.div>

//         <motion.ul
//           className="flex flex-wrap justify-center gap-4 mb-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {filters.map((filter) => (
//             <li key={filter.value}>
//               {/* Using a simple button */}
//               <button
//                 className={`px-4 py-2 rounded-lg transition duration-300 ${
//                   activeFilter === filter.value
//                     ? "bg-primary text-white"
//                     : "bg-transparent border-2 border-primary"
//                 }`}
//                 onClick={() => setActiveFilter(filter.value)}
//               >
//                 {filter.label}
//               </button>
//             </li>
//           ))}
//         </motion.ul>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.15,
//               },
//             },
//           }}
//         >
//           {filteredData.map((item) => (
//             <motion.div
//               key={item.id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <div className="group overflow-hidden rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
//                 <div className="relative overflow-hidden">
//                   {/* Replaced Next.js Image with regular img */}
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     width={800}
//                     height={500}
//                     className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
//                     <a
//                       href={item.image}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white text-xl"
//                     >
//                       <i className="bi bi-eye" />
//                     </a>
//                     <a href="/portfolio-details" className="text-white text-xl">
//                       <i className="bi bi-arrow-right" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <span className="text-sm text-muted-foreground uppercase">
//                     {item.category}
//                   </span>
//                   <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     {/* Add descriptions from original HTML if needed */}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import "aos/dist/aos.css";
import config from "../config";
import "../assets/css/main.css";
import "glightbox/dist/css/glightbox.css";
import {
  BsEye,
  BsArrowRight,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
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
                className={`col-lg-6 col-md-6 portfolio-item isotope-item ${item.filterClass}`}
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
