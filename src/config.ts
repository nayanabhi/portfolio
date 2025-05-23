export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
}

export interface Projects {
  title: string;
  desc: string;
  github?: string;
  frontend?: string;
  backend?: string;
  techStack: string[];
}

export interface PortfolioConfig {
  name: string;
  location: string;
  nationality: string;
  description: string;
  constestParticipation: number;
  featuresIntegration: number;
  careerStartYear: number;
  phone: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  skills: string[];
  photoUrl: string;
  educationData: EducationItem[];
  experience: Experience[];
  platforms: Platforms[];
  projects: Projects[];
}

export interface Platforms {
  platform: string;
  link: string;
}

const config: PortfolioConfig = {
  name: "Nayan Abhishek",
  nationality: "Indian",
  description: "I believe in clean code, continuous learning, and working collaboratively to deliver real value. Ownership, attention to detail, and pragmatism guide my work. My goal is to contribute to impactful products that improve lives and solve real-world problems using modern technology and thoughtful design.",
  constestParticipation: 100,
  featuresIntegration: 20,
  location: "Hyderabad",
  careerStartYear: 2024,
  phone: "9815073566",
  role: "Software Engineer",
  bio: "Passionate Software Developer who loves building clean and scalable applications.",
  github: "https://github.com/nayanabhi",
  linkedin: "https://www.linkedin.com/in/nayan-abhishek/",
  email: "nayanabhishek710@gmail.com",
  skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  photoUrl: "/profile.png",
  educationData: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "National Institute of Technology Jalandhar",
      period: "2020 - 2024",
      description: "Developed a strong foundation in computer science and software development, participating in various coding competitions and hackathons.",
      details: [
        "Key Courses: Data Structures, Algorithms, Object-Oriented Programming",
        "GPA: 8.33 / 10",
        "Developed a solid understanding of computer science fundamentals, including problem-solving and system design.",
        "Participated in various hackathons and coding competitions, enhancing practical programming and teamwork skills."
      ],
    },
    {
      degree: "12th Grade",
      institution: "Manu Vatika School",
      period: "2019-2020",
      description: "Excelled in CBSE board exams with a focus on Mathematics and Science, establishing a strong academic record.",
      details: [
        "CBSE Board",
        "96%",
        "Focused on subjects like Mathematics and Science, which sparked my interest in technology and software development.",
        "Ranked in the top 5% of my class, demonstrating strong academic performance and a passion for learning."
      ],
    },
    {
      degree: "10th Grade",
      institution: "MS Memorial Public School",
      period: "2017-2018",
      description: "Excelled in subjects such as Mathematics and Science, forming the foundation of my analytical and problem-solving abilities.",
      details: [
        "CBSE Board",
        "87.2%",
        "Excelled in subjects such as Mathematics and Science, forming the foundation of my analytical and problem-solving abilities.",
        "Participated in various extracurricular activities, including quiz competitions and science fairs."
      ],
    },
  ],
  experience: [
    {
      company: "Ensuredit",
      role: "Software Engineer",
      period: "June 2024 – Present",
      location: "Hyderabad, India",
      description:
        "Contributing to the development and maintenance of a large-scale monolithic platform in the insurtech domain.  Played a key role in optimizing critical business flows, integrating third-party services, and automating backend processes. Actively collaborated with cross-functional teams to ship production-ready features and improve internal tooling and deployment workflows.",
    },
    {
      company: "Ensuredit",
      role: "Software Engineer Intern",
      period: "Jan 2024 – May 2024",
      location: "Hyderabad, India",
      description:
        "Developed robust, reusable backend APIs designed for broad integration across multiple frontends. Implemented rate limiting, Redis-based caching, and monitoring to ensure scalability, performance, and observability in a distributed system.",
    },
    {
      company: "Ensuredit",
      role: "Software Engineer Intern",
      period: "June 2023 – August 2023",
      location: "Gurgaon, India",
      description:
        "Worked on a new greenfield application that contributed to a 150% boost in company revenue. Focused on backend service development and deployment automation within a microservices ecosystem.",
    },
  ],
  platforms: [
    {
      platform: "Leetcode",
      link: "https://leetcode.com/u/nayan_abhi",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/nayanabhishek710",
    },
    {
      platform: "Codechef",
      link: "https://www.codechef.com/users/nayan_abhi",
    },
    {
      platform: "Atcoder",
      link: "https://atcoder.jp/users/nayan_abhi",
    },
    {
      platform: "Codeforces",
      link: "https://codeforces.com/profile/nayan_abhi",
    },
  ],
  projects: [
    {
      title: "URL Shortener",
      desc: "A simple service to shorten URLs and track clicks.",
      frontend: "https://github.com/nayanabhi/URL-Shortener-Frontend",
      backend: "https://github.com/nayanabhi/URL-Shortener-Backend",
      techStack: ["NestJS", "NextJS", "Redis", "PostgreSQL"],
    },
    {
      title: "Dynamic Portfolio Generator",
      desc: "This very portfolio where users can view a dynamic, component-based resume.",
      frontend: "https://github.com/nayanabhi/portfolio",
      techStack: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app supporting private and group messaging.",
      frontend: "https://github.com/nayanabhi/chat-frontend",
      backend: "https://github.com/nayanabhi/chat-backend",
      techStack: ["Next.js", "NestJS", "WebSocket", "REST API", "PostgreSQL"],
    },
    {
      title: "Super Mart Platform",
      desc: "Multi-vendor platform where sellers list item prices and users compare them.",
      frontend: "https://github.com/nayanabhi/Supermart-Frontend",
      backend: "https://github.com/nayanabhi/Supermart-Backend",
      techStack: ["Next.js", "NestJS", "REST API", "PostgreSQL"],
    },
    {
      title: "Android Board Game",
      desc: "An Android board game with local multiplayer functionality.",
      github: "https://github.com/nayanabhi/Splash-Colors",
      techStack: ["Kotlin", "Android SDK"],
    },
  ],
};

export default config;
