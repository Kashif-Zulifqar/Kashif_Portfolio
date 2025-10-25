import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Code,
  Database,
  Brain,
  Server,
  Upload,
} from "lucide-react";
import "./App.css";
import logo from "./assets/logo.jpg";
import profile from "./assets/profile.jpg";
// Main Portfolio Component
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [logoImage, setLogoImage] = useState("/logo.png");

  const featuredProjects = [
    "WebEngineering_Semester_Project",
    "Tuition_Web_Frontend",
    "FoodApp_Frontend",
    "Kashif_mern_10pshine",
    "EAD_Final_Project",
    "GraphApp",
  ];
  useEffect(() => {
    fetch(
      "https://api.github.com/users/Kashif-Zulifqar/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        // Filter to show only your featured projects
        const featured = data
          .filter((repo) => featuredProjects.includes(repo.name))
          .sort((a, b) => {
            // Sort by the order in featuredProjects array
            return (
              featuredProjects.indexOf(a.name) -
              featuredProjects.indexOf(b.name)
            );
          });

        setRepos(featured);
        setLoading(false);

        // Debug: log fetched repos
        console.log(
          "Featured repos found:",
          featured.map((r) => r.name)
        );
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // const handleImageUpload = (e, type) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       if (type === "profile") {
  //         setProfileImage(reader.result);
  //       } else if (type === "logo") {
  //         setLogoImage(reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const skills = {
    frontend: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Vite", icon: "devicon-vite-original colored" },
    ],
    backend: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "REST APIs", icon: "devicon-fastapi-plain colored" },
    ],
    tools: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
    ],
    ai: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "Pandas", icon: "devicon-pandas-original colored" },
      { name: "NumPy", icon: "devicon-numpy-original colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
    ],
  };

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <img src={logo} alt="Logo" className="nav-logo" />
              <span className="nav-title">Kashif Zulifqar</span>
            </div>

            <div className="nav-menu-desktop">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${
                    activeSection === item.toLowerCase() ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="nav-actions">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="mobile-menu-link"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Image Upload Section */}
      {/* <div className="upload-panel">
        <p className="upload-title">Upload Images</p>
        <div className="upload-buttons">
          <label className="upload-btn">
            <Upload size={14} />
            Profile
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "profile")}
            />
          </label>
          <label className="upload-btn">
            <Upload size={14} />
            Logo
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "logo")}
            />
          </label>
        </div>
      </div> */}

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Kashif Zulifqar"
              className="hero-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400.png?text=Your+Photo";
              }}
            />
          </div>

          <h1 className="hero-title">Kashif Zulifqar</h1>
          <p className="hero-subtitle">
            Software Engineer | MERN Stack Developer | AI & ML Enthusiast
          </p>
          <p className="hero-description">
            Crafting elegant solutions through code and pushing the boundaries
            of web development
          </p>

          <div className="social-links">
            <a
              href="https://github.com/Kashif-Zulifqar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kashif-zulifqar-1856aa2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bhuttokashifali957@gmail.com"
              className="social-icon"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="cta-button"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              I'm a passionate software engineer and computer science student at{" "}
              <strong>Sukkur IBA University</strong>, with hands-on experience
              in full-stack web development using the MERN stack. I love
              building elegant, scalable applications that solve real-world
              problems.
            </p>
            <p className="about-text">
              My journey in tech has led me through exciting projects in web
              development, machine learning, and data science. I completed an
              internship at <strong>10Pearls</strong>, where I worked on
              real-time applications, authentication systems, and RESTful APIs
              using Node.js, Express.js, and MongoDB.
            </p>
            <p className="about-text">
              When I'm not coding, I'm exploring the latest trends in AI and
              machine learning, contributing to open-source projects, and
              continuously learning new technologies to stay at the forefront of
              software development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container-wide">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <SkillCard
              title="Frontend"
              icon={<Code />}
              skills={skills.frontend}
            />
            <SkillCard
              title="Backend"
              icon={<Server />}
              skills={skills.backend}
            />
            <SkillCard
              title="Tools"
              icon={<Database />}
              skills={skills.tools}
            />
            <SkillCard title="AI & ML" icon={<Brain />} skills={skills.ai} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container-wide">
          <h2 className="section-title">Featured Projects</h2>
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading projects from GitHub...</p>
            </div>
          ) : (
            <div className="projects-grid">
              {repos.length > 0 ? (
                repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
              ) : (
                <ManualProjects />
              )}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">
                  MERN Stack Developer Intern
                </h3>
                <p className="experience-company">10Pearls</p>
              </div>
              <span className="experience-date">2024</span>
            </div>
            <ul className="experience-list">
              <li>
                • Developed full-stack web applications using MongoDB,
                Express.js, React.js, and Node.js
              </li>
              <li>
                • Implemented user authentication and authorization systems with
                JWT
              </li>
              <li>
                • Built RESTful APIs for seamless frontend-backend communication
              </li>
              <li>• Created real-time features using WebSocket technology</li>
              <li>
                • Collaborated with cross-functional teams in an Agile
                environment
              </li>
            </ul>
          </div>

          <div className="education-card">
            <h3 className="education-title">Education</h3>
            <p className="education-degree">BS Computer Science</p>
            <p className="education-university">Sukkur IBA University</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:bhuttokashifali957@gmail.com"
              className="contact-btn primary"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/kashif-zulifqar-1856aa2b2"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn secondary"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Kashif Zulifqar. Built with React &
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h3 className="skill-title">{title}</h3>
      </div>

      <ul className="skill-list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill-item">
            {typeof skill === "string" ? (
              <>• {skill}</>
            ) : (
              <>
                <i
                  className={skill.icon}
                  style={{ marginRight: "8px", fontSize: "20px" }}
                ></i>
                {skill.name}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ repo }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{repo.name}</h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="project-description">
        {repo.description ||
          "A project showcasing full-stack development skills."}
      </p>
      <div className="project-tech">
        {repo.language && <span className="tech-tag">{repo.language}</span>}
      </div>
      <div className="project-stats">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🔀 {repo.forks_count}</span>
      </div>
    </div>
  );
}

