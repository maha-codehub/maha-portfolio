import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section-shell section-pad">
      <div className="container">

        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Building with purpose."
          description="A developer who enjoys turning ideas into thoughtful digital solutions."
        />

        <div className="about-grid">

          <div className="about-main card-surface">
            <span className="card-index">01 / ABOUT</span>

            <h3>
              Curious by nature.<br />
              <span>Developer by choice.</span>
            </h3>

            <p>
             I am a Computer Science and Engineering student passionate about full-stack web development and software engineering. I enjoy building practical, user-focused applications and turning ideas into simple, effective digital solutions. I am continuously improving my skills in modern web technologies, problem-solving, and data structures while exploring new ways to build reliable and meaningful software. I also enjoy learning new technologies and applying them to real-world development challenges. My goal is to grow as a software developer by building scalable, maintainable, and user-friendly applications.
            </p>
          </div>

          <div className="about-side">

            <div className="mini-stat card-surface">
              <strong>
                2,000<span>+</span>
              </strong>
              <p>Student results published & supported</p>
            </div>

            <div className="mini-stat card-surface">
              <strong>
                200<span>+</span>
              </strong>
              <p>Alumni & non-alumni users</p>
            </div>

            <div className="mini-stat card-surface">
              <strong>04</strong>
              <p>Featured projects</p>
            </div>

            <div className="about-note">
              <span className="note-icon">✳</span>
              <p>
                Focused on clean implementation, practical problem-solving,
                and continuous learning.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}