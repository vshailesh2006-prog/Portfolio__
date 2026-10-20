import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { LeetCodeIcon, LinkedinIcon } from './BrandIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-brand">
            <span className="footer-name">Shailesh Vishwakarma</span>
            <p className="footer-subtitle">
              Computer Science &amp; Engineering Student • Centre for Advanced Studies, Lucknow
            </p>
          </div>

          <div className="footer-links-group">
            <a 
              href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={16} />
              <span>LeetCode</span>
              <ExternalLink size={12} className="link-ext-icon" />
            </a>

            <a 
              href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="link-ext-icon" />
            </a>

            <button 
              type="button" 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={15} />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {CURRENT_YEAR} Shailesh Vishwakarma. Built with clean React &amp; CSS.
          </p>
          <p className="footer-status-text">
            Focused on Data Structures, C++, &amp; AI/ML Foundations
          </p>
        </div>
      </div>
    </footer>
  );
}
