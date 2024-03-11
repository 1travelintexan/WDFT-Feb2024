import { useEffect, useState } from "react";
import "./App.css";
import { CharList } from "./components/CharList";
import { Link, Route, Routes } from "react-router-dom";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { NotFound } from "./pages/NotFound";
import { SpellsPage } from "./pages/SpellsPage";

function App() {
  const [chars, setChars] = useState(null);
  const [loading, setLoading] = useState(true);

  // //bad example of setInterval in React
  // setInterval(() => {
  //   setCount((prev) => prev + 1);
  //   console.log("our count", count);
  // }, 1000);

  //useEffect example for initial render

  //**************mounting phase*****************/
  useEffect(() => {
    //fetch all the characters
    const fetchChars = async () => {
      console.log("Mounting Phase");
      try {
        //with fetch you have ALWAYS two promises.
        // One to get the Response
        // Second to parse that response into json
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters"
        );
        const allCharacters = await response.json();
        // console.log("here are my chars", allCharacters);
        setChars(allCharacters);
        setLoading(false);
      } catch (err) {
        console.log("there was error fetching all chars", err);
      }
    };
    fetchChars();
    //with the empty array, only uses the callback once
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Life Cycles</h1>
      <Link to="/spells">All Spells</Link>
      <Routes>
        <Route path="/" element={<CharList chars={chars} />} />
        <Route path="/one-character/:id" element={<CharacterDetailPage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
