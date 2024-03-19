import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import { CharacterList } from "./components/CharacterList";
import { About } from "./components/About";
import { OutletComponent } from "./components/OutletComponent";

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

      <Routes>
        <Route
          path="/"
          element={
            <OutletComponent>
              <CharacterList
                chars={chars}
                status={status}
                searchTerm={searchTerm}
              />
            </OutletComponent>
          }
        />
        <Route
          path="/about"
          element={
            <OutletComponent>
              <About />
            </OutletComponent>
          }
        />
        <Route
          path="/personal"
          element={<OutletComponent>{/* <Personal /> */}</OutletComponent>}
        />
      </Routes>
    </>
  );
}

export default App;
