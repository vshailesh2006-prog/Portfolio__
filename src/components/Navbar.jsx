import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ExternalLink } from 'lucide-react';
import { LeetCodeIcon, LinkedinIcon } from './BrandIcons';

export default function Navbar({ currentPage, setCurrentPage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Side: Clean Professional Wordmark */}
        <div 
          className="brand-wordmark" 
          onClick={() => {
            if (currentPage !== 'home') setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          role="button"
          tabIndex={0}
          title="Shailesh Vishwakarma Portfolio"
        >
          <span className="brand-initials">SV</span>
          <span className="brand-fullname">Shailesh Vishwakarma</span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            type="button"
            className="nav-link nav-link-highlight"
            onClick={() => handleNavClick('dsa')}
          >
            DSA &amp; Problem Solving
          </button>
          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('journey')}
          >
            Journey &amp; Activities
          </button>
          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button 
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>

        {/* Right Corner: Quick Verified Links & Theme Toggle */}
        <div className="nav-actions-right">
          <a 
            href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-quick-link"
            title="Shailesh's LeetCode Profile"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon size={16} />
            <span className="quick-link-label">LeetCode</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-quick-link"
            title="Shailesh's LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
            <span className="quick-link-label">LinkedIn</span>
          </a>

          {/* Theme Toggle Button */}
          <button 
            type="button"
            className="icon-button theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="theme-icon sun" />
            ) : (
              <Moon size={17} className="theme-icon moon" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="icon-button mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-list" aria-label="Mobile navigation">
            <button 
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              type="button"
              className="mobile-nav-link mobile-highlight"
              onClick={() => handleNavClick('dsa')}
            >
              DSA &amp; Problem Solving
            </button>
            <button 
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick('skills')}
            >
              Technical Skills
            </button>
            <button 
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick('journey')}
            >
              Journey &amp; Activities
            </button>
            <button 
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
            <button 
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>

            <div className="mobile-external-links">
              <a 
                href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-ext-btn"
              >
                <LeetCodeIcon size={16} />
                <span>Visit LeetCode Profile</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-ext-btn"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
