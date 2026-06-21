import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="project-card-header">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <ArrowUpRight size={22} />
      </div>
      <p className="project-meta">
        {project.organization} | {project.year}
      </p>
      <div className="project-story">
        <p>
          <strong>Problem:</strong> {project.problem}
        </p>
        <p>
          <strong>Solution:</strong> {project.solution}
        </p>
        <p>
          <strong>Impact:</strong> {project.impact}
        </p>
      </div>
      <div className="tag-row">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="metric-row">
        {project.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
    </motion.article>
  );
}
