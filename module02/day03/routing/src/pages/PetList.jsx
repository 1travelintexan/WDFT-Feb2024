import { Link } from "react-router-dom";

export const PetList = ({ allPets }) => {
  return (
    <div>
      <h2>Pet List:</h2>
      {allPets.map((onePet) => {
        return (
          <Link key={onePet.id} to={`pet/${onePet.id}`}>
            <div className="pet-card">
              <h4>Name: {onePet.name}</h4>
              <h4>Owner: {onePet.owner}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
