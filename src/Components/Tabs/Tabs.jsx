import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabls.css'

const Tabs = ({ tabs, defaultActiveTab = 0, tabPosition = 'top' }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabs = () => {
    return (
      <div className={`tabs-${tabPosition}`}>
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-content">{tabs[activeTab].content}</div>
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
};

export default Tabs;
