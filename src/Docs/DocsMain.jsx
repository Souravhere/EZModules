// DocsMain.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import DefaultDocsContent from './DefaultDocsContent';

const DocsMain = () => {
  const location = useLocation();
  const currentSection = location.pathname.split('/').pop(); // Get the last part of the path

  return (
    <div className="flex h-full min-h-screen py-5">
      <Sidebar currentSection={currentSection} />
      <div className="flex p-6 bg-gray-800 text-gray-300 ml-0 md:ml-64 transition-all duration-300">
        {currentSection ? <Outlet /> : <DefaultDocsContent />}
      </div>
    </div>
  );
};

export default DocsMain;
