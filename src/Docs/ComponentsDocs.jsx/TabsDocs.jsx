import React from 'react';
import CodeHighlighter from '../../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';

const TabsDocs = () => {
  const installCommand = `npm install ezmodule`;

  // Code examples
  const basicExampleCode = `import React, { useState } from 'react';
import { Tabs, Tab } from 'ezmodule';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-8">
      <Tabs activeTab={activeTab} onChange={setActiveTab}>
        <Tab label="Tab 1">
          <div>Content for Tab 1</div>
        </Tab>
        <Tab label="Tab 2">
          <div>Content for Tab 2</div>
        </Tab>
        <Tab label="Tab 3">
          <div>Content for Tab 3</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;`;

  const advancedExampleCode = `import React, { useState } from 'react';
import { Tabs, Tab } from 'ezmodule';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-8">
      <Tabs 
        activeTab={activeTab} 
        onChange={setActiveTab}
        tabClassName="custom-tab"
        activeTabClassName="active-custom-tab"
        tabContentClassName="custom-tab-content"
      >
        <Tab label="Custom Tab 1">
          <div>Custom content for Tab 1</div>
        </Tab>
        <Tab label="Custom Tab 2">
          <div>Custom content for Tab 2</div>
        </Tab>
        <Tab label="Custom Tab 3">
          <div>Custom content for Tab 3</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;`;

  const dynamicTabsExampleCode = `import React, { useState } from 'react';
import { Tabs, Tab } from 'ezmodule';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { label: 'Tab A', content: 'Content A' },
    { label: 'Tab B', content: 'Content B' },
    { label: 'Tab C', content: 'Content C' },
  ];

  return (
    <div className="p-8">
      <Tabs activeTab={activeTab} onChange={setActiveTab}>
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.label}>
            <div>{tab.content}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;`;

  return (
    <div className='w-full text-gray-400'>
      <h1 className="text-2xl font-extrabold mb-6 text-blue-500">Tabs Component Documentation</h1>
      <img className='my-5 rounded-lg' src="https://github.com/Souravhere/EZModules/blob/main/SourceImg/Tabs-view.png?raw=true" alt="Tabs component view" />
      <p className="text-lg mb-6">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component from the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library is a versatile UI element that allows for the organization of content into multiple sections, each accessible via a tab. This is particularly useful for structuring large amounts of related content in a compact and user-friendly manner.
      </p>
      <p className="text-lg mb-6">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component is designed to be highly customizable, supporting various styles and configurations. It allows developers to create both simple and complex tabbed interfaces with ease.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Installation</h2>
      <p className="text-lg mb-4">
        To start using the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component, you need to install the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library. This can be done using npm:
      </p>
      <CodeHighlighter language="bash" code={installCommand} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Usage</h2>
      <p className="text-lg mb-4">
        Below are examples demonstrating how to implement the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component in your projects.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Basic Example</h3>
      <p className="text-lg mb-4">
        The basic example shows how to create a simple tabbed interface with three tabs. Each tab displays different content when selected:
      </p>
      <CodeHighlighter language="jsx" code={basicExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Advanced Example</h3>
      <p className="text-lg mb-4">
        In this advanced example, the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component is customized with additional classes to style the tabs and content. This allows for a more tailored appearance:
      </p>
      <CodeHighlighter language="jsx" code={advancedExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Dynamic Tabs Example</h3>
      <p className="text-lg mb-4">
        This example demonstrates how to create a dynamic tabbed interface where tabs and their content are generated based on an array of data. This is particularly useful when the number of tabs or their content is not known in advance:
      </p>
      <CodeHighlighter language="jsx" code={dynamicTabsExampleCode} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Props</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component provides several props that allow you to customize its behavior and appearance. Below is a list of the key props available:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">activeTab</code>: The index of the currently active tab. Default is <code className="bg-gray-700 px-2 py-1 rounded">0</code>.
        </li>
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">onChange</code>: A callback function that is triggered when a tab is selected.
        </li>
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">tabClassName</code>: A string of class names to apply to each tab for styling.
        </li>
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">activeTabClassName</code>: A string of class names to apply to the active tab.
        </li>
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">tabContentClassName</code>: A string of class names to apply to the tab content for styling.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Custom Styles</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component is highly customizable, allowing you to apply custom styles to match your application's design. You can easily modify the appearance of both the tabs and the content.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Conclusion</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component from the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library is a powerful tool for organizing content in a user-friendly manner. Its flexibility and ease of use make it an excellent choice for developers looking to enhance the UI/UX of their applications.
      </p>
      <p className="text-lg mb-4">
        For more details on usage and advanced configurations, check out the official <Link to="/documentation">documentation</Link>.
      </p>
    </div>
  );
};

export default TabsDocs;
