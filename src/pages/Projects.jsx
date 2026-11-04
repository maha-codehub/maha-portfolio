
import SectionHeading from "../components/SectionHeading.jsx";

const projects = [
  {
    number: "01",
    type: "LIVE WEBSITE · REAL-WORLD DEVELOPMENT",
    title: "ACGCET Website & PJC Fund Management",
    summary:
      "Maintained and enhanced the official college website, academic modules, and PJC Fund Management system.",
    highlights: [
      {
        title: "Fund Management",
        text: "Alumni and non-alumni dashboards with payment tracking, installments, and admin approvals.",
      },
      {
        title: "Academic Modules",
        text: "Result publication for 1,000+ students, IQAC filtering, events, and bulletins.",
      },
      {
        title: "Performance",
        text: "Data fetching and caching using TanStack Query.",
      },
      {
        title: "Deployment",
        text: "AWS Lightsail, S3, SES, CloudFront, and GitHub Actions CI/CD.",
      },
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "TanStack Query",
      "AWS",
      "GitHub Actions",
    ],
    liveLink: "https://accet.ac.in",
    githubLink: "",
  },

  {
    number: "02",
    type: "ALUMNI & STUDENT NETWORKING",
    title: "ACCET Connect",
    summary:
      "A networking platform connecting students and alumni for mentorship, professional connections, and career opportunities.",
    highlights: [
      {
        title: "Role-Based Access",
        text: "Separate dashboards for students, alumni, and administrators.",
      },
      {
        title: "Networking",
        text: "Profile management and connection requests.",
      },
      {
        title: "Career Opportunities",
        text: "Job and internship sharing within the college community.",
      },
      {
        title: "Administration",
        text: "Communication and platform management workflows.",
      },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    liveLink: "",
    githubLink: "https://github.com/ranjith-ran04/ACCET-CONNECT",
  },

  // {
  //   number: "03",
  //   type: "AGRICULTURAL E-COMMERCE",
  //   title: "Farmer-to-Consumer Marketplace",
  //   summary:
  //     "A full-stack marketplace connecting farmers directly with consumers and simplifying agricultural product sales.",
  //   highlights: [
  //     {
  //       title: "Farmer Management",
  //       text: "Registration, profiles, product listings, and stock updates.",
  //     },
  //     {
  //       title: "Product Management",
  //       text: "Product images, descriptions, pricing, and quantity management.",
  //     },
  //     {
  //       title: "Consumer Experience",
  //       text: "Product browsing, shopping cart, and purchasing workflows.",
  //     },
  //     {
  //       title: "Notifications",
  //       text: "Email communication using Nodemailer.",
  //     },
  //   ],
  //   stack: [
  //     "React.js",
  //     "Node.js",
  //     "Express.js",
  //     "MySQL",
  //     "Nodemailer",
  //   ],
  //   liveLink: "",
  //   githubLink: "https://github.com/maha-codehub/ecommerce-website/",
  // },

  {
    number: "03",
    type: "AI · INTERVIEW PREPARATION",
    title: "MockMate – AI Mock Interview Platform",
    summary:
      "An AI-powered interview platform for aptitude, technical, HR, and voice-based mock interviews.",
    highlights: [
      {
  title: "LLM Integration",
  text: "Generates questions, evaluates answers, and asks follow-up questions.",
},
{
  title: "RAG",
  text: "Retrieves relevant study materials to support interview preparation.",
},
{
  title: "Multiple Interview Modes",
  text: "Supports aptitude, technical, HR, and voice-based mock interviews.",
},
{
  title: "Personalized Feedback",
  text: "Provides AI-driven feedback to help improve interview performance.",
},
    ],
    stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "LLM APIs",
      "RAG",
    ],
    liveLink: "",
    githubLink: "",
  },

  {
    number: "04",
    type: "CYBERSECURITY · REAL-TIME DEEPFAKE DETECTION",
    title: "VoiceGuard AI – Voice Deepfake Detection",
    summary:
      "A real-time system that detects AI-cloned voices during live calls using a CNN trained on Mel-spectrograms.",
    highlights: [
     {
    title: "Live Audio Streaming",
    text: "Streams call audio through WebSockets for real-time analysis.",
  },
  {
    title: "Risk Monitoring",
    text: "Logs each call's risk score and detection status.",
  },
  {
    title: "Mel-Spectrogram Extraction",
    text: "Converts audio signals into Mel-spectrograms for feature analysis.",
  },
  {
    title: "CNN-Based Detection",
    text: "Uses a CNN model to classify audio as real or potentially AI-generated.",
  },
    ],
    stack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "WebSockets",
      "MongoDB",
    ],
    liveLink: "",
    githubLink: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell section-pad section-muted"
    >
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects that solve problems."
          description="Practical applications across full-stack development, artificial intelligence, and cybersecurity."
        />

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card card-surface"
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <div className="project-type">
                  {project.type}
                </div>

                <h3>{project.title}</h3>

                <p className="project-summary">
                  {project.summary}
                </p>

                <h4>Key Features & Contributions</h4>

                <ul className="project-highlights">
                  {project.highlights.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <span>Visit Live Website</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button project-github-button"
                    >
                      <span>GitHub Repository</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
