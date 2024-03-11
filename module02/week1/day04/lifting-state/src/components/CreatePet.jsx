import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const CreatePet = ({ pets, setPets }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [age, setAge] = useState("");
  const nav = useNavigate();

  //using one state that is an object for multiple inputs
  const [petObj, setPetObj] = useState({ name: "", owner: "", age: 0 });

  //*******function to handle change of multiple inputs ********* */
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(inputName, inputValue, petObj);
    setPetObj({ ...petObj, [inputName]: inputValue });
  };

  //******This function creates an object of the states and adds that object to the array of pets*****
  const handleCreatePet = (event) => {
    //first always prevent the default refresh of the form
    event.preventDefault();
    const newPet = { name, owner, age, id: pets.length + 1 };
    console.log("here are our states", newPet);
    setPets([...pets, newPet]);
    //this will navigate after we add the pet
    nav("/");
  };
  return (
    <div>
      <h2>Create Form</h2>
      <Link to="/">
        <h2>Back</h2>
      </Link>
      <form className="pet-form" onSubmit={handleCreatePet}>
        <label>
          Pet Name:
          <input
            placeholder="name"
            type="text"
            //value for bonus iteration of one state
            value={petObj.name}
            // value={name}
            name="name"
            onChange={handleChange}
            // onChange={(event) => {
            //   setName(event.target.value);
            // }}
            required
          />
        </label>
        <label>
          Pet Owner:
          <input
            placeholder="owner"
            type="text"
            //value for bonus iteration of one state
            value={petObj.owner}
            // value={owner}
            name="owner"
            onChange={handleChange}
            // onChange={(event) => {
            //   setOwner(event.target.value);
            // }}
          />
        </label>
        <label>
          Pet Age:
          <input
            placeholder="age"
            type="number"
            //value for bonus iteration of one state
            value={petObj.age}
            // value={age}
            name="age"
            onChange={handleChange}
            // onChange={(event) => {
            //   setAge(event.target.value);
            // }}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
