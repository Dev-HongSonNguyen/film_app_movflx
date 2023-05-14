import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Icategory } from "../../interface/Icategory";
import { useParams } from "react-router-dom";
interface CategoryUpdate {
  category: Icategory[];
  updateCategory: (category: Icategory) => void;
}
const CategoryUpdate = (props: CategoryUpdate) => {
  const { id } = useParams();
  const onFinish = (values: any) => {
    props.updateCategory(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const category = props.category.find((item) => item._id === id);
  const [form] = Form.useForm();
  form.setFieldsValue({
    _id: category?._id,
    name: category?.name,
  });
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="ID Category"
        name="_id"
        rules={[{ required: true, message: "Please input your username!" }]}
        style={{ display: "none" }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name Category"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryUpdate;
