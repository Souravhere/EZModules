// DefaultDocsContent.jsx
import React from 'react';

const DefaultDocsContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Documentation</h1>
      <p className="text-lg mb-4">Select a component from the sidebar to view its documentation.</p>
      <p className="text-sm text-gray-500">Use the navigation links to explore the available components and their usage details.</p>
    </div>
  );
};

export default DefaultDocsContent;
