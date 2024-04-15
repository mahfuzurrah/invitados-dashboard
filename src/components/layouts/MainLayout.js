import { Layout } from "antd";
import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./layout.css";

const { Header, Content } = Layout;

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <Layout>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Layout className="main_body">
        <Header className="top_navbar">
          <Navbar toggleSidebar={toggleSidebar}/>
        </Header>
        <Layout>
          <Content className="body_content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
