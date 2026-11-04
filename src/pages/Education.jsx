import SectionHeading from '../components/SectionHeading.jsx';

export default function Education() {
  return <section id="education" className="section-shell section-pad section-muted">
    <div className="container">
      <SectionHeading eyebrow="EDUCATION" title="My learning journey." description="Building a strong foundation in computer science and software development." />
      <div className="education-grid">
        <article className="education-card card-surface"><span className="timeline-dot"></span><span className="card-index">2024 — 2028</span><h3>Bachelor of Engineering</h3><h4>Computer Science and Engineering</h4><p>Alagappa Chettiar Government College of Engineering and Technology (ACGCET), Karaikudi.</p><span className="education-tag">Affiliated to Anna University</span><span className="education-year">Expected graduation · 2028</span></article>
        <article className="education-card card-surface"><span className="timeline-dot"></span><span className="card-index">HIGHER SECONDARY</span><h3>Higher Secondary Education</h3><h4> Computer Science & Mathematics</h4><p>Kamban Karpagam Matriculation Higher Secondary School, Karaikudi.</p><span className="education-tag">Academic achievement</span><span className="education-year">96% · HSC</span></article>
      </div>
    </div>
  </section>;
}
