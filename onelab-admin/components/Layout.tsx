import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
type Props = {
  children?: ReactNode;
};

const Layout1 = ({ children }: Props) => (
  <Layout style={{ height: "100vh" }}>
    <Slider />
    <Layout>
      <Header />
      <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
      <Footer />
    </Layout>
  </Layout>
);

export default Layout1;
