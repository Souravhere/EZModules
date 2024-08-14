// Sidebar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: 'NavCompDocs', label: 'NavBar Docs' },
    { path: 'ButtonDocs', label: 'Button Docs' },
    { path: 'FormDocs', label: 'Form Docs' },
    // Add more links here as needed
  ];

  // Get current index of section in links array
  const currentIndex = links.findIndex((link) => link.path === currentSection);

  // Determine next and previous sections
  const previousSection = currentIndex > 0 ? links[currentIndex - 1] : null;
  const nextSection = currentIndex < links.length - 1 ? links[currentIndex + 1] : null;

  return (
    <div className="md:w-64 bg-gray-900 text-gray-300 h-full flex flex-col">
      <div className="md:hidden flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Documentation</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-full h-full p-4 space-y-2 overflow-y-auto`}
      >
        <h2 className="hidden md:block text-xl font-semibold mb-4">Documentation</h2>
        <nav className="space-y-2 flex-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                location.pathname.includes(link.path) ? 'bg-red-500 text-white' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex space-x-2">
          {previousSection && (
            <Link
              to={previousSection.path}
              className="px-3 py-2 bg-gray-700 rounded hover:bg-red-500 text-gray-300"
            >
              Previous: {previousSection.label}
            </Link>
          )}
          {nextSection && (
            <Link
              to={nextSection.path}
              className="px-3 py-2 bg-gray-700 rounded hover:bg-red-500 text-gray-300"
            >
              Next: {nextSection.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
