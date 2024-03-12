import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProduct } from "./components/CreateProduct";
import { useEffect, useState } from "react";
import { UpdateProduct } from "./components/UpdateProduct";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        //****************GET REQUEST *************** */
        const res = await fetch("https://dummyjson.com/products");
        const parsed = await res.json();
        console.log("here are the products", parsed.products);
        setProducts(parsed.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <h1>HTTP Verbs</h1>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList products={products} setProducts={setProducts} />
          }
        />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/product/create"
          element={
            <CreateProduct products={products} setProducts={setProducts} />
          }
        />
        <Route path="/product/edit/:productId" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
