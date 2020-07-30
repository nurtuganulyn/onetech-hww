import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, Menu } from "antd";

// import css from "../style/style.css";
import { Button } from "antd";
const { Header } = Layout;

type Props = {
  title?: string;
};

const Header1 = ({ title = "This is the default title" }: Props) => (
  <Header style={{ zIndex: 1, width: "100%" }}>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link href="/">Товары</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/about">Черновики</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/about">Архив</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default Header1;
