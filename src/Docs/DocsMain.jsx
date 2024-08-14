import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';

const DocsMain = () => {
  const location = useLocation();
  const currentSection = location.pathname.split('/').pop(); // Get the last part of the path

  return (
    <div className="flex h-full">
      <Sidebar currentSection={currentSection} />
      <div className="flex-1 p-4 bg-gray-800 text-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default DocsMain;
