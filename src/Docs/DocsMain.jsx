// DocsMain.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import DefaultDocsContent from './DefaultDocsContent';
import BreadcrumbTrail from '../Components/BreadcrumbTrail';

const DocsMain = () => {
  const location = useLocation();
  const currentSection = location.pathname.split('/').pop(); // Get the last part of the path

  return (
    <>
    <div className="flex h-full min-h-screen py-5">
      <Sidebar currentSection={currentSection} />
      <div className="flex p-6 w-full bg-gray-800 ml-0 md:ml-28 transition-all duration-300">
        {currentSection ? <Outlet /> : <DefaultDocsContent />}
      </div>
    </div>
    </>
  );
};

export default DocsMain;
