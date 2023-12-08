

import { useContext } from 'react';
import logo from '../assets/navbar1.png'

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../AuthProvider';

const Navbar = () => {

  const { user, logOut, } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogPage">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/donationPage">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="">
          <Link className="">
            <img className='w-24 h-20  md:w-44 md:h-44' src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end flex items-center">
          <p>{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {
              user ? <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div> : "" 
            }
          </label>
          {user ? (
              <button
                onClick={handleLogout}
                className="md:btn btn-sm bg-gray-700 md:bg-gray-700 rounded-md text-white md:text-white px-4 md:px-7"
              >
                Logout
              </button>
          ) : (
            <button className="btn bg-gray-700 text-white px-7">
              <Link to={`/login`}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
