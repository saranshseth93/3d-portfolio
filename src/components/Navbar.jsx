import { NavLink, useNavigate } from "react-router-dom";

import { logo } from "../assets/images";
import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About", to: "/about" },
    { id: 2, text: "Projects", to: "/projects" },
    { id: 3, text: "Contact", to: "/contact" },
  ];

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-lg gap-7 font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            style={({ isActive }) => ({
              color: isActive ? "#B3A125" : "#6390F0",
            })}
          >
            {item.text}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} className="text-gray-400 text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-gray-400 text-2xl" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 flex align-center flex-col"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <NavLink to="/" className={"text-center mx-auto mt-4 mb-4"}>
          <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
        </NavLink>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
            onClick={() => {
              setNav(false);
              navigate(item.to);
            }}
          >
            <NavLink key={item.id} to={item.to} as={"li"}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
