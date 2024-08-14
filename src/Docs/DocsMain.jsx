import { Outlet, Link } from 'react-router-dom';

function DocsMain() {
  return (
    <div className="w-full h-[80vh] bg-gray-800 text-gray-500">
      <div>
        <h1 className="text-xl font-semibold text-center text-orange-400">EZ Modules Documentation</h1>
        <h1 className="font-semibold text-3xl text-center mt-3">Documentation Page</h1>
        {/* Add your documentation content here */}
      </div>
    </div>
  );
}

export default DocsMain;
