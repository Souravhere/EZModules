import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ currentSection }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };    

  return (
    <div className="fixed md:w-64 bg-gray-900 text-gray-300 h-full p-4 flex flex-col">
      <button
        onClick={toggleSidebar}
        className={`text-white text-2xl p-2 md:hidden fixed top-4 right-4 z-20 ${isOpen ? 'hidden' : 'block'}`}
      >
        <FaBars />
      </button>

      <div
        className={`absolute inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out bg-gray-900 z-10 h-full p-4`}
      >
        <button
          onClick={toggleSidebar}
          className={`text-white text-2xl p-2 fixed top-4 right-4 z-20 ${isOpen ? 'block' : 'hidden'}`}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4">Documentation</h2>
        <nav className="space-y-2 flex-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${
                location.pathname.includes(link.path)
                  ? 'bg-red-500 text-white'
                  : ''
              }`}
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              Previous: {previousSection.label}
            </Link>
          )}
          {nextSection && (
            <Link
              to={nextSection.path}
              className="px-3 py-2 bg-gray-700 rounded hover:bg-red-500 text-gray-300"
              onClick={() => setIsOpen(false)}
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
