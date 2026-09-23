import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiHeart,
  FiUser,
} from "react-icons/fi";

function BottomNav() {
  const navItems = [
    { to: "/", label: "Home", icon: <FiHome /> },
    { to: "/explore", label: "Explore", icon: <FiSearch /> },
    { to: "/saved", label: "Saved", icon: <FiHeart /> },
    { to: "/profile", label: "Profile", icon: <FiUser /> },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;