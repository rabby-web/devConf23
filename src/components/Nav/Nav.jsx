import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-e.png";

const Nav = () => {
  const navLinks = (
    <>
      <li className="text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#387DF8] text-white"
              : "text-[#387DF8]"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/details"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#387DF8] text-white"
              : "text-[#387DF8]"
          }
        >
          Details
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#387DF8] text-white"
              : "text-[#387DF8]"
          }
        >
          login
        </NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-[#387DF8] text-white"
              : "text-[#387DF8]"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow text-black px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="p-2 flex gap-4 items-center font-bold text-2xl">
            <p className="hidden md:block text-[#387DF8]">DevConf 23</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border-2 border-[#387DF8] rounded-full">
                <img src={logo} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
