import { Link, NavLink } from 'react-router-dom';
import { GitBranch, Moon, Network, Sun } from 'lucide-react';
import { profile } from '../data/profile.js';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ theme, themeLabel, onToggleTheme }) {
  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label="Rithik Kaparthi home">
        <span>RK</span>
      </Link>

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? 'active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <a href={profile.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
          <GitBranch size={18} />
        </a>
        <a href={profile.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
          <Network size={18} />
        </a>
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch theme. Current theme: ${themeLabel}`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
