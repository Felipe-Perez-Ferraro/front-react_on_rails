import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="bg-orange-700">
      <nav className="max-w-lg mx-auto flex items-center justify-center h-20">
        <ul className="flex gap-x-2">
          <NavLink to="/" activeclassname="active">
            <li className="text-lg font-semibold text-slate-100">Home</li>
          </NavLink>
          |
          <NavLink to="/new" activeclassname="active">
            <li className="text-lg font-semibold text-slate-100">Create Post</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
