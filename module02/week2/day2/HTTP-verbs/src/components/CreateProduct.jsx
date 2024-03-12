import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    //first stop the page from reloading with e.preventDefault()
    event.preventDefault();
    //create a new variable that has all the states, you will send this variable in the POST
    const newProduct = { title, description, thumbnail };
    console.log("form submitted", newProduct);
    //Try/catch for all of the promise code
    try {
      //new variable for what the POST fetch returns
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      //convert the res variable to json so we can use it
      //.json()  IS A PROMISE!!!!! MAKE SURE TO AWAIT
      const parsed = await res.json();
      console.log("product was successfully added", parsed);
      setProducts([parsed, ...products]);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>CreateProduct</h1>
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
