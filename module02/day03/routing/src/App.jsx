import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { PetPage } from "./pages/PetPage";
function App() {
  // ********************Destructuring example*********************
  // const fruits = {
  //   apple: "apple",
  //   pear: "pear",
  //   banana: "banana",
  //   cherry: "not a cherry",
  // };
  // const names = ["Ragnar", "Timo", "Luna", "g", "j", "hello"];
  // // console.log("all fruits", fruits);
  // const { apple, pear, cherry = "cherry" } = fruits;
  // // console.log("the apple and the pear", apple, pear, cherry);
  // const [myDog, michaelsDog, adriansCat,  ...remainingNames] = names;
  // console.log("my dog", myDog);
  // console.log("after the spread", remainingNames[3]);
  const [pets, setPets] = useState([
    { id: 1, name: "Ragnar", owner: "Joshua" },
    { id: 2, name: "Luna", owner: "Adrian" },
    { id: 3, name: "Timo", owner: "Michael" },
  ]);

  return (
    <>
      <Navbar />

      {/* This is where the routes start with an 'S' */}
      <Routes>
        {/* this is a  single route */}
        <Route path="/" element={<HomePage allPets={pets} />} />
        <Route path="/about-pizza" element={<AboutPage />} />
        {/* This is a dynamic route example */}
        <Route path="/pet/:petId" element={<PetPage allPets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
