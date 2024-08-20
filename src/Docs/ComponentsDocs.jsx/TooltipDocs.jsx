import React from 'react';
import CodeHighlighter from '../../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';

const TooltipDocs = () => {
  const installCommand = `npm install ezmodule`;

  // Code examples
  const basicExampleCode = `import React from 'react';
import { Tooltip } from 'ezmodule';

const App = () => (
  <div className="p-8">
    <Tooltip content="This is a tooltip!">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Hover me</button>
    </Tooltip>
  </div>
);

export default App;`;

  const advancedExampleCode = `import React from 'react';
import { Tooltip } from 'ezmodule';

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
import { Tooltip } from 'ezmodule';

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
import { Tooltip } from 'ezmodule';

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
import { Tooltip } from 'ezmodule';

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
import { Tooltip } from 'ezmodule';

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
import { Tooltip } from 'ezmodule';

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

  const customStylesExampleCode = `import React from 'react';
import { Tooltip } from 'ezmodule';

const App = () => (
  <div className="p-8">
    <Tooltip 
      content="Styled tooltip" 
      customStyles={{
        backgroundColor: '#222',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '4px',
        padding: '8px',
      }}
    >
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Hover me</button>
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
      <h1 className="text-2xl font-extrabold mb-6 text-orange-400">Tooltip Component Documentation</h1>
      <img className='my-5 rounded-lg' src="https://github.com/Souravhere/EZModules/blob/main/SourceImg/Tootip-view.png?raw=true" alt="" />
      <p className="text-lg mb-6">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component from the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library is designed to provide additional information to users in a subtle, yet effective way. It is ideal for adding context or descriptions to various elements in your UI without cluttering the interface.
      </p>
      <p className="text-lg mb-6">
        Tooltips are highly versatile and can be customized to fit a wide range of use cases. Whether you need a simple tooltip that appears on hover or a more complex one that triggers on click or focus, the <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component has you covered. The component also supports various positions, delay options, themes, and even custom styling to match your application's design.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Installation</h2>
      <p className="text-lg mb-4">
        To integrate the <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component into your project, you'll first need to install the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library. This can be easily done via npm:
      </p>
      <CodeHighlighter language="bash" code={installCommand} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Usage</h2>
      <p className="text-lg mb-4">
        Below are several examples demonstrating how to use the <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component in different scenarios. These examples highlight the component's flexibility and ease of use.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Basic Example</h3>
      <p className="text-lg mb-4">
        The following example shows how to display a simple tooltip when hovering over a button. This is the most common use case for tooltips:
      </p>
      <CodeHighlighter language="jsx" code={basicExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Advanced Example</h3>
      <p className="text-lg mb-4">
        In more complex situations, you may want to customize the tooltip's position, trigger event, and appearance. The example below demonstrates how to create a tooltip that appears on click, is positioned at the bottom, and uses a light theme:
      </p>
      <CodeHighlighter language="jsx" code={advancedExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Custom Theme Example</h3>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component supports multiple themes. Here’s an example of applying a dark theme to the tooltip:
      </p>
      <CodeHighlighter language="jsx" code={customThemeExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Position Example</h3>
      <p className="text-lg mb-4">
        You can position the tooltip relative to the target element in four different ways: top, right, bottom, and left. The example below shows how to use each of these positions:
      </p>
      <CodeHighlighter language="jsx" code={positionExampleCode} />

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Delay Example</h3>
      <p className="text-lg mb-4">
        If you want to add a delay before showing the tooltip, you can use the <code className="bg-gray-700 px-2 py-1 rounded">delay</code> prop. This is useful in cases where you want to avoid showing tooltips too quickly, such as when users are moving their cursor across multiple elements:
      </p>
      <CodeHighlighter language="jsx" code={delayExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Focus Trigger Example</h3>
      <p className="text-lg mb-4">
        The tooltip can also be triggered by focusing on an element, such as an input field. This is particularly useful for form validation or providing additional guidance on how to fill out a form field:
      </p>
      <CodeHighlighter language="jsx" code={focusTriggerExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Click Trigger Example</h3>
      <p className="text-lg mb-4">
        In some cases, you might want the tooltip to appear when the user clicks on an element. This can be achieved by setting the <code className="bg-gray-700 px-2 py-1 rounded">trigger</code> prop to <code className="bg-gray-700 px-2 py-1 rounded">"click"</code>:
      </p>
      <CodeHighlighter language="jsx" code={clickTriggerExampleCode} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Custom Styles</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component also allows for custom styling through the <code className="bg-gray-700 px-2 py-1 rounded">customStyles</code> prop. This provides even greater flexibility, enabling you to apply unique styles that match your application's design perfectly. Here’s an example of how to use the <code className="bg-gray-700 px-2 py-1 rounded">customStyles</code> prop to style the tooltip:
      </p>
      <CodeHighlighter language="jsx" code={customStylesExampleCode} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Props</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">Tooltip</code> component comes with several props that allow you to customize its behavior and appearance. Below is a detailed table of the available props:
      </p>
      <div className='sm:overflow-x-hidden overflow-x-scroll'>
      <table className="w-full border border-gray-700 mb-8">
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
          <tr>
            <td className="p-4 border-b border-gray-700">customStyles</td>
            <td className="p-4 border-b border-gray-700">object</td>
            <td className="p-4 border-b border-gray-700">null</td>
            <td className="p-4 border-b border-gray-700">Custom CSS styles to apply to the tooltip.</td>
          </tr>
        </tbody>
      </table>
      </div>
      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Custom Styling</h2>
      <p className="text-lg mb-4">
        You can further customize the tooltip's appearance by applying custom CSS classes. This approach provides the ultimate control over how the tooltip looks and behaves:
      </p>
      <CodeHighlighter language="css" code={cssStylingCode} />
      <div className='w-full my-3 py-7'>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h2 className='font-semibold my-3 text-lg'>Previous Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='/Docs'>Introduction</Link>
          </div>
          <div>
            <h2 className='font-semibold my-3 text-lg'>Next Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='/Docs/BreadcrumbDocs'>Breadcrumb Trail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipDocs;
