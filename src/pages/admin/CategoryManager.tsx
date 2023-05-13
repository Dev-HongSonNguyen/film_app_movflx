import React from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Icategory } from "../../interface/Icategory";
interface CategoryManager {
  category: Icategory[];
}
const columns: ColumnsType<Icategory> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" danger>
          EDIT
        </Button>
        <Button type="primary" danger>
          REMOVE
        </Button>
      </Space>
    ),
  },
];
const CategoryManager = (props: CategoryManager) => {
  console.log(props.category);

  return (
    <Table
      columns={columns}
      // expandable={{
      //   expandedRowRender: (record) => (
      //     <p style={{ margin: 0, textAlign: "justify" }}>
      //       {record.description}
      //     </p>
      //   ),
      //   // rowExpandable: (record) => record.name !== "Not Expandable",
      // }}
      dataSource={props.category}
    />
  );
};

export default CategoryManager;
