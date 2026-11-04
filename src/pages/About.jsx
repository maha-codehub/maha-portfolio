import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return <section id="about" className="section-shell section-pad">
    <div className="container">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building with purpose." description="A developer who enjoys turning real-world requirements into thoughtful digital solutions." />
      <div className="about-grid">
        <div className="about-main card-surface">
          <span className="card-index">01 / ABOUT</span>
          <h3>Curious by nature.<br /><span>Developer by choice.</span></h3>
          <p>I am a Computer Science and Engineering student with hands-on experience in full-stack web development using React.js, Node.js, Express.js, and MySQL.
          I have contributed to maintaining and enhancing the official ACGCET website, supporting academic results publication, and building the PJC Fund Management system with dashboards and administrative workflows.
          I enjoy solving problems, learning new technologies, and creating applications that make everyday processes simpler and more efficient.</p>
        </div>
        <div className="about-side">
          <div className="mini-stat card-surface"><strong>1,000<span>+</span></strong><p>Students supported through results publication</p></div>
          <div className="mini-stat card-surface"><strong>05</strong><p>Featured  projects</p></div>
          <div className="about-note"><span className="note-icon">✳</span><p>I Focused on clean implementation, practical problem-solving, and continuous learning.</p></div>
        </div>
      </div>
    </div>
  </section>;
}
