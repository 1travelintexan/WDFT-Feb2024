export const PetCard = ({ pet, setState }) => {
  const handleDelete = () => {
    setState([]);
  };

  return (
    <div className="pet-card">
      <h3>Pet Name:{pet.name}</h3>
      <h4>Pet Age:{pet.age}</h4>
      {/* Just an example of using a setter method from the App.jsx */}
      {/* onClick of the button it will call the handle Delete function */}
      <button onClick={handleDelete}>Delete all Pets</button>
    </div>
  );
};
