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
  transitionDuration = '0.3s',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getThemeStyles = () => {
    const themes = {
      light: {
        backgroundColor: '#f0f0f000',
        activeBackgroundColor: '#f0f0f000',
        activeColor: '#3b82f680',
        borderColor: '#f0f0f000',
        color: '#fff',
        fontWeight:'bold',
        borderRadius: '8px'
      },
      dark: {
        backgroundColor: '#f0f0f000',
        activeBackgroundColor: '#3b82f680',
        activeColor: '#fff',
        borderColor: '#444',
        color: '#f0f0f0',
        borderRadius: '8px'
      },
      custom: {
        backgroundColor: buttonStyles.backgroundColor || '#f0f0f0',
        activeBackgroundColor: activeButtonStyles.backgroundColor || '#007bff',
        activeColor: activeButtonStyles.color || '#fff',
        borderColor: containerStyles.borderColor || '#e0e0e0',
        color: buttonStyles.color || '#333',
        borderRadius: buttonStyles.borderRadius || '4px',
        hoverBackgroundColor: buttonStyles.hoverBackgroundColor || 'rgba(0, 123, 255, 0.1)',
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
                padding: '4px 8px',
                margin: '8px',
                marginBottom: tabPosition === 'left' || tabPosition === 'right' ? '8px' : '8px',
                backgroundColor: activeTab === index ? themeStyles.activeBackgroundColor : 'transparent',
                color: activeTab === index ? themeStyles.activeColor : themeStyles.color,
                border: `1px solid ${themeStyles.borderColor}`,
                borderRadius: themeStyles.borderRadius,
                cursor: 'pointer',
                transition: `background-color ${transitionDuration}, color ${transitionDuration}, transform ${transitionDuration}`,
                margin: '0 4px',
                '&:hover': {
                  backgroundColor: themeStyles.hoverBackgroundColor,
                },
                ...buttonStyles,
                ...(activeTab === index ? activeButtonStyles : {}),
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className="tabs-content"
          style={{
            padding: '16px',
            margin: '8px',
            border: `1px solid ${themeStyles.borderColor}`,
            borderRadius: themeStyles.borderRadius,
            backgroundColor: '#f0f0f000',
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
                transform: activeTab === index ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity ${transitionDuration} ease-in-out, transform ${transitionDuration} ease-in-out`,
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
};

export default Tabs;
