import { skillGroups } from '../data/profile.js';

export default function SkillCloud() {
  return (
    <div className="skill-grid">
      {skillGroups.map((group) => (
        <article className="skill-panel" key={group.title}>
          <h3>{group.title}</h3>
          <div className="tag-row">
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
