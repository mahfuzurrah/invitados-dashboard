import { Space, Table } from "antd";
import React from "react";
import user from "../assets/img/user.png";
const { Column } = Table;

const data = [
  {
    key: "1",
    title: (
      <div className="table_title">
        <img src={user} alt="" />
        <span>Mahfuzur Rahman</span>
      </div>
    ),
    email: "mahfuzuruiux@gmail.com",
    event: "Birthday",
    date: "08/04/2024, 18:57:01",
  },
  {
    key: "2",
    title: (
      <div className="table_title">
        <img src={user} alt="" />
        <span>Mahfuzur Rahman</span>
      </div>
    ),
    email: "mahfuzuruiux@gmail.com",
    event: "Birthday",
    date: "08/04/2024, 18:57:01",
  },
  {
    key: "3",
    title: (
      <div className="table_title">
        <img src={user} alt="" />
        <span>Mahfuzur Rahman</span>
      </div>
    ),
    email: "mahfuzuruiux@gmail.com",
    event: "Birthday",
    date: "08/04/2024, 18:57:01",
  },
  {
    key: "4",
    title: (
      <div className="table_title">
        <img src={user} alt="" />
        <span>Mahfuzur Rahman</span>
      </div>
    ),
    email: "mahfuzuruiux@gmail.com",
    event: "Birthday",
    date: "08/04/2024, 18:57:01",
  },
  {
    key: "5",
    title: (
      <div className="table_title">
        <img src={user} alt="" />
        <span>Mahfuzur Rahman</span>
      </div>
    ),
    email: "mahfuzuruiux@gmail.com",
    event: "Birthday",
    date: "08/04/2024, 18:57:01",
  },
];

const GuestsList = () => (
  <Table
    dataSource={data}
    pagination={false}
    scroll={{
      x: 991,
    }}
  >
    <Column title="Name" dataIndex="title" key="1" />
    <Column title="Email" dataIndex="email" key="1" />
    <Column title="Event Name" dataIndex="event" key="1" />
    <Column title="Date" dataIndex="date" key="muscle" />
    <Column
      title="Status"
      key="action"
      render={(_, record) => <Space size="middle">Done</Space>}
    />
  </Table>
);

export default GuestsList;
