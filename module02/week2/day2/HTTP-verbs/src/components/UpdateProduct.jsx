import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const nav = useNavigate();

  const { productId } = useParams();

  const handleSubmit = async (e) => {
    //first stop the page from reloading with e.preventDefault()
    e.preventDefault();
    //create a new variable that has all the states, you will send this variable in the POST
    const updatedProduct = { title, description, thumbnail };
    console.log("form submitted", updatedProduct);
    //Try/catch for all of the promise code
    try {
      //new variable for what the POST fetch returns
      const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      //convert the res variable to json so we can use it
      //.json()  IS A PROMISE!!!!! MAKE SURE TO AWAIT
      const parsed = await res.json();
      console.log("product was successfully updated", parsed);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getOneProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const parsed = await res.json();
      console.log(parsed);
      setProduct(parsed);
      setTitle(parsed.title);
      setDescription(parsed.description);
      setThumbnail(parsed.thumbnail);
    };
    getOneProduct();
  }, [productId]);

  //if no product the return loading
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>Update Product</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={thumbnail}
            onChange={(event) => setThumbnail(event.target.value)}
          />
        </label>
        <button>Add Product</button>
      </form>
    </div>
  );
};
