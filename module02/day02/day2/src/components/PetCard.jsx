export const PetCard = ({ pet, setState }) => {
  const handleDelete = () => {
    setState([]);
  };

  return (
    <div className="pet-card">
      <h3>Pet Name:{pet.name}</h3>
      <h4>Pet Age:{pet.age}</h4>
      <button onClick={handleDelete}>Delete all Pets</button>
    </div>
  );
};
