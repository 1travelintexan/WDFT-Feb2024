import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);
  const [chars, setChars] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("Alive");
  useEffect(() => {
    const getChars = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const parsed = await res.json();
      console.log("chars", parsed);
      setChars(parsed.results);
    };
    getChars();
  }, []);
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
      />

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
    </>
  );
}

export default App;
