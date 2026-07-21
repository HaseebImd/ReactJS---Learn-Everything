import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
