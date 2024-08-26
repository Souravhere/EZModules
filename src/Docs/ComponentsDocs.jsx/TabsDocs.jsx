import React from 'react';
import CodeHighlighter from '../../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';
import Tabs from '../../Components/Tabs/Tabs';

const TabsDocs = () => {
    const tabData = [
        {
          label: 'Tab 1',
          content: <div>Content for Tab 1</div>,
        },
        {
          label: 'Tab 2',
          content: <div>Content for Tab 2</div>,
        },
        {
          label: 'Tab 3',
          content: <div>Content for Tab 3</div>,
        },
        {
          label: 'Tab 4',
          content: <div>Content for Tab 4</div>,
        },
      ];
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

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Live Demo</h2>
      <p className="text-lg mb-4">
        Here are live examples of the Tabs component in action. You can interact with the demos to see how the Tabs work:
      </p>
      <div className="mb-8">
      <Tabs
        tabs={tabData}
        defaultActiveTab={0}
        tabPosition="top"
        theme="dark"
        // buttonStyles={{
        //   backgroundColor: 'transparent',
        //   color: '#333',
        //   borderRadius: '8px',
        //   hoverBackgroundColor: 'rgba(0, 123, 255, 0.2)',
        // }}
        // activeButtonStyles={{
        //   backgroundColor: '#007bff',
        //   color: '#fff',
        // }}
        // containerStyles={{ borderColor: '#ccc' }}
        // contentStyles={{ backgroundColor: '#fff', color: '#333' }}
        transitionDuration="0.4s"
      />
      </div>

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
          <code className="bg-gray-700 px-2 py-1 rounded">activeTabClassName</code>: A string of class names to apply to the active tab for styling.
        </li>
        <li>
          <code className="bg-gray-700 px-2 py-1 rounded">tabContentClassName</code>: A string of class names to apply to the content container of each tab for styling.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Additional Resources</h2>
      <table className="table-auto w-full text-left mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-600 text-lg">Prop</th>
            <th className="px-4 py-2 border border-gray-600 text-lg">Type</th>
            <th className="px-4 py-2 border border-gray-600 text-lg">Default</th>
            <th className="px-4 py-2 border border-gray-600 text-lg">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-600">activeTab</td>
            <td className="px-4 py-2 border border-gray-600">number</td>
            <td className="px-4 py-2 border border-gray-600">0</td>
            <td className="px-4 py-2 border border-gray-600">The index of the currently active tab.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-600">onChange</td>
            <td className="px-4 py-2 border border-gray-600">function</td>
            <td className="px-4 py-2 border border-gray-600">undefined</td>
            <td className="px-4 py-2 border border-gray-600">Callback function triggered when a tab is selected. It receives the index of the selected tab as an argument.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-600">tabClassName</td>
            <td className="px-4 py-2 border border-gray-600">string</td>
            <td className="px-4 py-2 border border-gray-600">""</td>
            <td className="px-4 py-2 border border-gray-600">Custom class name(s) applied to each tab for styling purposes.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-600">activeTabClassName</td>
            <td className="px-4 py-2 border border-gray-600">string</td>
            <td className="px-4 py-2 border border-gray-600">""</td>
            <td className="px-4 py-2 border border-gray-600">Custom class name(s) applied to the active tab for styling purposes.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-600">tabContentClassName</td>
            <td className="px-4 py-2 border border-gray-600">string</td>
            <td className="px-4 py-2 border border-gray-600">""</td>
            <td className="px-4 py-2 border border-gray-600">Custom class name(s) applied to the content area of each tab for styling purposes.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Conclusion</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component is a powerful tool for organizing content into a clean, user-friendly interface. Whether you’re building a simple website or a complex web application, the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component offers the flexibility and ease of use you need.
      </p>
    </div>
  );
};

export default TabsDocs;
