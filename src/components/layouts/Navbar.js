import { Dropdown, Space } from "antd";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import User from "../assets/img/user.png";
import mobile_logo from "../assets/svg/mobile_logo.svg";

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
      <div className="toggle_btn" onClick={toggleSidebar}>
        <FaBars className="icons" />
      </div>
      <div className="mobile_logo">
      <img src={mobile_logo} alt="" />
      </div>
      <div className="right_area">
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
      </div>
    </>
  );
}

export default Navbar;
