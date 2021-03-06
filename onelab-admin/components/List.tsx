// import * as React from "react";
// import ListItem from './ListItem'
import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "action",
    render: () => (
      <div>
        <span>edit</span>
        {"  "}
        <span>delete</span>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

const List1 = () => {
  return (
    <div>
      <Table
        rowSelection={{
          type: " checkbox",
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default List1;
