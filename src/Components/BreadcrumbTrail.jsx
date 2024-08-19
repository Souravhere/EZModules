import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadcrumbTrail = ({
  separator = '/',
  theme = 'light',
  textColor,
  fontSize = '10px',
  className = ''
}) => {
  const path = window.location.pathname.split('/').filter(Boolean);

  const generatePath = (index) => {
    return '/' + path.slice(0, index + 1).join('/');
  };

  // Determine text color based on theme or user preference
  const resolvedTextColor = textColor
    ? textColor
    : theme === 'dark'
    ? '#ffffff'
    : '#000000';

  const defaultStyles = {
    nav: {
      padding: '10px 20px',
      backgroundColor: 'transparent', // Transparent background
      display: 'flex',
      alignItems: 'center',
      margin: '5px 0', // 5px vertical margin
    },
    ol: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    li: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 0px',
    },
    link: {
      textDecoration: 'none',
      color: resolvedTextColor,
      fontSize: fontSize,
    },
    current: {
      color: resolvedTextColor,
      fontWeight: '600',
      fontSize: fontSize,
    },
    separator: {
      margin: '0 5px',
      color: resolvedTextColor,
      fontSize: fontSize,
    }
  };

  return (
    <nav
      aria-label="breadcrumb"
      style={defaultStyles.nav}
      className={className}
    >
      <ol style={defaultStyles.ol}>
        {path.map((segment, index) => {
          const isLast = index === path.length - 1;
          return (
            <li key={index} style={defaultStyles.li}>
              {!isLast ? (
                <Link
                  to={generatePath(index)}
                  title={segment}
                  style={defaultStyles.link}
                >
                  {segment}
                </Link>
              ) : (
                <span title={segment} style={defaultStyles.current}>
                  {segment}
                </span>
              )}
              {!isLast && (
                <span style={defaultStyles.separator}>{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

BreadcrumbTrail.propTypes = {
  separator: PropTypes.string, // Customizable separator
  theme: PropTypes.oneOf(['light', 'dark']), // Light or dark theme
  textColor: PropTypes.string, // Custom text color
  fontSize: PropTypes.string, // Custom font size
  className: PropTypes.string, // Additional CSS class for styling
};

export default BreadcrumbTrail;
