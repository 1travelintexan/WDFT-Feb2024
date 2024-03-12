import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const getOneProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const parsed = await res.json();
      console.log(parsed);
      setProduct(parsed);
    };
    getOneProduct();
  }, [productId]);
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <div>
        <Link to="/">Back</Link>
      </div>
      <Link to={`/product/edit/${product.id}`}>Edit</Link>
    </div>
  );
};
