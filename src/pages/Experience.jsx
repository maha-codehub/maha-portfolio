import SectionHeading from '../components/SectionHeading.jsx';

export default function Experience() {
  return <section id="experience" className="section-shell section-pad">
    <div className="container">
      <SectionHeading eyebrow="WHAT I'VE WORKED ON" title="Development experience." description="Practical work maintaining a live institutional platform and supporting its operational systems." />
      <article className="experience-card card-surface">
        <div className="experience-marker"><span></span></div>
        <div className="experience-body"><div className="experience-meta"><span>FULL-STACK DEVELOPMENT</span><span>ACGCET</span></div>
          <h3>Website Development & Maintenance</h3>
          <p className="experience-intro">Contributed to maintaining and enhancing key modules of the official ACGCET website and its PJC Fund Management system.</p>
          <div className="experience-points">
            <div><b>01</b><p>Maintained academic and administrative modules, including semester results, IQAC content, events, and bulletins.</p></div>
            <div><b>02</b><p>Supported manual result entry and publication for more than 1,000 students.</p></div>
            <div><b>03</b><p>Implemented PJC fund dashboards, payment tracking, installment history, and administrative approval workflows.</p></div>
            <div><b>04</b><p>Worked with AWS Lightsail, S3, SES, and CloudFront for hosting, storage, email, and content delivery integrations.</p></div>
            <div><b>05</b><p>Maintained GitHub Actions deployment workflows and used PuTTY and WinSCP for server access and file transfer.</p></div>
          </div>
          <div className="project-stack"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MySQL</span><span>AWS</span><span>GitHub Actions</span></div>
        </div>
      </article>
    </div>
  </section>;
}
