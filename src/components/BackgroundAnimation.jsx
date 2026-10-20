import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="bg-canvas-wrapper" aria-hidden="true">
      {/* Subtle geometric dot grid for depth */}
      <div className="subtle-dot-grid"></div>
      
      {/* Very soft, restrained ambient gradient (dark charcoal tone) */}
      <div className="subtle-ambient-glow"></div>
    </div>
  );
}
