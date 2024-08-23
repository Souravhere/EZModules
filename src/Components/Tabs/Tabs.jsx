import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css'

const Tabs = ({
  tabs,
  defaultActiveTab = 0,
  tabPosition = 'top',
  theme = 'light',
  buttonStyles = {},
  activeButtonStyles = {},
  containerStyles = {},
  contentStyles = {},
  transitionDuration = '0.5s',
  transitionEffect = 'fade',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getThemeStyles = () => {
    const themes = {
      light: {
        buttonBackgroundColor: '#f0f0f0',
        buttonColor: '#333',
        buttonBorderColor: '#e0e0e0',
        buttonHoverBackgroundColor: '#e0e0e0',
        buttonHoverColor: '#333',
        activeButtonBackgroundColor: '#007bff',
        activeButtonColor: '#fff',
        containerBorderColor: '#e0e0e0',
        contentBackgroundColor: '#fff',
        contentColor: '#333',
      },
      dark: {
        buttonBackgroundColor: '#333',
        buttonColor: '#f0f0f0',
        buttonBorderColor: '#444',
        buttonHoverBackgroundColor: '#444',
        buttonHoverColor: '#f0f0f0',
        activeButtonBackgroundColor: '#007bff',
        activeButtonColor: '#fff',
        containerBorderColor: '#444',
        contentBackgroundColor: '#222',
        contentColor: '#f0f0f0',
      },
      custom: {
        buttonBackgroundColor: buttonStyles.backgroundColor || '#f0f0f0',
        buttonColor: buttonStyles.color || '#333',
        buttonBorderColor: buttonStyles.borderColor || '#e0e0e0',
        buttonHoverBackgroundColor: buttonStyles.hoverBackgroundColor || '#e0e0e0',
        buttonHoverColor: buttonStyles.hoverColor || '#333',
        activeButtonBackgroundColor: activeButtonStyles.backgroundColor || '#007bff',
        activeButtonColor: activeButtonStyles.color || '#fff',
        containerBorderColor: containerStyles.borderColor || '#e0e0e0',
        contentBackgroundColor: contentStyles.backgroundColor || '#fff',
        contentColor: contentStyles.color || '#333',
      },
    };
    return themes[theme] || themes.light;
  };

  const themeStyles = getThemeStyles();

  const renderTabs = () => {
    return (
      <div
        className={`tabs-${tabPosition}`}
        style={{ display: 'flex', flexDirection: tabPosition === 'left' || tabPosition === 'right' ? 'row' : 'column', ...containerStyles }}
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
                marginRight: tabPosition === 'left' || tabPosition === 'right' ? '8px' : '0',
                marginBottom: tabPosition === 'left' || tabPosition === 'right' ? '8px' : '0',
                backgroundColor: activeTab === index ? themeStyles.activeButtonBackgroundColor : themeStyles.buttonBackgroundColor,
                color: activeTab === index ? themeStyles.activeButtonColor : themeStyles.buttonColor,
                border: `1px solid ${themeStyles.buttonBorderColor}`,
                borderRadius: buttonStyles.borderRadius || '4px',
                cursor: 'pointer',
                transition: `background-color ${transitionDuration}, color ${transitionDuration}, transform ${transitionDuration}`,
                ...buttonStyles,
                ...(activeTab === index ? activeButtonStyles : {}),
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = themeStyles.buttonHoverBackgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = activeTab === index ? themeStyles.activeButtonBackgroundColor : themeStyles.buttonBackgroundColor}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={`tabs-content ${transitionEffect}`}
          style={{
            padding: '16px',
            border: `1px solid ${themeStyles.containerBorderColor}`,
            borderRadius: '4px',
            backgroundColor: themeStyles.contentBackgroundColor,
            color: themeStyles.contentColor,
            transition: `opacity ${transitionDuration}, transform ${transitionDuration}`,
            ...contentStyles,
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-content ${activeTab === index ? 'active' : ''}`}
              style={{
                opacity: activeTab === index ? 1 : 0,
                transform: activeTab === index ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity ${transitionDuration}, transform ${transitionDuration}`,
                display: activeTab === index ? 'block' : 'none',
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
  buttonStyles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
  }),
  activeButtonStyles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  containerStyles: PropTypes.shape({
    borderColor: PropTypes.string,
  }),
  contentStyles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  transitionDuration: PropTypes.string,
  transitionEffect: PropTypes.oneOf(['fade', 'slide']),
};

export default Tabs;
