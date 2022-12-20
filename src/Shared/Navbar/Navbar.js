
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	const menus = (
    <>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link>Skills</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

	return (
    <div className="bg-primary text-white">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold uppercase">Nayon Roy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menus}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="Nayon Roy Resume (4).pdf"
            download="Nayon Roy Resume (4).pdf"
          >
            <button className="py-2 px-3 border rounded-lg btn-neutral text-white hover:bg-white hover:text-primary transition-all duration-500">
              Resume <span>&#129063;</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;