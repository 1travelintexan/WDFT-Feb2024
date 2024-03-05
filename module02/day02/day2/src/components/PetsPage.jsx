import { PetCard } from "./PetCard";
// props should be an object with the two properties that we sent from the App.jsx
export const PetsPage = (props) => {
  //   console.log("pets", props.pets);
  return (
    <div>
      <h1>Pets</h1>
      {/* dont forget the curly braces for the .map bc it is js */}
      {props.pets.map((element) => {
        return (
          <PetCard
            //   we get the setter from the props and pass it here
            //   and the element is just one pet in the map loop
            setState={props.setPetsState}
            pet={element}
            key={element.id}
          />
        );
      })}
    </div>
  );
};
