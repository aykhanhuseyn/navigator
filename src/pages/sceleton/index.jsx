import React, { useState } from "react";
import { Layout } from "antd";
import Header from "../../components/header";
import Menus from "../../components/menus";
import logo from "./location-64.png";
import "./index.css";

const { Sider, Content } = Layout;

const Sceleton = ({ children }) => {
  let [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Tracking</span>
        </div>
        <Menus open={false} />
      </Sider>
      <Layout className="site-layout">
        <Header toggle={toggle} collapsed={collapsed} avatar="AH" />
        <Content
          className="site-layout-background main-content"
          style={{ margin: "24px 16px", padding: 24 }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sceleton;
