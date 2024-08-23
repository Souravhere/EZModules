import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  tabs,
  defaultActiveTab = 0,
  tabPosition = 'top',
  theme = 'light',
  buttonStyles = {},
  activeButtonStyles = {},
  containerStyles = {},
  contentStyles = {},
  transitionDuration = '0.4s',
  transitionEffect = 'fade',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getThemeStyles = () => {
    const themes = {
      light: {
        backgroundColor: '#f0f0f0',
        activeBackgroundColor: '#007bff',
        activeColor: '#fff',
        borderColor: '#e0e0e0',
        color: '#333',
      },
      dark: {
        backgroundColor: '#333',
        activeBackgroundColor: '#007bff',
        activeColor: '#fff',
        borderColor: '#444',
        color: '#f0f0f0',
      },
      custom: {
        backgroundColor: buttonStyles.backgroundColor || '#f0f0f0',
        activeBackgroundColor: activeButtonStyles.backgroundColor || '#007bff',
        activeColor: activeButtonStyles.color || '#fff',
        borderColor: containerStyles.borderColor || '#e0e0e0',
        color: buttonStyles.color || '#333',
        borderRadius: buttonStyles.borderRadius || '4px',
        hoverBackgroundColor: activeButtonStyles.hoverBackgroundColor || '#0056b3',
        hoverColor: activeButtonStyles.hoverColor || '#fff',
      },
    };
    return themes[theme] || themes.light;
  };

  const themeStyles = getThemeStyles();

  const renderTabs = () => {
    return (
      <div
        className={`tabs-${tabPosition}`}
        style={{
          display: 'flex',
          flexDirection: tabPosition === 'left' || tabPosition === 'right' ? 'row' : 'column',
          ...containerStyles,
        }}
      >
        <div
          className="tabs-header"
          style={{
            display: 'flex',
            flexDirection: tabPosition === 'left' || tabPosition === 'right' ? 'column' : 'row',
            marginBottom: tabPosition === 'bottom' ? '16px' : '0',
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              style={{
                padding: '8px 16px',
                marginRight: tabPosition === 'left' || tabPosition === 'right' ? '0' : '8px',
                marginBottom: tabPosition === 'left' || tabPosition === 'right' ? '8px' : '0',
                backgroundColor: activeTab === index ? themeStyles.activeBackgroundColor : themeStyles.backgroundColor,
                color: activeTab === index ? themeStyles.activeColor : themeStyles.color,
                border: `1px solid ${themeStyles.borderColor}`,
                borderRadius: themeStyles.borderRadius,
                cursor: 'pointer',
                transition: `background-color ${transitionDuration}, color ${transitionDuration}, transform ${transitionDuration}`,
                ...buttonStyles,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeStyles.hoverBackgroundColor;
                e.currentTarget.style.color = themeStyles.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = activeTab === index ? themeStyles.activeBackgroundColor : themeStyles.backgroundColor;
                e.currentTarget.style.color = activeTab === index ? themeStyles.activeColor : themeStyles.color;
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={`tabs-content ${transitionEffect}`}
          style={{
            padding: '16px',
            border: `1px solid ${themeStyles.borderColor}`,
            borderRadius: '4px',
            backgroundColor: '#fff',
            transition: `opacity ${transitionDuration}, transform ${transitionDuration}`,
            ...contentStyles,
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-content ${activeTab === index ? 'active' : ''}`}
              style={{
                display: activeTab === index ? 'block' : 'none',
                opacity: activeTab === index ? 1 : 0,
                transform: activeTab === index ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity ${transitionDuration}, transform ${transitionDuration}`,
              }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="tabs-container">{renderTabs()}</div>;
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActiveTab: PropTypes.number,
  tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  theme: PropTypes.oneOf(['light', 'dark', 'custom']),
  buttonStyles: PropTypes.object,
  activeButtonStyles: PropTypes.object,
  containerStyles: PropTypes.object,
  contentStyles: PropTypes.object,
  transitionDuration: PropTypes.string,
  transitionEffect: PropTypes.oneOf(['fade', 'slide']),
};

export default Tabs;
