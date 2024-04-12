import { Dropdown, Space } from "antd";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import User from "../assets/img/user.png";
import Search from "../search/Search";
import { IoNotifications } from "react-icons/io5";


function Navbar({ toggleSidebar }) {
  const items = [
    {
      key: "1",
      label: <Link to="#">Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="/">Log Out</Link>,
    },
  ];

  return (
    <>
      <div>
        <Search />
      </div>
      <div className="right_area">
        <IoNotifications className="icons"/>
        <Dropdown menu={{ items }} className="mobile_hide">
          <Link onClick={(e) => e.preventDefault()}>
            <Space className="header_dropdown">
              <div className="title">
                <img src={User} alt="User_Img" />
                <p>Mahfuzur R.</p>
              </div>
              <IoIosArrowDown />
            </Space>
          </Link>
        </Dropdown>
        <div className="toggle_btn" onClick={toggleSidebar}>
          <FaBars className="icons" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
