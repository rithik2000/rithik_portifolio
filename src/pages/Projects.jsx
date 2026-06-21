import AnimatedSection from '../components/AnimatedSection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <div className="page-wrap">
      <AnimatedSection className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1>Case studies from insurance, pharma, banking, and ecommerce AI.</h1>
        <p>
          These projects are written from the experience in Rithik's resume, emphasizing business problem,
          architecture, delivery patterns, and production AI impact.
        </p>
      </AnimatedSection>

      <section className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </section>
    </div>
  );
}
