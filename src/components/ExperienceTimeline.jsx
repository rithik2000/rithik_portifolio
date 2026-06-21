import { experiences } from '../data/profile.js';

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((item) => (
        <article className="timeline-item" key={`${item.company}-${item.period}`}>
          <div className="timeline-dot" />
          <div>
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="timeline-company">
              {item.company} | {item.location}
            </p>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
