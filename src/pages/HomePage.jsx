import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Award, 
  ExternalLink, 
  ArrowRight, 
  MapPin, 
  ArrowUpRight,
  GitBranch,
  Layers,
  Sparkles
} from 'lucide-react';
import { LeetCodeIcon, LinkedinIcon } from '../components/BrandIcons';
import ProfileImage from '../components/ProfileImage';
import DpVisualizer from '../components/DpVisualizer';
import GraphVisualizer from '../components/GraphVisualizer';

export default function HomePage() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // DSA Topic Areas in C++
  const dsaTopics = [
    { title: 'Arrays & Strings', desc: 'Prefix sums, two pointers, sliding window, and frequency maps.' },
    { title: 'Linked Lists', desc: 'Singly, doubly, cycle detection (Floyd\'s algorithm), and in-place reversal.' },
    { title: 'Stacks & Queues', desc: 'Monotonic stacks, next greater element, sliding window maximum.' },
    { title: 'Trees & BSTs', desc: 'Inorder/preorder/postorder traversals, level-order (BFS), LCA, and BST properties.' },
    { title: 'Recursion & Backtracking', desc: 'Subset generation, permutations, recursion tree space analysis.' },
    { title: 'Graph Algorithms', desc: 'Adjacency lists, BFS, DFS, cycle detection, and connected components.' },
    { title: 'Dynamic Programming', desc: 'Memoization, tabulation, subproblem identification, and state optimization.' },
    { title: 'Complexity Analysis', desc: 'Rigorous Big-O time and auxiliary space complexity evaluation in C++.' }
  ];

  // Authentic Technical Skills
  const skillCategories = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C++', detail: 'Primary language for DSA & problem solving with STL' },
        { name: 'Python', detail: 'Scripting & foundational learning for AI/ML' }
      ]
    },
    {
      category: 'Problem Solving & DSA',
      items: [
        { name: 'Data Structures & Algorithms', detail: 'Core focus: Linear & non-linear structures' },
        { name: 'LeetCode Practice', detail: 'Regular problem-solving and algorithmic thinking' },
        { name: 'Time & Space Complexity', detail: 'Asymptotic analysis (Big-O) on all solutions' }
      ]
    },
    {
      category: 'Web Fundamentals',
      items: [
        { name: 'HTML5 & Semantic Structure', detail: 'Clean, accessible markup' },
        { name: 'CSS3 & Modern Layouts', detail: 'Flexbox, CSS Grid, responsive design tokens' },
        { name: 'JavaScript Fundamentals', detail: 'ES6+ syntax, DOM manipulation, asynchronous logic' }
      ]
    },
    {
      category: 'Currently Learning',
      items: [
        { name: 'Artificial Intelligence Concepts', detail: 'Core theory, search algorithms, and modern AI paradigms' },
        { name: 'Machine Learning Foundations', detail: 'Python data science stack and mathematical basics' },
        { name: 'AI-Assisted Web Development', detail: 'Leveraging AI tools for rapid prototyping and clean code' }
      ]
    },
    {
      category: 'Professional & Interpersonal Skills',
      items: [
        { name: 'Teamwork & Collaboration', detail: 'Working with peers and event organizing committees' },
        { name: 'Event Coordination & Management', detail: 'Volunteering in high-energy tech and startup summits' },
        { name: 'Continuous Learning', detail: 'Curiosity-driven self-study and disciplined daily practice' }
      ]
    }
  ];

  // Verified Volunteering & Activities
  const activities = [
    {
      title: 'Volunteer — UP Startup Samvad 3.0',
      role: 'Event Coordination & Operations',
      description: 'Volunteered at UP Startup Samvad 3.0, supporting event logistics, attendee coordination, and session facilitation for founders, mentors, and startup ecosystem leaders.',
      tag: 'Startup Ecosystem'
    },
    {
      title: 'Volunteer — AI Manthan',
      role: 'Technical Session & Event Support',
      description: 'Actively participated as a volunteer at AI Manthan, assisting with technical event management, attendee guidance, and session organization focused on artificial intelligence.',
      tag: 'Artificial Intelligence'
    },
    {
      title: 'Assistance — Anurag Dhillon (Indian Angel Network)',
      role: 'Executive & Event Assistance (2 Days)',
      description: 'Assisted Anurag Dhillon from the Indian Angel Network over a two-day schedule, gaining firsthand exposure to angel investing conversations and professional networking.',
      tag: 'Angel Investing & Mentorship'
    }
  ];

  // Projects in Active Development (Truthful representation)
  const learningProjects = [
    {
      title: 'Algorithm & Data Structure Visualizer',
      status: 'In Active Development',
      badge: 'C++ & Web Prototype',
      description: 'An interactive learning tool designed to visualize sorting algorithms and tree traversals step-by-step, helping reinforce algorithmic intuition.',
      tech: ['C++', 'JavaScript', 'HTML5 Canvas', 'CSS3']
    },
    {
      title: 'AI-Assisted Web Utility',
      status: 'Prototype Phase',
      badge: 'Concept & Exploration',
      description: 'An experimental web utility leveraging modern AI tool workflows to explore intelligent data formatting and productivity workflows.',
      tech: ['JavaScript', 'API Integration', 'Modern UI']
    },
    {
      title: 'Personal Developer Portfolio',
      status: 'Live & Iterating',
      badge: 'Current Website',
      description: 'A clean, modern, accessible portfolio website built with React and modular CSS, prioritizing clarity, authentic profile representation, and subtle algorithm visualizers.',
      tech: ['React', 'Vanilla CSS', 'Vite', 'Responsive Design']
    }
  ];

  return (
    <div className="portfolio-content">
      {/* ================= HERO SECTION WITH PROFILE IMAGE ================= */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left: Text & CTA */}
          <div className="hero-text-block">
            <div className="status-pill">
              <span className="status-indicator"></span>
              <span>CSE Student • Expected Graduation 2029</span>
            </div>

            <h1 className="hero-name">Shailesh Vishwakarma</h1>
            <p className="hero-headline">CSE Student | DSA in C++ | AI/ML Learner</p>

            <p className="hero-intro">
              I'm pursuing a B.Tech in Computer Science and Engineering at the{' '}
              <strong>Centre for Advanced Studies, Lucknow</strong>. I enjoy solving challenging problems, 
              mastering Data Structures and Algorithms in C++, exploring Artificial Intelligence and Machine Learning, 
              and building web experiences with the help of AI tools.
            </p>

            <div className="hero-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => scrollToSection('dsa')}
              >
                <span>Explore My DSA Journey</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Visit LeetCode profile"
              >
                <LeetCodeIcon size={16} />
                <span>LeetCode Profile</span>
                <ArrowUpRight size={14} className="btn-corner-icon" />
              </a>

              <a 
                href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="btn-corner-icon" />
              </a>
            </div>

            <div className="hero-meta-strip">
              <span className="meta-tag"><Code2 size={13} /> C++ Programming</span>
              <span className="meta-tag"><Terminal size={13} /> Problem Solving</span>
              <span className="meta-tag"><Cpu size={13} /> AI/ML Exploration</span>
              <span className="meta-tag"><MapPin size={13} /> Lucknow, India</span>
            </div>
          </div>

          {/* Right: Personal Profile Image Section */}
          <div className="hero-visual-block">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="section-block">
        <div className="section-header">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">About Me &amp; Education</h2>
        </div>

        <div className="about-grid">
          <div className="about-text-card">
            <h3 className="card-heading">Education</h3>
            <div className="education-detail">
              <div className="edu-title-row">
                <span className="edu-degree">Bachelor of Technology (B.Tech)</span>
                <span className="edu-year">2025 — 2029 (Expected)</span>
              </div>
              <p className="edu-major">Computer Science and Engineering</p>
              <p className="edu-college">Centre for Advanced Studies, Lucknow</p>
            </div>

            <div className="about-bio-paragraphs">
              <p>
                "I'm pursuing a B.Tech in Computer Science and Engineering at the Centre for Advanced Studies, Lucknow. 
                I enjoy solving challenging problems, learning Data Structures and Algorithms in C++, 
                exploring Artificial Intelligence and Machine Learning, and building web experiences with the help of AI tools. 
                I value continuous learning, teamwork, and turning ideas into practical projects."
              </p>
            </div>
          </div>

          <div className="about-pillars-card">
            <h3 className="card-heading">Core Focus Areas</h3>
            
            <div className="pillar-item">
              <div className="pillar-icon"><Terminal size={18} /></div>
              <div>
                <h4>Problem Solving in C++</h4>
                <p>Developing algorithmic rigor through daily practice, STL mastery, and structured problem analysis on LeetCode.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Cpu size={18} /></div>
              <div>
                <h4>AI &amp; Machine Learning Foundations</h4>
                <p>Building strong mathematical and Python fundamentals to explore model architectures, data analysis, and applied AI.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Code2 size={18} /></div>
              <div>
                <h4>Web Exploration &amp; AI-Assisted Building</h4>
                <p>Learning modern web technologies (HTML, CSS, JS, React) and utilizing AI tools to turn concepts into functional prototypes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRIMARY FEATURE: DSA & PROBLEM SOLVING ================= */}
      <section id="dsa" className="section-block dsa-featured-section">
        <div className="section-header">
          <span className="section-eyebrow accent-highlight">Core Strength</span>
          <h2 className="section-title">DSA &amp; Problem Solving Journey</h2>
          <p className="section-description">
            Data Structures and Algorithms form the foundation of my engineering discipline. 
            I use C++ for its fine-grained memory model, type safety, and efficient Standard Template Library (STL).
          </p>
        </div>

        {/* LeetCode Profile Highlight Banner */}
        <div className="leetcode-banner-card">
          <div className="leetcode-banner-content">
            <div className="leetcode-badge-row">
              <div className="leetcode-icon-wrapper">
                <LeetCodeIcon size={24} />
              </div>
              <div>
                <span className="banner-subtitle">Official Problem Solving Profile</span>
                <h3 className="banner-title">LeetCode: @Shailesh_1Vishwakarma</h3>
              </div>
            </div>
            <p className="banner-text">
              Active problem solver consistently practicing on LeetCode. Focused on understanding 
              the underlying patterns behind problems, optimizing time and space complexity, and writing clean, 
              robust C++ code.
            </p>
          </div>

          <div className="leetcode-banner-action">
            <a 
              href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={15} />
            </a>
            <span className="verified-note">Verified Public Profile Link</span>
          </div>
        </div>

        {/* ALGORITHM VISUALIZERS (DP & GRAPH) */}
        <div className="algorithm-visualizers-grid">
          {/* 1. Dynamic Programming Visualizer */}
          <DpVisualizer />

          {/* 2. Graph Algorithm Visualizer */}
          <GraphVisualizer />
        </div>

        {/* C++ DSA Engineering Principles */}
        <div className="dsa-approach-grid">
          <div className="approach-card">
            <h4 className="approach-title">Why C++ for DSA?</h4>
            <p className="approach-text">
              C++ provides deterministic execution, deep control over pointers and references, 
              and the rich Standard Template Library (STL) — enabling efficient implementation of custom algorithms 
              without runtime overhead.
            </p>
            <div className="stl-tags">
              <span>std::vector</span>
              <span>std::unordered_map</span>
              <span>std::priority_queue</span>
              <span>std::set</span>
              <span>std::stack</span>
            </div>
          </div>

          <div className="approach-card">
            <h4 className="approach-title">Problem Solving Methodology</h4>
            <ul className="approach-list">
              <li>Analyze problem constraints and deduce required time complexity upfront.</li>
              <li>Develop a solid brute-force intuition before architecting optimal solutions.</li>
              <li>Rigorously check edge cases: empty inputs, integer overflow, boundary values.</li>
              <li>Write modular helper functions with self-documenting naming conventions.</li>
            </ul>
          </div>
        </div>

        {/* DSA Topics Practiced */}
        <div className="dsa-topics-container">
          <h3 className="topics-heading">Topics Studied &amp; Practiced in C++</h3>
          <div className="dsa-topics-grid">
            {dsaTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <span className="topic-number">0{index + 1}</span>
                <h4 className="topic-title">{topic.title}</h4>
                <p className="topic-desc">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SKILLS ================= */}
      <section id="skills" className="section-block">
        <div className="section-header">
          <span className="section-eyebrow">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Learning Areas</h2>
          <p className="section-description">
            A grounded overview of the tools, languages, and competencies I work with daily and am actively exploring.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category-box">
              <h3 className="skill-cat-title">{cat.category}</h3>
              <div className="skill-items-list">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="skill-item-row">
                    <div className="skill-dot"></div>
                    <div>
                      <span className="skill-name">{item.name}</span>
                      <p className="skill-detail">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AI/ML LEARNING JOURNEY ================= */}
      <section id="aiml" className="section-block">
        <div className="section-header">
          <span className="section-eyebrow">Active Exploration</span>
          <h2 className="section-title">AI &amp; Machine Learning Journey</h2>
          <p className="section-description">
            Transparently sharing my current learning path in Artificial Intelligence and Machine Learning as an undergraduate student.
          </p>
        </div>

        <div className="aiml-card">
          <div className="aiml-content">
            <h3 className="card-heading">Learning Trajectory</h3>
            <p>
              I am actively expanding my knowledge beyond traditional programming into Artificial Intelligence and Machine Learning. 
              My current focus is building solid mathematical intuition alongside hands-on Python experimentation.
            </p>

            <div className="learning-steps-grid">
              <div className="step-box">
                <span className="step-number">Phase 1</span>
                <h4>Python &amp; Mathematical Foundations</h4>
                <p>Linear algebra, probability, calculus fundamentals, and numerical computation using Python.</p>
              </div>

              <div className="step-box">
                <span className="step-number">Phase 2</span>
                <h4>Core ML Principles</h4>
                <p>Understanding supervised and unsupervised learning, regression, classification, and model evaluation metrics.</p>
              </div>

              <div className="step-box">
                <span className="step-number">Phase 3</span>
                <h4>AI-Assisted Engineering</h4>
                <p>Exploring modern AI developer tools, APIs, and prompt workflows to accelerate learning and project prototyping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VOLUNTEERING & ACTIVITIES ================= */}
      <section id="journey" className="section-block">
        <div className="section-header">
          <span className="section-eyebrow">Community &amp; Leadership</span>
          <h2 className="section-title">Volunteering &amp; Activities</h2>
          <p className="section-description">
            Active involvement in tech conferences, startup summits, and coordination roles that demonstrate teamwork, initiative, and responsibility.
          </p>
        </div>

        <div className="activities-list">
          {activities.map((act, index) => (
            <div key={index} className="activity-card">
              <div className="activity-header">
                <div>
                  <h3 className="activity-title">{act.title}</h3>
                  <span className="activity-role">{act.role}</span>
                </div>
                <span className="activity-tag">{act.tag}</span>
              </div>
              <p className="activity-desc">{act.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Note */}
        <div className="certifications-callout">
          <div className="callout-content">
            <Award size={20} className="callout-icon" />
            <div>
              <h4 className="callout-title">Certifications &amp; Achievements</h4>
              <p className="callout-desc">
                Course completion certificates, participation credentials, and event acknowledgments are documented on my LinkedIn profile.
              </p>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>View on LinkedIn</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* ================= PROJECTS & EXPLORATIONS ================= */}
      <section id="projects" className="section-block">
        <div className="section-header">
          <span className="section-eyebrow">Building &amp; Creating</span>
          <h2 className="section-title">Projects &amp; Prototypes</h2>
          <p className="section-description">
            Practical applications and learning prototypes in active development. Repositories and live deployments will be shared as they reach completion.
          </p>
        </div>

        <div className="projects-grid">
          {learningProjects.map((proj, index) => (
            <div key={index} className="project-card">
              <div className="project-top-row">
                <span className="status-badge">{proj.status}</span>
                <span className="prototype-badge">{proj.badge}</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="project-tech-strip">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-transparent-note">
          <p>
            <em>
              Note: I am continuously building and refining new projects as I advance through my B.Tech studies. 
              Verified repositories and live deployments will be published here upon completion. 
              Connect on LinkedIn for ongoing updates.
            </em>
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="section-block contact-section">
        <div className="section-header">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Connect with Shailesh</h2>
          <p className="section-description">
            I welcome discussions on Data Structures &amp; Algorithms, AI/ML learning resources, 
            academic collaboration, and student developer opportunities.
          </p>
        </div>

        <div className="contact-cards-grid">
          <a 
            href="https://www.linkedin.com/in/shailesh-v-a123422b8/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Connect on LinkedIn"
          >
            <div className="contact-icon-box">
              <LinkedinIcon size={22} />
            </div>
            <div className="contact-card-info">
              <span className="contact-platform">LinkedIn</span>
              <span className="contact-handle">shailesh-v-a123422b8</span>
              <span className="contact-cta">Send a connection request or message ↗</span>
            </div>
          </a>

          <a 
            href="https://leetcode.com/u/Shailesh_1Vishwakarma/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Visit LeetCode profile"
          >
            <div className="contact-icon-box">
              <LeetCodeIcon size={22} />
            </div>
            <div className="contact-card-info">
              <span className="contact-platform">LeetCode</span>
              <span className="contact-handle">@Shailesh_1Vishwakarma</span>
              <span className="contact-cta">Explore problem solving profile ↗</span>
            </div>
          </a>

          <div className="contact-card info-only">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <div className="contact-card-info">
              <span className="contact-platform">Location &amp; Institution</span>
              <span className="contact-handle">Lucknow, Uttar Pradesh, India</span>
              <span className="contact-sub">Centre for Advanced Studies, Lucknow</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
