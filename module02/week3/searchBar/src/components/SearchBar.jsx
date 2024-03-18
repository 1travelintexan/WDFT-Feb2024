export const SearchBar = ({ searchTerm, setSearchTerm, status, setStatus }) => {
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setStatus(e.target.value);
          console.log("status", e.target.value);
        }}
      >
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
      </select>
    </div>
  );
};
