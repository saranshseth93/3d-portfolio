import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#B3A125" : "#6390F0",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? "#B3A125" : "#6390F0",
          })}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
