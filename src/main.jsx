import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Mail, Phone, MapPin, ExternalLink,
  Code2, Database, GraduationCap
} from "lucide-react";
import "./styles.css";
import { FaGithub } from "react-icons/fa";

const skills = [
  "Java", "JavaScript", "HTML", "CSS", "React.js",
  "Spring Boot", "REST APIs", "MySQL", "Git", "GitHub",
  "Postman", "VS Code", "IntelliJ","Python (Basics)","Django (Beginner)"
];

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Agnextgen Technologies – Cadpoint Authorized Training Centre",
    period: "Jun 2026 – Sep 2026",
    location: "Nagercoil, Tamil Nadu",
    points: [
      "Gained hands-on exposure to software development and industry practices.",
      "Contributed to software development activities using programming and web development technologies."
    ]
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "Feather Softwares",
    period: "Jan 2026 – Apr 2026",
    location: "Nagercoil, Tamil Nadu",
    points: [
      "Trained in end-to-end full stack development using Java, Spring Boot, React.js, and MySQL under a senior mentor.",
      "Built REST APIs for user, volunteer, and organization modules.",
      "Integrated JWT authentication into the application."
    ]
  }
];

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#home">Libi<span>.</span></a>
          <nav>
            {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item}`}>{item}</a>
            ))}
          </nav>
          <a className="nav-btn" href="mailto:libisha9704@gmail.com">Let's talk <ArrowUpRight size={16}/></a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">INFORMATION TECHNOLOGY GRADUATE</p>
            <h1>Hi, I'm <span>Libisha.</span><br/>Java Full Stack Developer.</h1>
            <p className="hero-text">
              Motivated and curious software developer with hands-on experience in
              Java, Spring Boot, React.js, REST APIs, and MySQL.
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo("projects")} className="primary-btn">View my work <ArrowUpRight size={18}/></button>
              <a href="mailto:libisha9704@gmail.com" className="secondary-btn">Contact me <Mail size={17}/></a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/libisha-s" target="_blank" rel="noreferrer">
   <FaGithub size={18} /> github.com/libisha-s
</a>
              <a href="mailto:libisha9704@gmail.com"><Mail size={18}/> libisha9704@gmail.com</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="code-window">
              <div className="dots"><i></i><i></i><i></i></div>
              <pre>{`class Developer {
  String name = "Libisha S";
  String role = "Java Full Stack";

  String[] stack = {
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL"
  };

  void build() {
    learn();
    solve();
    create();
  }
}`}</pre>
            </div>
          </div>
        </section>

        <section id="About" className="section">
          <div className="section-heading"><p className="eyebrow">01 — ABOUT</p><h2>Building with curiosity,<br/><span>learning with purpose.</span></h2></div>
          <div className="about-grid">
            <p className="large-copy">I'm an Information Technology graduate interested in software development, problem-solving, debugging, and learning new technologies.</p>
            <div className="about-card">
              <Code2 size={28}/>
              <h3>Developer mindset</h3>
              <p>I enjoy turning concepts into practical applications and continuously improving my development skills.</p>
            </div>
            <div className="about-card">
              <Database size={28}/>
              <h3>Full-stack foundation</h3>
              <p>My current foundation covers Java backend development, REST APIs, React.js frontend development, and MySQL.</p>
            </div>
          </div>
        </section>

        <section id="Education" className="section soft">
          <div className="section-heading"><p className="eyebrow">02 — EDUCATION</p><h2>My academic <span>journey.</span></h2></div>
          <div className="education-list">
            <article className="edu-card main-edu">
              <div className="edu-icon"><GraduationCap/></div>
              <div><span className="tag">2022 - 2026</span><h3>B.Tech Information Technology</h3><p>University College of Engineering Nagercoil</p><strong>CGPA: 8.56</strong></div>
            </article>
            <article className="edu-card">
              <div className="edu-icon"><GraduationCap/></div>
              <div><span className="tag">HSC</span><h3>Higher Secondary Certificate</h3><p>Mother Theresa Matric Hr Sec School</p><strong>512 / 600</strong></div>
            </article>
            <article className="edu-card">
              <div className="edu-icon"><GraduationCap/></div>
              <div><span className="tag">SSLC</span><h3>Secondary School Leaving Certificate</h3><p>Mother Theresa Matric Hr Sec School</p><strong>462 / 500</strong></div>
            </article>
          </div>
        </section>

        <section id="Experience" className="section">
          <div className="section-heading"><p className="eyebrow">03 — EXPERIENCE</p><h2>Where I've <span>worked.</span></h2></div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article className="experience-card" key={exp.role}>
                <div className="timeline-dot"></div>
                <div className="exp-top"><span className="tag">{exp.period}</span><span className="location"><MapPin size={14}/>{exp.location}</span></div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>{exp.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="Skills" className="section soft">
          <div className="section-heading"><p className="eyebrow">04 — SKILLS</p><h2>My technical <span>toolkit.</span></h2></div>
          <div className="skills-wrap">
            {skills.map((skill) => <div className="skill-pill" key={skill}>{skill}</div>)}
          </div>
          <div className="skill-groups">
            <div><h3>Programming</h3><p>Java · JavaScript · Python</p></div>
            <div><h3>Frontend</h3><p>HTML · CSS · React.js</p></div>
            <div><h3>Backend</h3><p>Spring Boot · REST API Development</p></div>
            <div><h3>Database & Tools</h3><p>MySQL · Git · GitHub · Postman · VS Code · IntelliJ</p></div>
          </div>
        </section>

        <section id="Projects" className="section">
          <div className="section-heading"><p className="eyebrow">05 — PROJECT</p><h2>A project I'm <span>proud of.</span></h2></div>
          <article className="project-card">
            <div className="project-number">01</div>
            <div className="project-content">
              <div className="project-meta">FULL STACK WEB APPLICATION</div>
              <h3>Volunteer Management System <span>(V-Serve)</span></h3>
              <p>Developed a full-stack Volunteer Management System using React and Spring Boot, with role-based authentication for User, Volunteer, and Organization roles.</p>
              <div className="project-tags"><span>React</span><span>Spring Boot</span><span>REST API</span><span>MySQL</span><span>JWT</span></div>
              <a className="project-link" href="https://github.com/libisha-s/volunteer-management-system-backend" target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={17}/></a>
            </div>
          </article>
          <div className="courses">
            <h3>Courses & Training</h3>
            <div className="course-grid">
              <div>AI/ML Course <small>Besant Technologies</small></div>
              <div>Web Development <small>Network Solutions</small></div>
              <div>Java Full Stack Development <small>Feather Softwares</small></div>
            </div>
          </div>
        </section>

        <section id="Contact" className="contact section">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>Let's build something<br/><span>useful together.</span></h2>
          <p>I'm open to software development and Java Full Stack opportunities where I can learn, contribute, and grow.</p>
          <div className="contact-links">
            <a href="mailto:libisha9704@gmail.com"><Mail/><span>Email<small>libisha9704@gmail.com</small></span></a>
            <a href="tel:8608041523"><Phone/><span>Phone<small>8608041523</small></span></a>
            <a href="https://github.com/libisha-s" target="_blank" rel="noreferrer">
  <FaGithub size={18} />
  <span>GitHub<small>github.com/libisha-s</small></span>
</a>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Libisha S</span><span>Designed & built with React</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
