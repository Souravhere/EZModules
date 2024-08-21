import React, { useEffect, useState } from 'react';

const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const AnimatedCounter = ({ start = 0, end = 100, duration = 2000, format = null, easing = easeOutExpo }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = easing(progress);
            const currentCount = Math.floor(start + (end - start) * easedProgress);
            setCount(currentCount);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [start, end, duration, easing]);

    const formatNumber = (num) => {
        if (format) {
            return format(num);
        }
        return num.toLocaleString(); // Default format (e.g., "1,234")
    };

    return (
        <span>{formatNumber(count)}</span>
    );
};

export default AnimatedCounter;
