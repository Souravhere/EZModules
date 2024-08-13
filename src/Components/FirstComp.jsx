import React from 'react';
import './FirstComp.css'; // Import the CSS file for styling

function FirstComp({ title, content }) {
  return (
    <div className="first-comp">
      <h2 className="first-comp-title">{title}</h2>
      <p className="first-comp-content">{content}</p>
    </div>
  );
}

export default FirstComp;
