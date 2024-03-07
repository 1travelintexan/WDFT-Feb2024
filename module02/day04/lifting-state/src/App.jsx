import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { PetList } from "./components/PetList";
import { CreatePet } from "./components/CreatePet";
import { UpdatePet } from "./components/UpdatePet";
import { useState } from "react";
function App() {
  const petArray = [
    { name: "Ragnar", owner: "Joshua", age: 3, id: 1 },
    { name: "Timo", owner: "Michael", age: 8, id: 2 },
  ];
  const [pets, setPets] = useState(petArray);
  return (
    <>
      <h1> Controlled Components</h1>
      <Link to="/create-pet">
        <button>Create a Pet</button>
      </Link>
      <Routes>
        <Route path="/" element={<PetList pets={pets} setPets={setPets} />} />
        <Route
          path="/create-pet"
          element={<CreatePet pets={pets} setPets={setPets} />}
        />
        <Route
          path="/update/:petId"
          element={<UpdatePet pets={pets} setPets={setPets} />}
        />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
