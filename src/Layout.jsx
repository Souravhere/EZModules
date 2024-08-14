import { Outlet, Link } from 'react-router-dom';
import Footer from './MainComponents/Footer';

function Layout() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-gray-500">
      <header className="flex items-center justify-between py-4 px-4 bg-gray-900">
        <h1 className="text-xl font-semibold">EZ Modules</h1>
        <nav className="flex space-x-4">
          <Link
            to="/"
            className="px-2 py-1 text-sm font-semibold text-gray-300 bg-slate-700 rounded-full hover:bg-red-500"
          >
            Home
          </Link>
          <Link
            to="docs"
            className="px-2 py-1 text-sm font-semibold text-gray-300 bg-slate-700 rounded-full hover:bg-red-500"
          >
            Docs
          </Link>
        </nav>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
