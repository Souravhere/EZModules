import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Header() {
  return (
        <header className="w-full bg-gray-800 flex items-center justify-between py-4 px-4">
            <h1 className="text-xl font-semibold">EZ Modules</h1>
            <nav className='flex  gap-3'>
                <NavLink to='/'
                className={({ isActive, isPending }) =>
                        isPending
                        ? "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700"
                        : isActive
                        ? "px-2 py-1 text-sm font-bold bg-slate-300 text-slate-800 rounded-full"
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
                        ? "px-2 py-1 text-sm font-bold bg-slate-300 text-slate-800 rounded-full"
                        : "px-2 py-1 text-sm font-semibold bg-slate-700 rounded-full hover:bg-gray-700 duration-500"
                }
                >
                    <p>Docs</p>
                </NavLink>
            </nav>
        </header>
  )
}

export default Header
