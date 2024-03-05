import { useState } from "react";
import { StudentCard } from "./components/StudentCard";
import { PetsPage } from "./components/PetsPage";
import "./App.css";
function App() {
  //normal variable that is not watched by React
  // const student = "Luna";
  //syntax for useState
  //the actual variable is in the 0 index
  // the setter for that variable is the 1
  const [studentState, setStudentState] = useState(null);
  const [moneyState, setMoneyState] = useState(100);

  //array state for the list and keys example
  const [petsState, setPetsState] = useState([
    { name: "Luna", id: 1, age: 8, animal: "Cat" },
    { name: "Ragnar", id: 0, age: 3, animal: "Dog" },
    { name: "Timo", id: 2, age: 9, animal: "Dog" },
  ]);

  const addMoney = () => {
    console.log("money added", moneyState);
    setMoneyState(moneyState + 10);
    setStudentState("Ragnar");
    console.log("moneyState added after", moneyState);
  };
  return (
    <>
      {/* pass the array of pets and the setter to the PetsPage component */}
      <PetsPage pets={petsState} setPetsState={setPetsState} />
      {/* To get all the info from the parent, we send them as props */}
      {/* THIS IS SENDING PROPS */}
      <StudentCard
        student={studentState}
        money={moneyState}
        addMoney={addMoney}
      />
    </>
  );
}

export default App;
