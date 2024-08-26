import React from 'react';
import CodeHighlighter from '../../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';

const BreadcrumbDocs = () => {
  const installCommand = `npm install ezmodule`;

  // Code examples
  const basicExampleCode = `import React from 'react';
import BreadcrumbTrail from 'ezmodule';

const App = () => (
  <div className="p-8">
    <BreadcrumbTrail 
      separator="/"
      theme="light"
      textColor="#000"
      fontSize="12px"
      className="my-custom-class"
    />
  </div>
);

export default App;`;

  const advancedExampleCode = `import React from 'react';
import BreadcrumbTrail from 'ezmodule';

const App = () => (
  <div className="p-8">
    <BreadcrumbTrail 
      separator=">"
      theme="dark"
      textColor="#fff"
      fontSize="14px"
      className="breadcrumb-dark"
    />
  </div>
);

export default App;`;
const reactrouterinstall = `npm install react-router-dom`;
const reactrouterexp = `// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Breadcrumb from './Breadcrumb';

function App() {
  return (
    <Router>
      <div>
        {/* Breadcrumb component */}
        <Breadcrumb />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
`;

  return (
    <div className='w-full text-gray-400'>
      <h1 className="text-2xl font-extrabold mb-6 text-blue-500">BreadcrumbTrail Component Documentation</h1>
      <img className='my-5 rounded-lg' src="https://github.com/Souravhere/EZModules/blob/main/SourceImg/BreadcrumbTrail-view.png?raw=true" alt="" />
      <p className="text-lg mb-6">
        The <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component from the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library is designed to help users navigate through a website's hierarchy with ease. It provides a customizable breadcrumb trail that indicates the user's current location within the site's structure.
      </p>
      <p className="text-lg mb-6">
        You can customize the separator, text color, font size, and theme, as well as add additional CSS classes to suit your application's design.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Installation</h2>
      <p className="text-lg mb-4">
        To start using the <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component, first install the <code className="bg-gray-700 px-2 py-1 rounded">ezmodule</code> library using npm:
      </p>
      <CodeHighlighter language="bash" code={installCommand} />
      <div className="bg-red-500/50 text-white p-4 rounded-lg my-3">
        <h2 className='font-semibold text-xl'>Note :</h2>
  <p>
    To use the <span className="font-bold">ezmodule</span> <span className="font-bold">Breadcrumb</span> component, you need to create a route using <span className="font-bold">React Router</span>.
  </p>
  <CodeHighlighter language="bash" code={reactrouterinstall} />
  <CodeHighlighter language="jsx" code={reactrouterexp} />
</div>
      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Usage</h2>
      <p className="text-lg mb-4">
        Below are examples demonstrating the usage of the <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component in different scenarios.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-orange-400">Basic Example</h3>
      <p className="text-lg mb-4">
        This example shows how to create a simple breadcrumb trail with default settings:
      </p>
      <CodeHighlighter language="jsx" code={basicExampleCode} />

      <h3 className="text-2xl font-semibold mb-2">Advanced Example</h3>
      <p className="text-lg mb-4">
        The following example demonstrates how to customize the separator, theme, text color, and font size:
      </p>
      <CodeHighlighter language="jsx" code={advancedExampleCode} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Props</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component accepts the following props to customize its behavior and appearance:
      </p>
      <div className='sm:overflow-x-hidden overflow-x-scroll'>
        <table className="w-full border border-gray-700 mb-8">
          <thead>
            <tr>
              <th className="p-4 border-b border-gray-700 text-left">Prop</th>
              <th className="p-4 border-b border-gray-700 text-left">Type</th>
              <th className="p-4 border-b border-gray-700 text-left">Description</th>
              <th className="p-4 border-b border-gray-700 text-left">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-gray-700">separator</td>
              <td className="p-4 border-b border-gray-700">String</td>
              <td className="p-4 border-b border-gray-700">The character or text that separates each breadcrumb item.</td>
              <td className="p-4 border-b border-gray-700">"/"</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-700">theme</td>
              <td className="p-4 border-b border-gray-700">String</td>
              <td className="p-4 border-b border-gray-700">Sets the theme of the breadcrumb, either "light" or "dark".</td>
              <td className="p-4 border-b border-gray-700">"light"</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-700">textColor</td>
              <td className="p-4 border-b border-gray-700">String</td>
              <td className="p-4 border-b border-gray-700">Defines the color of the breadcrumb text.</td>
              <td className="p-4 border-b border-gray-700">"#000"</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-700">fontSize</td>
              <td className="p-4 border-b border-gray-700">String</td>
              <td className="p-4 border-b border-gray-700">Sets the font size of the breadcrumb text.</td>
              <td className="p-4 border-b border-gray-700">"10px"</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-700">className</td>
              <td className="p-4 border-b border-gray-700">String</td>
              <td className="p-4 border-b border-gray-700">Additional CSS classes for styling the breadcrumb container.</td>
              <td className="p-4 border-b border-gray-700">""</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Custom Styles</h2>
      <p className="text-lg mb-4">
        You can further customize the appearance of the breadcrumb trail by passing your own CSS classes through the <code className="bg-gray-700 px-2 py-1 rounded">className</code> prop. This allows you to match the breadcrumb's style with the overall design of your application.
      </p>
      <CodeHighlighter language="jsx" code={advancedExampleCode} />

      <h2 className="text-3xl font-semibold mb-4 text-orange-400">Dependencies</h2>
      <p className="text-lg mb-4">
        The <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component requires the following dependencies:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li><code className="bg-gray-700 px-2 py-1 rounded">React</code> (version 16.8.0 or higher)</li>
        <li><code className="bg-gray-700 px-2 py-1 rounded">prop-types</code> (for prop type validation)</li>
      </ul>
      <p className="text-lg mb-4">
        Ensure these dependencies are installed in your project to use the <code className="bg-gray-700 px-2 py-1 rounded">BreadcrumbTrail</code> component effectively.
      </p>
      <div className='w-full my-3 py-7'>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h2 className='font-semibold my-3 text-lg'>Previous Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='/Docs/TooltipDocs'>Tooltip</Link>
          </div>
          {/* <div>
            <h2 className='font-semibold my-3 text-lg'>Next Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='/Docs/BreadcrumbDocs'>Breadcrumb Trail</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDocs;
