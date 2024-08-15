import { Outlet, NavLink } from 'react-router-dom';
import Footer from './MainComponents/Footer';

function Layout() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-gray-500">
      <header className="flex items-center justify-between py-4 px-4 bg-gray-900">
        <h1 className="text-xl font-semibold">EZ Modules</h1>
        <nav className="flex space-x-4">
            <NavLink to='/'
                className={({ isActive, isPending }) =>
                        isPending
                        ? "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700"
                        : isActive
                        ? "px-2 py-1 text-sm font-bold bg-red-500 text-slate-800 rounded-full"
                        : "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700 duration-500"
                }
                >
                    <p>Home</p>
                </NavLink>
                <NavLink to='/docs'
                className={({ isActive, isPending }) =>
                        isPending
                        ? "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700"
                        : isActive
                        ? "px-2 py-1 text-sm font-bold bg-red-500 text-slate-800 rounded-full"
                        : "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700 duration-500"
                }
                >
                    <p>Docs</p>
                </NavLink>
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
