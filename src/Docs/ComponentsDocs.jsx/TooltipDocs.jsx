import React from 'react';
import CodeHighlighter from '../../Codehigh/CodeHighlighter';

const TooltipDocs = () => {
  const installCommand = `npm install ezModule`;

  // Code examples
  const basicExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip content="This is a tooltip!">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Hover me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const advancedExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Tooltip on click!" 
      position="bottom" 
      trigger="click" 
      delay={300} 
      theme="light"
    >
      <button className="bg-green-500 text-white px-4 py-2 rounded">Click me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const customThemeExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Custom dark theme tooltip" 
      theme="dark"
    >
      <button className="bg-red-500 text-white px-4 py-2 rounded">Hover me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const positionExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8 flex space-x-8">
    <Tooltip content="Tooltip on top" position="top">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Top</button>
    </Tooltip>
    <Tooltip content="Tooltip on right" position="right">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Right</button>
    </Tooltip>
    <Tooltip content="Tooltip on bottom" position="bottom">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Bottom</button>
    </Tooltip>
    <Tooltip content="Tooltip on left" position="left">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Left</button>
    </Tooltip>
  </div>
);

export default App;`;

  const delayExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Tooltip with delay" 
      delay={500}
    >
      <button className="bg-purple-500 text-white px-4 py-2 rounded">Hover me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const focusTriggerExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Tooltip on focus" 
      trigger="focus"
    >
      <input type="text" className="border p-2 rounded" placeholder="Focus me" />
    </Tooltip>
  </div>
);

export default App;`;

  const clickTriggerExampleCode = `import React from 'react';
import { Tooltip } from 'ezModule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Tooltip on click" 
      trigger="click"
    >
      <button className="bg-teal-500 text-white px-4 py-2 rounded">Click me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const cssStylingCode = `.tooltip {
  position: absolute;
  padding: 0.5rem;
  background: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 0.875rem;
  white-space: nowrap;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.tooltip-visible {
  opacity: 1;
}

.tooltip-hidden {
  opacity: 0;
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-left {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
}

.tooltip-light {
  background: #f9f9f9;
  color: #333;
}

.tooltip-dark {
  background: #333;
  color: #fff;
}`;

  return (
    <div className='w-full'>
      <h1 className="text-2xl font-extrabold mb-6">Tooltip Component Documentation</h1>
      <p className="text-lg mb-6">
        The <code className="bg-gray-800 px-2 py-1 rounded">Tooltip</code> component from the <code className="bg-gray-800 px-2 py-1 rounded">ezModule</code> library provides a versatile way to display additional information when interacting with elements. This component supports various trigger events, positions, and themes, allowing for a highly customizable user experience.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Installation</h2>
      <p className="text-lg mb-4">
        To get started, install the <code className="bg-gray-800 px-2 py-1 rounded">ezModule</code> library using npm:
      </p>
      <CodeHighlighter language="bash" code={installCommand} />

      <h2 className="text-3xl font-semibold mb-4">Usage</h2>
      <p className="text-lg mb-4">
        Integrate the <code className="bg-gray-800 px-2 py-1 rounded">Tooltip</code> component into your React application with the following examples:
      </p>

      <h3 className="text-2xl font-semibold mb-2">Basic Example</h3>
      <p className="text-lg mb-4">
        Display a simple tooltip when hovering over a button:
      </p>
      <CodeHighlighter language="jsx" code={basicExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Advanced Example</h3>
      <p className="text-lg mb-4">
        Customize the tooltip position, trigger event, and theme:
      </p>
      <CodeHighlighter language="jsx" code={advancedExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Custom Theme Example</h3>
      <p className="text-lg mb-4">
        Apply a custom dark theme to the tooltip:
      </p>
      <CodeHighlighter language="jsx" code={customThemeExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Position Example</h3>
      <p className="text-lg mb-4">
        Show tooltips in different positions around a button:
      </p>
      <CodeHighlighter language="jsx" code={positionExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Delay Example</h3>
      <p className="text-lg mb-4">
        Implement a delay before the tooltip appears:
      </p>
      <CodeHighlighter language="jsx" code={delayExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Focus Trigger Example</h3>
      <p className="text-lg mb-4">
        Display a tooltip when focusing on an input field:
      </p>
      <CodeHighlighter language="jsx" code={focusTriggerExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Click Trigger Example</h3>
      <p className="text-lg mb-4">
        Toggle the tooltip visibility on button click:
      </p>
      <CodeHighlighter language="jsx" code={clickTriggerExampleCode} />

      <h2 className="text-3xl font-semibold mb-4">Props</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-800 px-2 py-1 rounded">Tooltip</code> component accepts the following props:
      </p>
      <table className="w-full sm:overflow-x-hidden overflow-x-scroll bg-gray-800 border border-gray-700 mb-8">
        <thead>
          <tr>
            <th className="p-4 border-b border-gray-700 text-left">Prop</th>
            <th className="p-4 border-b border-gray-700 text-left">Type</th>
            <th className="p-4 border-b border-gray-700 text-left">Default</th>
            <th className="p-4 border-b border-gray-700 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-700">content</td>
            <td className="p-4 border-b border-gray-700">string</td>
            <td className="p-4 border-b border-gray-700">""</td>
            <td className="p-4 border-b border-gray-700">Text or content to display inside the tooltip.</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700">position</td>
            <td className="p-4 border-b border-gray-700">"top"</td>
            <td className="p-4 border-b border-gray-700">"top"</td>
            <td className="p-4 border-b border-gray-700">Position of the tooltip relative to the target. Options: "top", "right", "bottom", "left".</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700">trigger</td>
            <td className="p-4 border-b border-gray-700">"hover"</td>
            <td className="p-4 border-b border-gray-700">"hover"</td>
            <td className="p-4 border-b border-gray-700">Event that triggers the tooltip. Options: "hover", "click", "focus".</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700">delay</td>
            <td className="p-4 border-b border-gray-700">number</td>
            <td className="p-4 border-b border-gray-700">0</td>
            <td className="p-4 border-b border-gray-700">Delay in milliseconds before showing the tooltip.</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-700">theme</td>
            <td className="p-4 border-b border-gray-700">"dark"</td>
            <td className="p-4 border-b border-gray-700">"dark"</td>
            <td className="p-4 border-b border-gray-700">Tooltip theme. Options: "dark", "light".</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl font-semibold mb-4">Custom Styling</h2>
      <p className="text-lg mb-4">
        You can customize the tooltip appearance by applying custom CSS classes:
      </p>
      <CodeHighlighter language="css" code={cssStylingCode} />
    </div>
  );
};

export default TooltipDocs;
  