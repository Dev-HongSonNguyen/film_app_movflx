import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { Iproduct } from "../../interface/Iproduct";
import { useParams } from "react-router-dom";
import { Icategory } from "../../interface/Icategory";
const { Option } = Select;
interface ProductUpdate {
  product: Iproduct[];
  category: Icategory[];
  updateProduct: (product: Iproduct) => void;
}
const ProductUpdate = (props: ProductUpdate) => {
  const { id } = useParams();
  const product = props.product.find((item) => item._id === id);
  const [form] = Form.useForm();
  form.setFieldsValue({
    _id: product?._id,
    name: product?.name,
    image: product?.image,
    year: product?.year,
    time: product?.time,
    description: product?.description,
    linkFilm: product?.linkFilm,
    categoryId: product?.categoryId,
  });
  const onFinish = (values: any) => {
    props.updateProduct(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
        label="ID Product"
        name="_id"
        rules={[{ required: true, message: "Please input your id!" }]}
        style={{ display: "none" }}
      >
        <Input />
      </Form.Item>
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
        label="Link Film"
        name="linkFilm"
        rules={[{ required: true, message: "Please input your linkFilm!" }]}
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
        name="categoryId"
        label="Category"
        rules={[{ required: true }]}
      >
        <Select placeholder="Chọn một danh mục muốn update" allowClear>
          {props.category.map((item) => {
            return <Option value={item._id}>{item.name}</Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductUpdate;