function ManualProjects() {
  const projects = [
    {
      name: "Web Engineering Semester Project",
      description:
        "Frontend web development project showcasing modern web technologies and responsive design principles.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive"],
      link: "https://github.com/Kashif-Zulifqar/WebEngineering_Semester_Project",
    },
    {
      name: "Tuition Web Frontend",
      description:
        "Educational platform frontend with intuitive UI for managing tuition classes and student interactions.",
      tech: ["React", "CSS", "Frontend"],
      link: "https://github.com/Kashif-Zulifqar/Tuition_Web_Frontend",
    },
    {
      name: "Food App Frontend",
      description:
        "Modern food ordering application with beautiful UI/UX and seamless user experience.",
      tech: ["React", "CSS", "UI/UX"],
      link: "https://github.com/Kashif-Zulifqar/FoodApp_Frontend",
    },
    {
      name: "Note Taking App (MERN)",
      description:
        "Full-stack MERN application with user authentication, CRUD operations, and REST API integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/Kashif-Zulifqar/Kashif_mern_10pshine",
    },
    {
      name: "Disney Clone (MERN)",
      description:
        "Netflix-style streaming platform with user authentication, beautiful UI, and full MERN stack implementation.",
      tech: ["MERN", "Authentication", "UI/UX"],
      link: "https://github.com/Kashif-Zulifqar/EAD_Final_Project",
    },
    {
      name: "Graph App",
      description:
        "Full-stack application for data visualization and graph management with interactive features.",
      tech: ["MERN", "Data Viz", "Charts"],
      link: "https://github.com/Kashif-Zulifqar/GraphApp",
    },
  ];

  return projects.map((project, idx) => (
    <div key={idx} className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  ));
}
