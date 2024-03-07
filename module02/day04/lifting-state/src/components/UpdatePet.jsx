import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UpdatePet = ({ pets, setPets }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [age, setAge] = useState("");
  const nav = useNavigate();
  const { petId } = useParams();

  //useEffect controls the flow of the page ( we will learn later)
  // syntax: useEffect( ()=>{ } , [])
  useEffect(() => {
    const foundPet = pets.find((onePet) => {
      if (onePet.id == petId) {
        return true;
      }
    });
    console.log("here is the found pet", foundPet);
    setName(foundPet.name);
    setOwner(foundPet.owner);
    setAge(foundPet.age);
  }, []);

  //This function creates an object of the states and adds that object to the array of pets
  const handleUpdatePet = (event) => {
    //first always prevent the default refresh of the form
    event.preventDefault();

    //this maps over all the pets and updates only the one whos id matches the params id from above
    const mappedPets = pets.map((pet) => {
      if (pet.id == petId) {
        const updatedPet = { name, owner, age, id: pet.id };
        return updatedPet;
      } else {
        return pet;
      }
    });
    setPets(mappedPets);

    //this will navigate after we add the pet
    nav("/");
  };
  return (
    <div>
      <h2>Update Form</h2>
      <Link to="/">
        <h2>Back</h2>
      </Link>
      <form className="pet-form" onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Pet Owner:
          <input
            placeholder="owner"
            type="text"
            value={owner}
            onChange={(event) => {
              setOwner(event.target.value);
            }}
          />
        </label>
        <label>
          Pet Age:
          <input
            placeholder="name"
            type="number"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
