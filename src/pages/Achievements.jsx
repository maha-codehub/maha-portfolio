
import SectionHeading from '../components/SectionHeading.jsx';

const achievements = [
  {
    number: '01',
    title: 'First Place — Paper Presentation',
    detail: 'Secured 1st place in a paper presentation at the CSE Symposium.',
    icon: '✦'
  },
  {
    number: '02',
    title: 'Technical Symposium Organizer',
    detail: 'Contributed to organizing a technical symposium conducted by the ISTE Student Chapter at ACGCET.',
    icon: '⌁'
  },
  {
    number: '03',
    title: 'Inter-College Workshop Organizer',
    detail: 'Served as a member of the organizing team for technical workshops involving students from various academic departments at the inter-college level.',
    icon: '⚙'
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-shell section-pad section-muted"
    >
      <div className="container">
        <SectionHeading
          eyebrow="MILESTONES"
          title="Achievements."
          description="A few milestones from my academic and campus journey."
        />

        <div className="achievement-grid">
          {achievements.map(item => (
            <article
              className="achievement-card card-surface"
              key={item.number}
            >
              <div className="achievement-top">
                <span>{item.number}</span>
                <b>{item.icon}</b>
              </div>

              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
