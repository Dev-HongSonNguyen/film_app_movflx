import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Iproduct } from "./interface/Iproduct";
import HomePage from "./pages/HomePage";
import LayoutClient from "./layout/LayoutClient";
import Blog from "./pages/Blog";
import Dashboard from "./pages/admin/Dashboard";
import LayoutAdmin from "./layout/LayoutAdmin";
import ProductManager from "./pages/admin/ProductManager";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductUpdate from "./pages/admin/ProductUpdate";
import CategoryManager from "./pages/admin/CategoryManager";
import CategoryAdd from "./pages/admin/CategoryAdd";
import CategoryUpdate from "./pages/admin/CategoryUpdate";
import {
  getAllProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./api/ApiProduct";
import { Icategory } from "./interface/Icategory";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/ApiCategory";
import { message } from "antd";
import axios from "axios";
function App() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Iproduct[]>([]);
  const [category, setCategory] = useState<Icategory[]>([]);
  //call api Product
  useEffect(() => {
    try {
      getAllProduct().then(({ data }) => {
        const dataProduct = data.product;
        setProduct(dataProduct.docs);
      });
    } catch (error) {}
  }, []);
  //call api Category
  useEffect(() => {
    try {
      getAllCategory().then(({ data }) => {
        setCategory(data.category);
      });
    } catch (error) {}
  }, []);

  // add product
  const AddProduct = (product: any) => {
    try {
      addProduct(product);
      message.success("Thao tác thành công");
      navigate("admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  // delete product
  const DeleteProduct = (id: string) => {
    deleteProduct(id).then(() => {
      const newProduct = product.filter((item) => item._id !== id);
      message.success("Thao tác thành công!");
      setProduct(newProduct);
    });
  };
  //update product
  const UpdateProduct = (product: Iproduct) => {
    try {
      updateProduct(product);
      message.success("Thao tác thành công!");
      navigate("admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  // add category
  const AddCategory = (category: Icategory) => {
    try {
      addCategory(category);
      message.success("Thao tác thành công");
      navigate("admin/categories");
    } catch (error) {
      console.log(error);
    }
  };
  // delete category
  const DeleteCategory = (id: string) => {
    try {
      deleteCategory(id).then(() => {
        const newCategory = category.filter((item) => item._id !== id);
        message.success("Thao tác thành công!");
        setCategory(newCategory);
      });
    } catch (error) {}
  };
  // update category
  const UpdateCategory = (category: Icategory) => {
    try {
      updateCategory(category);
      message.success("Thao tác thành công!");
      navigate("admin/categories");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductManager
                  product={product}
                  category={category}
                  delete={DeleteProduct}
                  setProduct={setProduct}
                />
              }
            />
            <Route
              path="add"
              element={
                <ProductAdd category={category} addProduct={AddProduct} />
              }
            />
            <Route
              path="update/:id"
              element={
                <ProductUpdate
                  product={product}
                  category={category}
                  updateProduct={UpdateProduct}
                />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={
                <CategoryManager
                  category={category}
                  setCategory={setCategory}
                  deleteCategory={DeleteCategory}
                />
              }
            />
            <Route
              path="add"
              element={<CategoryAdd addCategory={AddCategory} />}
            />
            <Route
              path="update/:id"
              element={
                <CategoryUpdate
                  category={category}
                  updateCategory={UpdateCategory}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
