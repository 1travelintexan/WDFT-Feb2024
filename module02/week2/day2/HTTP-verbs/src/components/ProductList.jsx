import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  //delete a product
  const handleDelete = async (productId) => {
    console.log("id of product to delete", productId);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const parsed = await response.json();
      console.log("You deleted something successfully!", parsed);
    } catch (err) {
      console.log(err);
    }
  };

  //display loading while waiting for the data
  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link to="/product/create">Create a Product</Link>
      {products.map((oneProduct) => (
        <div key={oneProduct.id}>
          <Link to={`/product/${oneProduct.id}`}>
            <div>
              <img
                src={oneProduct.thumbnail}
                alt={oneProduct.title}
                style={{ height: "150px" }}
              />
              <h4>{oneProduct.title}</h4>
            </div>
          </Link>
          <button
            onClick={() => {
              handleDelete(oneProduct.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
