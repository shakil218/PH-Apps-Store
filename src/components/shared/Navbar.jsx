import { useState } from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 ${
      isActive
        ? "text-indigo-600 font-semibold"
        : "text-gray-600 hover:text-indigo-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <span className="font-bold text-lg">HERO.IO</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/apps" className={navLinkClass}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={navLinkClass}>
              Installation
            </NavLink>
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-sm font-semibold hover:scale-105 transition duration-300"
            >
              <FaGithub className="text-lg" />
              Contribute
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/apps" className={navLinkClass}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={navLinkClass}>
              Installation
            </NavLink>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-sm font-semibold"
            >
              <FaGithub className="text-lg" />
              Contribute
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
