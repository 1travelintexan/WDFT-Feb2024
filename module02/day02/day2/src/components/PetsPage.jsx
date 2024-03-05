import { PetCard } from "./PetCard";

export const PetsPage = (props) => {
  //   console.log("pets", props.pets);
  return (
    <div>
      <h1>Pets</h1>
      {props.pets.map((element) => {
        return (
          <PetCard
            setState={props.setPetsState}
            pet={element}
            key={element.id}
          />
        );
      })}
    </div>
  );
};
