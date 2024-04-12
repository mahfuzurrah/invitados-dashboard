import React, { useState } from "react";
import { FaUserCog, FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./layout.css";

const Sidebar = ({ isOpen }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      label: "Dashboard",
      icon: <MdSpaceDashboard className="icons" />,
      isActive: true,
      route: "/dashboard",
    },
    {
      id: 2,
      label: "Guests List",
      icon: <FaClipboardList className="icons" />,
      isActive: false,
      route: "/guests_list",
    },
    {
      id: 3,
      label: "Manage Roles",
      icon: <FaUserCog className="icons" />,
      isActive: false,
      route: "/manage_roles",
    },
    {
      id: 4,
      label: "Manage Users",
      icon: <FaUser className="icons" />,
      isActive: false,
      route: "/manage_users"
    },
  ]);

  const setActiveItem = (id) => {
    const updatedItems = menuItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setMenuItems(updatedItems);
  };

  return (
    <div className={`side_navbar ${isOpen ? "" : "sider-collapsed"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="side_nav_menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`side_nav_list ${item.isActive ? "active" : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            <Link to={item.route} className="nav-link">
              <div className="icon">{item.icon}</div>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
