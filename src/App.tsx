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
import { getAllProduct, addProduct, deleteProduct } from "./api/ApiProduct";
import { Icategory } from "./interface/Icategory";
import { getAllCategory } from "./api/ApiCategory";
import { message } from "antd";
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
      message.success("Thao tác thành công!");
      navigate("admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  // delete product
  const Delete = (id: string) => {
    deleteProduct(id).then(() => {
      const newProduct = product.filter((item) => item._id !== id);
      message.success("Thao tác thành công!");
      setProduct(newProduct);
    });
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
                  delete={Delete}
                />
              }
            />
            <Route
              path="add"
              element={
                <ProductAdd category={category} addProduct={AddProduct} />
              }
            />
            <Route path="update/:id" element={<ProductUpdate />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryManager category={category} />} />
            <Route path="add" element={<CategoryAdd />} />
            <Route path="update/:id" element={<CategoryUpdate />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
