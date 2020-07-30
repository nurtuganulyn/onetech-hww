import React from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
export default function Slider() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ paddingTop: "50px" }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Suratayev Nurtay
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Добавить товар +
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
