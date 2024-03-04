import "./App.css";
import LogoComponent from "./components/Logo";
import Navbar from "./components/Navbar";
// Named exports need to be within { } on import
import { ChildrenComponent } from "./components/ChildrenComponent";
// Un named exports are without { } and you can change the name if you want
import logoImage from "./ironhack-logo.png";
import reactImg from "./logo.svg";

function App() {
  // anything in this area is read as straight javascript
  const ourNames = { dogName: "Ragnar", catName: "Luna" };
  const catFunction = () => {
    const cat = "very nice cat";
    return cat;
  };
  return (
    <div className="App">
      {/* This is calling the navbar function from the components folder */}
      {/* This is how to 'send' data */}
      <Navbar
        names={ourNames}
        food="pizza"
        country="France"
        logoImage={logoImage}
        text="This is my Ironhack logo"
      />
      {/* Children are anything between the > < of a component */}
      <ChildrenComponent>Pepperoni</ChildrenComponent>
      <ChildrenComponent>Pineapple</ChildrenComponent>
      <ChildrenComponent>Mushroom</ChildrenComponent>
      <header className="App-header">
        <LogoComponent logoImage={reactImg} />
        {/* If a function returns a string then you can call it in between { } in JSX */}
        <h3>{catFunction()}</h3>
      </header>
      <h1>Showing the one parent rule in React</h1>
    </div>
  );
}

export default App;
