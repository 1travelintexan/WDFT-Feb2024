import { Link } from "react-router-dom";
export const PetList = ({ pets, setPets }) => {
  //This function takes the pet id as a parameter and filters the pets array then set the state to the new filtered array
  const handleDelete = (id) => {
    console.log("the pet id is ", id);
    const filteredPets = pets.filter(
      (onePetInFilter, index) => onePetInFilter.id !== id
    );
    //this sets the state which in turn, triggers a re-render of the page.
    setPets(filteredPets);
  };
  return (
    <div>
      {pets &&
        pets.map((onePet) => {
          return (
            <div key={onePet.id} className="pet-card">
              <h3>Pet Name: {onePet.name}</h3>
              <h3>Pet Owner: {onePet.owner}</h3>
              <h3>Pet age: {onePet.age}</h3>
              <button
                onClick={() => {
                  handleDelete(onePet.id);
                }}
              >
                Delete Pet
              </button>
              <Link to={`/update/${onePet.id}`}>
                <button>Edit Pet</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
