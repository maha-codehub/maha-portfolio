
import SectionHeading from "../components/SectionHeading.jsx";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaServer,
  FaTools,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiC,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";

import { VscTerminal } from "react-icons/vsc";
import { MdEmail, MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";

const groups = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      // { name: "C", icon: <SiC /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      // { name: "REST APIs", icon: <FaServer /> },
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  // {
  //   icon: <FaTools />,
  //   title: "Libraries & State Management",
  //   items: [
  //     { name: "TanStack Query", icon: <FaReact /> },
  //   ],
  // },
  {
    icon: <FaAws />,
    title: "Cloud Services",
    items: [
      { name: "AWS Lightsail", icon: <FaServer /> },
      { name: "Amazon S3", icon: <MdStorage /> },
      { name: "Amazon SES", icon: <MdEmail /> },
      { name: "CloudFront", icon: <FaCloud /> },
    ],
  },
  {
    icon: <FaTools />,
    title: "Development & Deployment Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Thunder Client", icon: <VscTerminal /> },
      { name: "PuTTY", icon: <VscTerminal /> },
      { name: "WinSCP", icon: <FiMonitor /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell section-pad"
    >
      <div className="container">

        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Skills & Technologies."
          description="Technologies and tools I use to build, test, maintain, and deploy web applications."
        />

        <div className="skills-grid">

          {groups.map((group) => (
            <article
              className="skill-card card-surface"
              key={group.title}
            >
              <div className="skill-card-top">
                <span className="skill-icon">
                  {group.icon}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span
                    className="skill-tag"
                    key={item.name}
                  >
                    <span className="skill-tag-icon">
                      {item.icon}
                    </span>

                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

        {/* <p className="skills-footnote">
          Technologies and tools reflect hands-on use across
          academic, personal, and real-world development projects.
        </p> */}

      </div>
    </section>
  );
}
