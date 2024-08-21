import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedCounter.css';

// Easing Functions
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInQuad = (t) => t * t;

// Counter Styles
const counterStyles = {
  numberRollUp: (progress) => ({ transform: `translateY(${-(1 - progress) * 100}%)` }),
  flipCounter: (progress) => ({ transform: `rotateX(${(1 - progress) * 90}deg)` }),
  fadeInCounter: (progress) => ({ opacity: progress }),
  slideCounter: (progress) => ({ transform: `translateY(${(1 - progress) * 100}%)` }),
  scaleCounter: (progress) => ({ transform: `scale(${progress})` }),
  rotatingCounter: (progress) => ({ transform: `rotate(${(1 - progress) * 360}deg)` }),
  bouncingCounter: (progress) => ({ transform: `translateY(${Math.sin(progress * Math.PI) * 10}px)` }),
  expandingCounter: (progress) => ({ transform: `scale(${1 + progress * 0.5})` }),
  waveCounter: (progress) => ({ transform: `translateY(${Math.sin(progress * 2 * Math.PI) * 10}px)` }),
  blinkingCounter: (progress) => ({ opacity: progress > 0.5 ? 1 : 0 }),
};

const AnimatedCounter = ({
  start = 0,
  end = 100,
  duration = 2000,
  format = null,
  easing = easeOutExpo,
  counterStyle = 'numberRollUp',
  theme = 'light',
  precision = 0,
  onStart,
  onComplete,
}) => {
  const [count, setCount] = useState(start);
  const [style, setStyle] = useState({ opacity: 1 });

  useEffect(() => {
    let startTimestamp = null;
    if (onStart) onStart();

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easing(progress);
      const currentCount = parseFloat((start + (end - start) * easedProgress).toFixed(precision));
      setCount(currentCount);

      if (progress < 1) {
        setStyle(counterStyles[counterStyle](easedProgress));
        window.requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration, easing, counterStyle, precision, onStart, onComplete]);

  const formatNumber = (num) => (format ? format(num) : num.toLocaleString());

  return (
    <span className={`animated-counter ${theme}`} style={style}>
      {formatNumber(count)}
    </span>
  );
};

// Prop Types
AnimatedCounter.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  format: PropTypes.func,
  easing: PropTypes.func,
  counterStyle: PropTypes.oneOf([
    'numberRollUp', 
    'flipCounter', 
    'fadeInCounter', 
    'slideCounter', 
    'scaleCounter', 
    'rotatingCounter', 
    'bouncingCounter', 
    'expandingCounter', 
    'waveCounter', 
    'blinkingCounter',
  ]),
  theme: PropTypes.oneOf(['light', 'dark']),
  precision: PropTypes.number,
  onStart: PropTypes.func,
  onComplete: PropTypes.func,
};

// Default Props
AnimatedCounter.defaultProps = {
  start: 0,
  end: 100,
  duration: 2000,
  easing: easeOutExpo,
  counterStyle: 'numberRollUp',
  theme: 'light',
  precision: 0,
};

export default AnimatedCounter;

