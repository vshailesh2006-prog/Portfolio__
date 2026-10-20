import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Info, CheckCircle2 } from 'lucide-react';

export default function DpVisualizer() {
  // Fibonacci states: 0 to 7
  const dpSize = 8;
  const fibValues = [0, 1, 1, 2, 3, 5, 8, 13];

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= dpSize - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1400);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, dpSize]);

  const handleReplay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (currentStep >= dpSize - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Explanation message based on currentStep
  const getExplanation = () => {
    if (currentStep === 0) return 'Base case 1: dp[0] = 0 (Pre-defined initial state)';
    if (currentStep === 1) return 'Base case 2: dp[1] = 1 (Pre-defined initial state)';
    const val1 = fibValues[currentStep - 1];
    const val2 = fibValues[currentStep - 2];
    const sum = fibValues[currentStep];
    return `Reusing subproblems: dp[${currentStep}] = dp[${currentStep - 1}] (${val1}) + dp[${currentStep - 2}] (${val2}) = ${sum}`;
  };

  return (
    <div className="dp-visualizer-card" aria-label="Dynamic Programming Interactive Visualizer">
      {/* Header */}
      <div className="dp-card-header">
        <div className="dp-header-left">
          <span className="dp-badge">Interactive Algorithm</span>
          <h3 className="dp-title">Dynamic Programming Visualizer</h3>
        </div>
        
        {/* Controls */}
        <div className="dp-controls">
          <button 
            type="button" 
            className="dp-btn-icon" 
            onClick={togglePlay}
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button 
            type="button" 
            className="dp-btn-icon" 
            onClick={handleReplay}
            title="Replay from start"
            aria-label="Restart animation"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Recurrence Formula */}
      <div className="dp-formula-row">
        <span className="formula-label">State Transition:</span>
        <code className="formula-code">dp[i] = dp[i-1] + dp[i-2]</code>
        <span className="formula-complexity">Time: O(N) | Space: O(N)</span>
      </div>

      {/* DP Table Grid */}
      <div className="dp-grid-wrapper">
        <div className="dp-table-grid">
          {fibValues.map((val, idx) => {
            const isComputed = idx <= currentStep;
            const isCurrent = idx === currentStep;
            const isSubproblem1 = currentStep >= 2 && idx === currentStep - 1;
            const isSubproblem2 = currentStep >= 2 && idx === currentStep - 2;

            let cellClass = 'dp-cell';
            if (isCurrent) cellClass += ' current-cell';
            else if (isSubproblem1 || isSubproblem2) cellClass += ' subproblem-cell';
            else if (isComputed) cellClass += ' completed-cell';

            return (
              <div key={idx} className={cellClass}>
                <span className="cell-index">i = {idx}</span>
                <span className="cell-value">
                  {isComputed ? val : '—'}
                </span>
                {isCurrent && <span className="cell-tag">Computing</span>}
                {(isSubproblem1 || isSubproblem2) && <span className="cell-tag sub">Source</span>}
                {isComputed && !isCurrent && !isSubproblem1 && !isSubproblem2 && (
                  <span className="cell-check"><CheckCircle2 size={11} /></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Status & Explanation */}
      <div className="dp-status-box">
        <div className="dp-status-indicator">
          <span className="status-dot-pulse"></span>
          <span className="dp-step-counter">Step {currentStep + 1} of {dpSize}</span>
        </div>
        <p className="dp-status-text">{getExplanation()}</p>
      </div>

      {/* Educational Note */}
      <div className="dp-footer-note">
        <Info size={14} className="note-icon" />
        <span>
          Dynamic Programming solves complex problems by breaking them into overlapping subproblems 
          and memoizing previously computed results to eliminate redundant calculations.
        </span>
      </div>
    </div>
  );
}
