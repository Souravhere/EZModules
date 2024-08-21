import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AnimatedCounter.css';

// Easing Functions
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInQuad = (t) => t * t;
const easeOutBounce = (t) => {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};

// Animation Styles
const animationStyles = {
  rollUp: 'roll-up',
  flip: 'flip',
  fadeIn: 'fade-in',
  slide: 'slide',
  scale: 'scale',
  rotate: 'rotate',
  bounce: 'bounce',
  expand: 'expand',
  wave: 'wave',
  blink: 'blink',
};

const AnimatedCounter = ({
  start = 0,
  end = 100,
  duration = 2000,
  format = null,
  easing = easeOutExpo,
  animation = 'fadeIn',
  theme = 'default',
  precision = 0,
  onStart,
  onComplete,
}) => {
  const [count, setCount] = useState(start);
  const [style, setStyle] = useState({});

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
        setStyle({ ...animationStyles[animation] });
        window.requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration, easing, animation, precision, onStart, onComplete]);

  const formatNumber = (num) => (format ? format(num) : num.toLocaleString());

  return (
    <span className={`animated-counter ${theme} ${animation}`}>
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
  animation: PropTypes.oneOf([
    'rollUp',
    'flip',
    'fadeIn',
    'slide',
    'scale',
    'rotate',
    'bounce',
    'expand',
    'wave',
    'blink'
  ]),
  theme: PropTypes.oneOf(['default', 'dark']),
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
  animation: 'fadeIn',
  theme: 'default',
  precision: 0,
};

export default AnimatedCounter;
