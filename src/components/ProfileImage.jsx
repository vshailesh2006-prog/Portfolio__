import React, { useState } from 'react';
import { Terminal, Code2, Sparkles, User, Camera } from 'lucide-react';

export default function ProfileImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="profile-image-container" aria-label="Profile photo area for Shailesh Vishwakarma">
      {/* Decorative Background Tech Shapes */}
      <div className="profile-decor-ring"></div>
      <div className="profile-decor-dots"></div>

      {/* Main Rounded Portrait Container with Subtle Indigo Border */}
      <div className="profile-avatar-frame">
        {!imgError ? (
          <img 
            src="/src/assets/profile.jpg" 
            alt="Shailesh Vishwakarma - Profile Photo"
            className="profile-real-photo"
            onError={() => setImgError(true)}
          />
        ) : null}

        {/* Temporary Professional Vector Placeholder if no local photo file exists yet */}
        {imgError && (
          <div className="profile-placeholder-graphic">
            <svg viewBox="0 0 200 200" className="placeholder-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Soft Gradient Backdrop */}
              <circle cx="100" cy="100" r="96" fill="var(--bg-secondary)" stroke="var(--primary-border)" strokeWidth="2" />
              
              {/* Silhouette Vector */}
              <circle cx="100" cy="78" r="34" fill="var(--primary-subtle)" stroke="var(--primary)" strokeWidth="2" />
              <path 
                d="M48 168c0-32 24-52 52-52s52 20 52 52" 
                fill="var(--primary-subtle)" 
                stroke="var(--primary)" 
                strokeWidth="2" 
              />

              {/* Initials Wordmark */}
              <text x="100" y="85" textAnchor="middle" fill="var(--primary)" fontSize="20" fontFamily="var(--font-heading)" fontWeight="700">
                SV
              </text>
            </svg>

            {/* Instruction tooltip */}
            <div className="photo-drop-hint">
              <Camera size={12} />
              <span>Add your photo to: <code>src/assets/profile.jpg</code></span>
            </div>
          </div>
        )}

        {/* Floating Technical Badge on bottom */}
        <div className="profile-badge-overlay">
          <span className="badge-dot"></span>
          <span className="badge-text">CSE • DSA in C++</span>
        </div>
      </div>
    </div>
  );
}
