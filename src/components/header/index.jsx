import React from "react";
import { Layout, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.css";

const Header = ({collapsed, toggle, avatar}) => {
  return (
    <Layout.Header className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
      <Avatar size="default" style={{ background: "#7265e6" }}>
        {avatar}
      </Avatar>
    </Layout.Header>
  );
};

export default Header;
