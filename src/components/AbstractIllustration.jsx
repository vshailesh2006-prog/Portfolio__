import React from 'react';

export default function AbstractIllustration() {
  return (
    <div className="abstract-visual-container" aria-label="Abstract developer representation">
      <svg 
        viewBox="0 0 420 340" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="abstract-svg"
      >
        {/* Background Card Surface */}
        <rect x="20" y="20" width="380" height="300" rx="12" fill="var(--bg-card)" stroke="var(--border-subtle)" strokeWidth="1.5" />
        
        {/* Window Chrome / Title Bar */}
        <rect x="20" y="20" width="380" height="36" rx="12" fill="var(--bg-secondary)" />
        <line x1="20" y1="56" x2="400" y2="56" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="42" cy="38" r="4" fill="#64748b" opacity="0.6" />
        <circle cx="56" cy="38" r="4" fill="#64748b" opacity="0.6" />
        <circle cx="70" cy="38" r="4" fill="#64748b" opacity="0.6" />
        <text x="210" y="42" textAnchor="middle" fill="var(--text-muted)" fontSize="11" fontFamily="var(--font-mono)">
          dsa_workspace.cpp
        </text>

        {/* Binary Tree & Algorithmic Node Representation */}
        <g className="tree-nodes" stroke="var(--accent-border)" strokeWidth="1.5">
          {/* Root to Children Connectors */}
          <line x1="210" y1="105" x2="140" y2="165" />
          <line x1="210" y1="105" x2="280" y2="165" />
          <line x1="140" y1="165" x2="100" y2="225" />
          <line x1="140" y1="165" x2="180" y2="225" />
          <line x1="280" y1="165" x2="240" y2="225" />
          <line x1="280" y1="165" x2="320" y2="225" />

          {/* Root Node */}
          <circle cx="210" cy="105" r="16" fill="var(--bg-surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
          <text x="210" y="109" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">
            root
          </text>

          {/* Level 1 Nodes */}
          <circle cx="140" cy="165" r="14" fill="var(--bg-surface-elevated)" stroke="var(--border-medium)" strokeWidth="1.5" />
          <text x="140" y="169" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)">
            L
          </text>

          <circle cx="280" cy="165" r="14" fill="var(--bg-surface-elevated)" stroke="var(--border-medium)" strokeWidth="1.5" />
          <text x="280" y="169" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)">
            R
          </text>

          {/* Leaf Nodes */}
          <circle cx="100" cy="225" r="11" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
          <circle cx="180" cy="225" r="11" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
          <circle cx="240" cy="225" r="11" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
          <circle cx="320" cy="225" r="11" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
        </g>

        {/* Code Snippet Overlay Bottom Banner */}
        <rect x="40" y="260" width="340" height="42" rx="6" fill="var(--bg-input)" stroke="var(--border-subtle)" strokeWidth="1" />
        <text x="56" y="285" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)">
          std::vector&lt;int&gt;
        </text>
        <text x="165" y="285" fill="var(--text-main)" fontSize="11" fontFamily="var(--font-mono)">
          ans = solve(root);
        </text>
        <text x="315" y="285" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">
          // O(N)
        </text>
      </svg>
    </div>
  );
}
