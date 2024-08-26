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

  // Example code blocks
  const basicExampleCode = `import React from 'react';
import { Tabs } from 'ezmodule';

const App = () => {
  const tabData = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];

  return (
    <div className="p-8">
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;`;

  const customStylesExampleCode = `import React from 'react';
import { Tabs } from 'ezmodule';

const App = () => {
  const tabData = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];

  return (
    <div className="p-8">
      <Tabs 
        tabs={tabData} 
        theme="custom"
        buttonStyles={{ backgroundColor: 'lightblue', color: 'white' }}
        activeButtonStyles={{ backgroundColor: 'darkblue', color: 'white' }}
        containerStyles={{ borderColor: 'lightgray' }}
      />
    </div>
  );
};

export default App;`;

  const verticalTabsExampleCode = `import React from 'react';
import { Tabs } from 'ezmodule';

const App = () => {
  const tabData = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];

  return (
    <div className="p-8">
      <Tabs 
        tabs={tabData}
        tabPosition="left"
      />
    </div>
  );
};

export default App;`;

  const dynamicTabsExampleCode = `import React, { useState } from 'react';
import { Tabs } from 'ezmodule';

const App = () => {
  const [tabs, setTabs] = useState([
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> }
  ]);

  const addTab = () => {
    setTabs([...tabs, { label: \`Tab \${tabs.length + 1}\`, content: \`Content for Tab \${tabs.length + 1}\`}]);
  };

  return (
    <div className="p-8">
      <Tabs tabs={tabs} />
      <button onClick={addTab} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Add Tab</button>
    </div>
  );
};

export default App;`;

  return (
    <div className='w-full text-gray-400'>
      <h1 className="text-3xl font-extrabold mb-6 text-blue-500">Tabs Component Documentation</h1>
      <p className="text-lg mb-6">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component from the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library provides a flexible way to organize content into multiple tabs. Tabs are commonly used in UI design to separate content by categories or views in a clean and compact manner.
      </p>

      <p className="text-lg mb-6">
        This documentation will walk you through the usage of the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component, from installation to advanced use cases such as customizing styles and adding dynamic tabs.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Live Demo</h2>
      <Tabs
        tabs={tabData}
        defaultActiveTab={0}
        tabPosition="top"
        theme="dark"
        transitionDuration="0.5s"
      />
      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Step 1: Installation</h2>
      <p className="text-lg mb-4">
        To get started with the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component, you first need to install the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> package. You can do this via npm by running the following command in your project directory:
      </p>
      <CodeHighlighter language="bash" code={installCommand} />
      <p className="text-lg mb-4">
        Once installed, you are ready to use the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component in your project.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Step 2: Basic Usage</h2>
      <p className="text-lg mb-4">
        The simplest way to use the <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component is by passing an array of objects that represent your tab labels and content. Here's a basic example:
      </p>
      <CodeHighlighter language="jsx" code={basicExampleCode} />
      <p className="text-lg mb-4">
        In this example:
        <ul className="list-disc ml-8">
          <li><code className="bg-gray-700 px-2 py-1 rounded">tabs</code>: An array where each object contains a <code className="bg-gray-700 px-2 py-1 rounded">label</code> for the tab header and <code className="bg-gray-700 px-2 py-1 rounded">content</code> that is displayed when the tab is active.</li>
        </ul>
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Step 3: Customizing Styles</h2>
      <p className="text-lg mb-4">
        You can customize the appearance of the tabs to match your application's design. For example, you can change the background color of the tabs, style the active tab differently, and even apply custom styles to the entire container. Here's an example demonstrating how to apply custom styles:
      </p>
      <CodeHighlighter language="jsx" code={customStylesExampleCode} />
      <p className="text-lg mb-4">
        In this example:
        <ul className="list-disc ml-8">
          <li><code className="bg-gray-700 px-2 py-1 rounded">buttonStyles</code>: Allows you to pass custom styles to all tabs.</li>
          <li><code className="bg-gray-700 px-2 py-1 rounded">activeButtonStyles</code>: Styles the currently active tab.</li>
          <li><code className="bg-gray-700 px-2 py-1 rounded">containerStyles</code>: Styles the tab container.</li>
        </ul>
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Step 4: Vertical Tabs</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component also supports vertical layouts, where tabs can be positioned to the left or right of the content. Here's an example of how to create vertically aligned tabs:
      </p>
      <CodeHighlighter language="jsx" code={verticalTabsExampleCode} />
      <p className="text-lg mb-4">
        In this example, the <code className="bg-gray-700 px-2 py-1 rounded">tabPosition</code> prop is set to <code className="bg-gray-700 px-2 py-1 rounded">"left"</code> to position the tabs on the left side. You can also set this to <code className="bg-gray-700 px-2 py-1 rounded">"right"</code> for right-side tabs.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Step 5: Adding Dynamic Tabs</h2>
      <p className="text-lg mb-4">
        In more advanced use cases, you may need to add or remove tabs dynamically based on user interaction. The following example demonstrates how to add new tabs on the fly using the <code className="bg-gray-700 px-2 py-1 rounded">useState</code> hook:
      </p>
      <CodeHighlighter language="jsx" code={dynamicTabsExampleCode} />
      <p className="text-lg mb-4">
        In this example:
        <ul className="list-disc ml-8">
          <li>We use the <code className="bg-gray-700 px-2 py-1 rounded">useState</code> hook to manage the state of the tabs.</li>
          <li>The <code className="bg-gray-700 px-2 py-1 rounded">addTab</code> function dynamically adds a new tab to the state whenever the "Add Tab" button is clicked.</li>
        </ul>
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Available Props</h2>
      <p className="text-lg mb-4">The <code className="bg-gray-700 px-2 py-1 rounded">Tabs</code> component accepts the following props to allow for customization and flexibility:</p>
      <ul className="list-disc ml-8 text-lg">
        <li><code className="bg-gray-700 px-2 py-1 rounded">tabs</code>: <span className="text-lg">Array of tab objects, each containing a <code className="bg-gray-700 px-2 py-1 rounded">label</code> and <code className="bg-gray-700 px-2 py-1 rounded">content</code>.</span></li>
        <li className='my-1'><code className="bg-gray-700 px-2 py-1 rounded">theme</code>: <span className="text-lg">The theme to use for the tab styling (e.g., "light", "dark", or custom).</span></li>
        <li className='my-1'><code className="bg-gray-700 px-2 py-1 rounded">tabPosition</code>: <span className="text-lg">Set the position of the tabs, either "top", "left", or "right".</span></li>
        <li className='my-1'><code className="bg-gray-700 px-2 py-1 rounded">buttonStyles</code>: <span className="text-lg">Custom styles for the tab buttons.</span></li>
        <li className='my-1'><code className="bg-gray-700 px-2 py-1 rounded">activeButtonStyles</code>: <span className="text-lg">Custom styles for the active tab button.</span></li>
        <li className='my-1'><code className="bg-gray-700 px-2 py-1 rounded">containerStyles</code>: <span className="text-lg">Custom styles for the tabs container.</span></li>
      </ul>

      <p className="text-lg mb-6">For more detailed examples, check the source code or experiment with the component to suit your needs. Happy coding!</p>
      <div className='w-full my-3 py-7'>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h2 className='font-semibold my-3 text-lg'>Previous Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='/docs/BreadcrumbDocs'>Breadcrumb Trail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsDocs;
