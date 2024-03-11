import { useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

export const PetPage = ({ allPets }) => {
  //****************queries *****************
  const [queries, setQueries] = useSearchParams();
  const food = queries.get("food");
  const country = queries.get("country");
  console.log("here are our queries", food, country);
  //this was just to show that params are an object
  const ourParams = useParams();
  //this is how you would use the params, destructure and then use the variable
  const { petId } = useParams();
  // console.log("our paramas", ourParams);
  const ourOnePet = allPets.find((pet) => {
    if (pet.id == petId) {
      return true;
    }
  });
  const [onePet, setOnePet] = useState(ourOnePet);
  //just to check if we have one pet, if no... navigate back to home page
  if (!onePet) {
    console.log("in the if");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h2>{onePet && onePet.name} Page</h2>
    </div>
  );
};
