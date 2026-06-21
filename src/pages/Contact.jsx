import { GitBranch, Mail, MapPin, Network, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <div className="page-wrap contact-page">
      <AnimatedSection className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about AI platforms, GenAI products, and ML systems.</h1>
        <p>
          Open to Senior AI/ML Engineer, GenAI Engineer, MLOps, and applied data science opportunities
          where production quality and responsible AI matter.
        </p>
      </AnimatedSection>

      <AnimatedSection className="contact-layout">
        <aside className="contact-panel">
          <h2>Contact details</h2>
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`}>
            <Phone size={19} />
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Network size={19} />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={19} />
            GitHub
          </a>
          <p className="availability">
            <MapPin size={19} />
            Based in the United States. Comfortable with cloud, enterprise, and cross-functional AI delivery.
          </p>
        </aside>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
