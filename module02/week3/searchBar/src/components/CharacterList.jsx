export const CharacterList = ({ chars, status, searchTerm }) => {
  return (
    <div>
      {chars &&
        chars
          .filter((character) => {
            if (status && character.status === status) {
              return true;
            }
          })
          .filter((currentChar) => {
            if (
              currentChar.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true;
            }
          })
          .map((e) => <h2 key={e.id}>{e.name}</h2>)}
    </div>
  );
};
