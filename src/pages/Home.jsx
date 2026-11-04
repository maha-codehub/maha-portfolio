
export default function Home() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="container hero-grid">

        {/* LEFT: Introduction */}
        <div className="hero-copy">

          <div className="availability">
            <span></span>
            Open to software development opportunities
          </div>

          <p className="hero-kicker">HELLO, I'M</p>

          <h1>
            Maha <span>Lakshmi</span>
          </h1>

          <h2>
             Aspiring Full-Stack Developer 
          </h2>

          <p className="hero-description">
            I build practical web applications, reliable backend
            systems, and user-focused digital experiences with
            modern web technologies.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>

            <a
              className="btn btn-outline"
              href="/Maha-Lakshmi-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume ↓
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/maha-codehub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/maha-lakshmi-saravanan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:maha6095752@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        {/* RIGHT: Only Profile Photo */}
        <div className="hero-visual">

          <div className="orbit orbit-a"></div>
          <div className="orbit orbit-b"></div>

          <div className="hero-profile">
            <img
              src="/profile.jpeg"
              alt="Maha Lakshmi"
              className="hero-profile-img"
            />
          </div>

        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span></span>
        Scroll to explore
      </a>
    </section>
  );
}
