import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { Icategory } from "../../interface/Icategory";
import { Iproduct } from "../../interface/Iproduct";
interface ProductAdd {
  category: Icategory[];
  addProduct: (product: Iproduct) => void;
}
/* eslint-enable no-template-curly-in-string */
const ProductAdd = (props: ProductAdd) => {
  const onFinish = (values: any) => {
    props.addProduct(values);
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
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
        label="Tên phim"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Hình ảnh"
        name="image"
        rules={[{ required: true, message: "Please input your image!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Năm Phát Hành"
        name="year"
        rules={[{ required: true, message: "Please input your year!" }]}
      >
        <Select>
          <Select.Option value="2018">2018</Select.Option>
          <Select.Option value="2019">2019</Select.Option>
          <Select.Option value="2020">2020</Select.Option>
          <Select.Option value="2021">2021</Select.Option>
          <Select.Option value="2022">2022</Select.Option>
          <Select.Option value="2023">2023</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Thời lượng"
        name="time"
        rules={[{ required: true, message: "Please input your time!" }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item name={["description"]} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Category"
        name="categoryId"
        rules={[
          {
            required: true,
            message: "Chọn danh mục !",
          },
        ]}
      >
        <Select>
          $
          {props.category.map((item) => {
            return <Option value={item._id}>{item.name}</Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductAdd;
