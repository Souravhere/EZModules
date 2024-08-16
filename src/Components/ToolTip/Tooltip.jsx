import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tooltip.css'; 

const Tooltip = ({
  children,
  content,
  position = 'top',
  trigger = 'hover',
  delay = 0,
  theme = 'dark',
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  // Handlers for showing and hiding the tooltip
  const showTooltip = () => {
    if (delay) {
      setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  };

  const hideTooltip = () => setVisible(false);

  // Choose event handlers based on the trigger prop
  const eventHandlers = {
    hover: {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    },
    focus: {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    },
    click: {
      onClick: () => setVisible(!visible),
    },
  };

  return (
    <div className="relative inline-block" {...eventHandlers[trigger]} {...props}>
      {children}
      {visible && (
        <div className={`tooltip tooltip-${position} tooltip-${theme} ${visible ? 'tooltip-visible' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  delay: PropTypes.number,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Tooltip;
