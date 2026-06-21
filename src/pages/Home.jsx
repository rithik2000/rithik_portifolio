import { Link } from 'react-router-dom';
import { ArrowRight, Layers3, Network, ShieldCheck, Workflow } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';
import Hero from '../components/Hero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SkillCloud from '../components/SkillCloud.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';

const capabilityIcons = [Network, Workflow, Layers3, ShieldCheck];

export default function Home() {
  return (
    <>
      <Hero />

      <AnimatedSection className="section stats-band">
        {profile.stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-heading">
          <p className="eyebrow">AI systems I build</p>
          <h2>From retrieval pipelines to governed production intelligence.</h2>
        </div>
        <div className="capability-grid">
          {profile.focusAreas.map((area, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article className="capability-card" key={area}>
                <Icon size={24} />
                <h3>{area}</h3>
                <p>
                  Production patterns for secure data access, model lifecycle management, observability,
                  and domain-aligned AI workflows.
                </p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Featured case studies</p>
            <h2>Resume-backed projects with enterprise AI depth.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All Projects <ArrowRight size={17} />
          </Link>
        </div>
        <div className="project-grid compact">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience signal</p>
          <h2>Built across regulated AI, finance ML, and high-scale commerce.</h2>
        </div>
        <ExperienceTimeline />
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="section-heading">
          <p className="eyebrow">Technical stack</p>
          <h2>A practical toolkit for shipping AI systems, not just notebooks.</h2>
        </div>
        <SkillCloud />
      </AnimatedSection>
    </>
  );
}
