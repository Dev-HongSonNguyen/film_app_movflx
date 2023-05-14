import React, { useEffect } from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Icategory } from "../../interface/Icategory";
import { getAllCategory } from "../../api/ApiCategory";
import { Link } from "react-router-dom";
interface CategoryManager {
  category: Icategory[];
  setCategory: any;
  deleteCategory: (id: string) => void;
}
const CategoryManager = (props: CategoryManager) => {
  //render lại
  useEffect(() => {
    getAllCategory().then(({ data }) => props.setCategory(data.category));
  });
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
            <Link to={`update/${record._id}`}>EDIT</Link>
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => props.deleteCategory(record._id)}
          >
            REMOVE
          </Button>
        </Space>
      ),
    },
  ];
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
