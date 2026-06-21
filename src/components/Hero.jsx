import { ArrowRight, BrainCircuit, CloudCog, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';

const orbitItems = [
  { icon: BrainCircuit, label: 'RAG' },
  { icon: CloudCog, label: 'MLOps' },
  { icon: Cpu, label: 'LLMs' },
  { icon: ShieldCheck, label: 'Governance' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          Enterprise GenAI | RAG | MLOps
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
          {profile.name}
          <span>{profile.role}</span>
        </motion.h1>
        <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}>
          {profile.intro}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.24 }}>
          <Link className="primary-button" to="/projects">
            View Projects <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button" to="/contact">
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="ai-console"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.18 }}
        aria-label="AI portfolio visual"
      >
        <div className="console-top">
          <span />
          <span />
          <span />
          <p>agentic_rag.pipeline</p>
        </div>
        <div className="orbital-core">
          <div className="core-pulse">RK</div>
          {orbitItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className={`orbit-node node-${index + 1}`} key={item.label}>
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="signal-grid">
          {profile.focusAreas.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
