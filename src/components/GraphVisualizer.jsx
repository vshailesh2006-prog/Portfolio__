import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, GitBranch, Layers, Info } from 'lucide-react';

export default function GraphVisualizer() {
  const [algorithm, setAlgorithm] = useState('BFS'); // 'BFS' or 'DFS'
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  // Graph Definition (7 nodes, coordinates inside a 420x240 SVG viewbox)
  const nodes = [
    { id: 'A', x: 210, y: 38, label: 'A (Start)' },
    { id: 'B', x: 120, y: 110, label: 'B' },
    { id: 'C', x: 300, y: 110, label: 'C' },
    { id: 'D', x: 65, y: 195, label: 'D' },
    { id: 'E', x: 165, y: 195, label: 'E' },
    { id: 'F', x: 265, y: 195, label: 'F' },
    { id: 'G', x: 355, y: 195, label: 'G' }
  ];

  const edges = [
    { u: 'A', v: 'B' },
    { u: 'A', v: 'C' },
    { u: 'B', v: 'D' },
    { u: 'B', v: 'E' },
    { u: 'C', v: 'E' },
    { u: 'C', v: 'F' },
    { u: 'C', v: 'G' }
  ];

  // Pre-calculated steps for BFS and DFS
  const bfsSteps = [
    { current: 'A', visited: ['A'], ds: ['B', 'C'], note: 'Enqueue neighbors B and C. Visiting Node A.' },
    { current: 'B', visited: ['A', 'B'], ds: ['C', 'D', 'E'], note: 'Dequeued B. Enqueued unvisited neighbors D and E.' },
    { current: 'C', visited: ['A', 'B', 'C'], ds: ['D', 'E', 'F', 'G'], note: 'Dequeued C. Enqueued unvisited neighbors F and G.' },
    { current: 'D', visited: ['A', 'B', 'C', 'D'], ds: ['E', 'F', 'G'], note: 'Dequeued D (Leaf node). No unvisited neighbors.' },
    { current: 'E', visited: ['A', 'B', 'C', 'D', 'E'], ds: ['F', 'G'], note: 'Dequeued E. Connected neighbors already visited.' },
    { current: 'F', visited: ['A', 'B', 'C', 'D', 'E', 'F'], ds: ['G'], note: 'Dequeued F (Leaf node). No unvisited neighbors.' },
    { current: 'G', visited: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], ds: [], note: 'Dequeued G. Traversal complete! Level-order explored.' }
  ];

  const dfsSteps = [
    { current: 'A', visited: ['A'], ds: ['A'], note: 'Pushed A to Call Stack. Exploring first unvisited branch.' },
    { current: 'B', visited: ['A', 'B'], ds: ['A', 'B'], note: 'Branching deeper into B. Pushed B to Call Stack.' },
    { current: 'D', visited: ['A', 'B', 'D'], ds: ['A', 'B', 'D'], note: 'Reached leaf D. Backtracking to node B.' },
    { current: 'E', visited: ['A', 'B', 'E'], ds: ['A', 'B', 'E'], note: 'Exploring branch E from B. Cross-edge to C detected.' },
    { current: 'C', visited: ['A', 'B', 'E', 'C'], ds: ['A', 'B', 'E', 'C'], note: 'Visiting C via E. Branching further into C\'s children.' },
    { current: 'F', visited: ['A', 'B', 'E', 'C', 'F'], ds: ['A', 'B', 'E', 'C', 'F'], note: 'Reached leaf F. Backtracking to C.' },
    { current: 'G', visited: ['A', 'B', 'E', 'C', 'G'], ds: [], note: 'Visited G. All reachable nodes explored via Depth-First Search.' }
  ];

  const currentSteps = algorithm === 'BFS' ? bfsSteps : dfsSteps;
  const activeStep = currentSteps[stepIndex] || currentSteps[0];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStepIndex((prev) => {
          if (prev >= currentSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSteps.length]);

  const handleReplay = () => {
    setStepIndex(0);
    setIsPlaying(true);
  };

  const toggleAlgorithm = (algo) => {
    setAlgorithm(algo);
    setStepIndex(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (stepIndex >= currentSteps.length - 1) {
      setStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Helper to get node position by ID
  const getNodePos = (id) => nodes.find((n) => n.id === id);

  return (
    <div className="graph-visualizer-card" aria-label="Graph Traversal Interactive Visualizer">
      {/* Card Header with Algorithm Switch */}
      <div className="graph-card-header">
        <div className="graph-header-left">
          <span className="graph-badge">Graph Algorithm</span>
          <h3 className="graph-title">Graph Traversal Visualizer</h3>
        </div>

        {/* Algorithm Switcher (BFS vs DFS) */}
        <div className="graph-switch-group">
          <button 
            type="button" 
            className={`algo-switch-btn ${algorithm === 'BFS' ? 'active' : ''}`}
            onClick={() => toggleAlgorithm('BFS')}
          >
            BFS (Queue)
          </button>
          <button 
            type="button" 
            className={`algo-switch-btn ${algorithm === 'DFS' ? 'active' : ''}`}
            onClick={() => toggleAlgorithm('DFS')}
          >
            DFS (Stack)
          </button>

          <div className="graph-playback-controls">
            <button 
              type="button" 
              className="dp-btn-icon" 
              onClick={togglePlay}
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button 
              type="button" 
              className="dp-btn-icon" 
              onClick={handleReplay}
              title="Restart traversal"
              aria-label="Restart traversal"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Traversal SVG Canvas */}
      <div className="graph-canvas-wrap">
        <svg viewBox="0 0 420 240" className="graph-svg" role="img" aria-label="Graph representation">
          {/* Edges */}
          {edges.map((e, idx) => {
            const uPos = getNodePos(e.u);
            const vPos = getNodePos(e.v);
            
            // Check if both nodes are visited
            const isTraversed = 
              activeStep.visited.includes(e.u) && 
              activeStep.visited.includes(e.v);

            return (
              <line
                key={idx}
                x1={uPos.x}
                y1={uPos.y}
                x2={vPos.x}
                y2={vPos.y}
                className={`graph-edge ${isTraversed ? 'edge-active' : 'edge-idle'}`}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isCurrent = activeStep.current === node.id;
            const isVisited = activeStep.visited.includes(node.id);

            let nodeClass = 'graph-node';
            if (isCurrent) nodeClass += ' node-current';
            else if (isVisited) nodeClass += ' node-visited';
            else nodeClass += ' node-unexplored';

            return (
              <g key={node.id} className={nodeClass} transform={`translate(${node.x}, ${node.y})`}>
                <circle r={17} className="node-circle" />
                <text textAnchor="middle" dy=".35em" className="node-text">
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Traversal Status & Queue/Stack display */}
      <div className="graph-info-grid">
        <div className="graph-status-block">
          <div className="status-label-row">
            <span className="status-indicator-dot"></span>
            <span className="active-status-label">
              Visiting: <strong>Node {activeStep.current}</strong>
            </span>
          </div>
          <p className="status-note">{activeStep.note}</p>
        </div>

        <div className="graph-data-structure-block">
          <div className="ds-header">
            <span className="ds-title">
              {algorithm === 'BFS' ? 'FIFO Queue State' : 'LIFO Call Stack State'}:
            </span>
            <span className="ds-content">
              {activeStep.ds.length > 0 ? `[ ${activeStep.ds.join(', ')} ]` : '[ Empty ]'}
            </span>
          </div>

          <div className="visited-order-row">
            <span className="visited-label">Visited Order:</span>
            <span className="visited-sequence">
              {activeStep.visited.join(' → ')}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Educational Note */}
      <div className="dp-footer-note">
        <Info size={14} className="note-icon" />
        <span>
          {algorithm === 'BFS' 
            ? 'Breadth-First Search (BFS) explores all neighbor vertices at the present depth before moving to the vertices at the next depth level using a Queue.' 
            : 'Depth-First Search (DFS) explores as far as possible along each branch before backtracking using a Call Stack or recursion.'}
        </span>
      </div>
    </div>
  );
}
