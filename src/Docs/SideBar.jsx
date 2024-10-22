import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { RiMenu2Line, RiCloseLargeLine } from "react-icons/ri";
import BreadcrumbTrail from '../Components/BreadcrumbTrail';

const Sidebar = ({ currentSection }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    // { path: 'NavCompDocs', label: 'NavBar Docs' },
    { path: 'TooltipDocs', label: 'Tooltip' },
    { path: 'BreadcrumbDocs', label: 'Breadcrumb Trail' },
    { path: 'TabsDocs', label: 'Tabs' },
    // { path: 'FormDocs', label: 'Form Docs' },
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
   <div className='md:w-64 bg-gray-900 text-gray-300 h-screen flex flex-col fixed top-0 left-0 z-30 md:relative transition-all duration-300 ease-in-out'>
     <div className="fixed top-0 h-screen">
      <button
        onClick={toggleSidebar}
        className={`text-white text-2xl p-2 rounded-full fixed top-16 right-3 bg-green-600/40 z-40 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        } md:hidden`}
      >
        {isOpen ? <RiCloseLargeLine /> : <RiMenu2Line />}
      </button>

      <div
        className={`absolute inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-900 z-20 h-full w-64 p-4 overflow-y-auto`}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-500">EZ Module</h2>
        <BreadcrumbTrail
        separator="/"
        theme="dark" // or "light"
        fontSize="12px" // Custom font size (optional)
        textColor="white" // Custom text color (optional)
      />
        <h2 className="text-xl font-semibold mb-4">Documentation</h2>
        <nav className="space-y-2">
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
   </div>
  );
};

export default Sidebar;
