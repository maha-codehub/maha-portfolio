import SectionHeading from '../components/SectionHeading.jsx';

export default function Contact() {
  return <section id="contact" className="section-shell section-pad contact-section">
    <div className="container">
      <SectionHeading eyebrow="GET IN TOUCH" title="Let's build something useful." description="Have an opportunity, project idea, or a reason to connect? I'd be happy to hear from you." />
      <div className="contact-panel card-surface">
        <div className="contact-copy"><span className="card-index">OPEN TO OPPORTUNITIES</span><h3>Have a project<br /><span>in mind?</span></h3><p>I'm interested in software development opportunities, technical collaborations, and building applications that solve real-world problems.</p><a className="btn btn-primary" href="mailto:maha6095752@gmail.com">Send me an email ↗</a></div>
        <div className="contact-details">
          <a href="mailto:maha6095752@gmail.com"><span>Email</span><b>maha6095752@gmail.com</b><i>↗</i></a>
          <a href="tel:+916383343300"><span>Phone</span><b>+91 6383343300</b><i>↗</i></a>
          <a href="https://github.com/maha-codehub" target="_blank" rel="noreferrer"><span>GitHub</span><b>github.com/maha-codehub</b><i>↗</i></a>
          <a href="https://linkedin.com/in/maha-lakshmi-saravanan" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>maha-lakshmi-saravanan</b><i>↗</i></a>
          <div className="contact-location"><span>Location</span><b>Karaikudi, Tamil Nadu, India</b></div>
        </div>
      </div>
    </div>
  </section>;
}
