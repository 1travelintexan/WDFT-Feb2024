import { Link } from "react-router-dom";
import { PetList } from "./PetList";

export const HomePage = ({ allPets }) => {
  return (
    <div>
      HomePage
      <Link to="/about-pizza">Go to About Page</Link>
      <PetList allPets={allPets} />
    </div>
  );
};
