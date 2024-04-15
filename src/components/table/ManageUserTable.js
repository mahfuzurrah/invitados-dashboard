import { Space, Table } from "antd";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import ManageUserPopup from "../Modal/ManageUserPopup";
const { Column } = Table;

const data = [
  {
    id: 1,
    key: "1",
    title: "Mahfuzur Rahman",
    type: "User",
  },
  {
    id: 2,
    key: "2",
    title: "Mahfuzur Rahman",
    type: "User",
  },
  {
    id: 3,
    key: "3",
    title: "Mahfuzur Rahman",
    type: "User",
  },
];

const ManageUserTable = () => (
  <Table
    dataSource={data}
    pagination={false}
    scroll={{
      x: 991,
    }}
  >
    <Column title="Nombre" dataIndex="title" key="title" />
    <Column title="ID" dataIndex="id" key="id" />
    <Column title="Type" dataIndex="type" key="type" />
    <Column
      title="Status"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <ManageUserPopup clientId={record.id} />
          <button>
            <FaRegTrashAlt className="icons" />
          </button>
        </Space>
      )}
    />
  </Table>
);

export default ManageUserTable;
