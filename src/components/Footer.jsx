import { GitBranch, Mail, Network } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Rithik Kaparthi</p>
        <p>Senior AI / ML Engineer building governed GenAI systems for enterprise teams.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`} aria-label="Email Rithik">
          <Mail size={18} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GitBranch size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Network size={18} />
        </a>
      </div>
    </footer>
  );
}
