import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Cpu, ExternalLink, Github, GraduationCap, MapPin, Terminal, Trophy, Workflow } from 'lucide-react';
import { LeetCodeIcon, LinkedinIcon } from '../components/BrandIcons';
import ProfileImage from '../components/ProfileImage';
import GraphVisualizer from '../components/GraphVisualizer';

const leetcode = 'https://leetcode.com/u/Shailesh_1Vishwakarma/';
const linkedin = 'https://www.linkedin.com/in/shailesh-v-a123422b8/';
const projects = [
  { number: '01', type: 'TEAM PROJECT · SIH 2026', title: 'Drift & Destiny', text: 'A tourism and cultural discovery platform concept focused on helping travellers find meaningful places, local experiences, and useful trip information.', stack: ['React', 'Vite', 'Tailwind CSS'], href: 'https://github.com/revanntdikshit729-oss/SIH26---T15---Drift-Destiny', link: 'Explore repository', icon: MapPin },
  { number: '02', type: 'ALGORITHM VISUALIZATION', title: 'Graph Traversal Lab', text: 'An interactive BFS and DFS playground that makes traversal order, visited nodes, and frontier changes easier to understand.', stack: ['BFS / DFS', 'Graph theory', 'React'], href: '#dsa', link: 'Explore graph lab', icon: Workflow },
  { number: '03', type: 'ROBOTICS · IOT', title: 'Line Maze Solver', text: 'A robotics learning project exploring line-following behaviour, sensor input, and motor control with embedded hardware.', stack: ['ESP32', 'IR sensors', 'PID concepts'], href: 'https://github.com/vshailesh2006-prog', link: 'View GitHub profile', icon: Cpu }
];
const skills = [
  { title: 'Problem solving', detail: 'Arrays, strings, linked lists, trees, graphs, recursion and dynamic programming', icon: Workflow },
  { title: 'Languages', detail: 'C++ for DSA · Python fundamentals for AI/ML', icon: Terminal },
  { title: 'Web foundations', detail: 'HTML, CSS, JavaScript, React and AI-assisted prototyping', icon: Code2 },
  { title: 'AI / ML', detail: 'Building Python foundations and beginning the machine-learning journey', icon: BrainCircuit }
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="folio-section-heading"><span className="folio-eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function HomePage() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <div className="folio">
      <section className="folio-hero" id="top">
        <div className="folio-hero-copy">
          <div className="folio-availability"><span /> B.TECH CSE · 3RD SEMESTER</div>
          <p className="folio-kicker">HELLO, I'M SHAIL​ESH</p>
          <h1>Building a strong<br /><span>engineering</span> foundation.</h1>
          <p className="folio-intro">I'm Shailesh Vishwakarma — a Computer Science student who enjoys solving problems with C++, exploring AI/ML, and turning ideas into useful projects.</p>
          <div className="folio-hero-actions">
            <button className="folio-button folio-button-primary" onClick={() => scrollTo('projects')}>Explore my work <ArrowUpRight size={17} /></button>
            <a className="folio-button folio-button-quiet" href={leetcode} target="_blank" rel="noreferrer"><LeetCodeIcon size={17} /> LeetCode profile</a>
          </div>
          <div className="folio-location"><MapPin size={15} /> Lucknow, India <span className="folio-separator">/</span> Centre for Advanced Studies</div>
        </div>
        <div className="folio-hero-aside">
          <div className="folio-portrait"><ProfileImage /></div>
          <div className="folio-hero-note"><span className="folio-note-index">01 / CURRENT FOCUS</span><strong>DSA in C++</strong><span>AI/ML learner · Builder in progress</span></div>
        </div>
        <button className="folio-scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to about section"><ArrowDownRight size={18} /> SCROLL TO EXPLORE</button>
      </section>

      <section className="folio-proof-strip" aria-label="Highlights">
        <div><span className="folio-proof-number">200+</span><span className="folio-proof-label">LeetCode problems solved</span></div>
        <div><span className="folio-proof-number">C++</span><span className="folio-proof-label">Primary DSA language</span></div>
        <div><span className="folio-proof-number">AI / ML</span><span className="folio-proof-label">Current learning direction</span></div>
        <a href="https://github.com/vshailesh2006-prog" target="_blank" rel="noreferrer" className="folio-proof-link"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
      </section>

      <section className="folio-section" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity, consistency, and code." text="I care about understanding why a solution works—not just getting it accepted. Right now, I’m strengthening my core CS skills while exploring how intelligent systems are built." />
        <div className="folio-about-grid">
          <article className="folio-about-card folio-about-main"><span className="folio-card-mark">SV.</span><h3>Learning by building.</h3><p>I'm pursuing a B.Tech in Computer Science and Engineering at the Centre for Advanced Studies, Lucknow. Most of my technical growth comes from consistent DSA practice, learning fundamentals deeply, and collaborating on practical ideas.</p><a href={linkedin} target="_blank" rel="noreferrer" className="folio-inline-link">Connect on LinkedIn <ArrowUpRight size={15} /></a></article>
          <article className="folio-about-card"><GraduationCap size={21} /><span className="folio-card-label">EDUCATION</span><h3>B.Tech · CSE (AI/ML)</h3><p>Centre for Advanced Studies, Lucknow</p><span className="folio-muted-small">2025 — 2029 expected</span></article>
          <article className="folio-about-card"><Trophy size={21} /><span className="folio-card-label">MY APPROACH</span><h3>Understand, then optimize.</h3><p>Start with intuition and a baseline solution, then reason about complexity and edge cases.</p></article>
        </div>
      </section>

      <section className="folio-section folio-dsa-section" id="dsa">
        <SectionHeading eyebrow="THE CORE OF MY JOURNEY" title="Problem solving is a practice." text="200+ LeetCode problems solved so far. I’m focused on pattern recognition, stronger fundamentals, and writing clearer, more efficient C++ solutions." />
        <div className="folio-dsa-feature">
          <div className="folio-dsa-copy"><span className="folio-card-label">LEETCODE · C++</span><h3>Every problem teaches a pattern.</h3><p>From arrays and linked lists to trees, graphs, and dynamic programming, I’m building the habit of breaking problems down before reaching for an optimized approach.</p><div className="folio-topic-list"><span>Arrays & strings</span><span>Linked lists</span><span>Trees & graphs</span><span>Recursion</span><span>Dynamic programming</span><span>Complexity analysis</span></div><a href={leetcode} target="_blank" rel="noreferrer" className="folio-inline-link">Follow my progress <ArrowUpRight size={15} /></a></div>
          <div className="folio-dsa-stat"><span className="folio-stat-label">SOLVED</span><strong>200<span>+</span></strong><span className="folio-stat-caption">problems & counting</span><div className="folio-stat-rule"><span /></div><span className="folio-stat-foot">Consistency over shortcuts.</span></div>
        </div>
        <div className="folio-visualizer-heading"><div><span className="folio-eyebrow">INTERACTIVE GRAPH LAB</span><h3>Watch traversal, step by step.</h3><p className="folio-graph-subtitle">Switch between BFS and DFS to compare how each algorithm explores the same graph.</p></div><span className="folio-small-tag">TRY IT YOURSELF ↘</span></div>
        <div className="algorithm-visualizers-grid folio-visualizers folio-graph-only"><GraphVisualizer /></div>
      </section>

      <section className="folio-section" id="skills">
        <SectionHeading eyebrow="TOOLS & FUNDAMENTALS" title="Skills I'm growing." text="A transparent snapshot of what I use, what I understand, and what I’m actively learning." />
        <div className="folio-skills-grid">{skills.map(({ title, detail, icon: Icon }, i) => <article className="folio-skill-card" key={title}><span className="folio-skill-index">0{i + 1}</span><Icon size={20} /><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="folio-section" id="aiml">
        <div className="folio-learning-panel"><div><span className="folio-eyebrow">NEXT FRONTIER</span><h2>Exploring AI/ML,<br />one foundation at a time.</h2><p>I'm building my Python fundamentals and learning how data, models, and evaluation fit together. The goal is to understand the process well enough to train, evaluate, and improve models—not just use a black box.</p></div><div className="folio-learning-steps"><div><span>01</span><p><strong>Python & data</strong><small>Language fundamentals and data handling</small></p></div><div><span>02</span><p><strong>Core machine learning</strong><small>Regression, classification, and evaluation</small></p></div><div><span>03</span><p><strong>Applied projects</strong><small>Build, measure, and improve models</small></p></div></div></div>
      </section>

      <section className="folio-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK & EXPLORATIONS" title="Ideas made tangible." text="Projects and prototypes that connect software, algorithms, and real-world problem solving. Work in progress is labelled honestly." />
        <div className="folio-projects-grid">{projects.map(({ number, type, title, text, stack, href, link, icon: Icon }) => <article className="folio-project-card" key={title}><div className="folio-project-top"><span>{number}</span><Icon size={19} /></div><span className="folio-card-label">{type}</span><h3>{title}</h3><p>{text}</p><div className="folio-project-stack">{stack.map(item => <span key={item}>{item}</span>)}</div><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="folio-inline-link">{link} <ArrowUpRight size={15} /></a></article>)}</div>
      </section>

      <section className="folio-section" id="journey">
        <SectionHeading eyebrow="BEYOND THE EDITOR" title="Learning with people, too." text="Volunteering and event support have given me a glimpse into how technology, entrepreneurship, and teams come together." />
        <div className="folio-experience-list"><article><span>01</span><div><h3>UP Startup Samvad 3.0</h3><p>Event coordination and support within the startup ecosystem.</p></div><span className="folio-experience-tag">COMMUNITY</span></article><article><span>02</span><div><h3>AI Manthan</h3><p>Volunteer support around a technical event focused on artificial intelligence.</p></div><span className="folio-experience-tag">AI / TECH</span></article><article><span>03</span><div><h3>Indian Angel Network · Event assistance</h3><p>Two-day assistance for Anurag Dhillon, gaining exposure to startup conversations and professional networking.</p></div><span className="folio-experience-tag">EXPOSURE</span></article></div>
      </section>

      <section className="folio-contact" id="contact"><div><span className="folio-eyebrow">HAVE AN IDEA OR OPPORTUNITY?</span><h2>Let's connect and<br /><span>build something useful.</span></h2><p>Always open to learning, technical conversations, and student collaborations.</p></div><div className="folio-contact-actions"><a className="folio-button folio-button-primary" href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a><a className="folio-button folio-button-quiet" href="https://github.com/vshailesh2006-prog" target="_blank" rel="noreferrer"><Github size={17} /> Explore GitHub <ArrowUpRight size={16} /></a><a className="folio-button folio-button-quiet" href={leetcode} target="_blank" rel="noreferrer"><LeetCodeIcon size={17} /> LeetCode <ArrowUpRight size={16} /></a></div></section>
      <footer className="folio-bottomline"><span>© {new Date().getFullYear()} Shailesh Vishwakarma</span><span>Made with curiosity & consistency.</span><button onClick={() => scrollTo('top')}>BACK TO TOP ↑</button></footer>
    </div>
  );
}
