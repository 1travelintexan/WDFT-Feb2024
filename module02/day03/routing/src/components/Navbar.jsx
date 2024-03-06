import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        Home
      </NavLink>
      <NavLink to="/about-pizza">About</NavLink>
      <h1>Routing</h1>
      <button> Logout</button>
    </div>
  );
};
