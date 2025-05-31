import React, { useEffect, useRef, useState } from 'react';

const AnimatedArrow = () => {
  const pathRef = useRef(null);
  const [showArrowhead, setShowArrowhead] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Force reflow to apply initial dashoffset
    path.getBoundingClientRect();

    // Start the animation
    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = '0';

    // Show arrowhead after animation + 0.2s delay
    const timer = setTimeout(() => {
      setShowArrowhead(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="3"
          refY="4.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>

      <path
        ref={pathRef}
        d="M10 100 C 60 20, 140 180, 190 100 S 260 120, 290 80"
        stroke="#7ueys8"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={showArrowhead ? 'url(#arrowhead)' : ''}
      />
    </svg>
  );
};

export default AnimatedArrow;
