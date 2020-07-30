import React from "react";
import { Input } from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Search
        placeholder="Я ищу..."
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
      <div
        style={{
          width: "450px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>Фильтр: </span>
          <Search
            placeholder="Название бренда"
            onSearch={(value) => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <Dropdown overlay={menu}>
          <Button>
            Все категории <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
