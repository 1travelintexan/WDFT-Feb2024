import "./App.css";
import LogoComponent from "./components/Logo";
import Navbar from "./components/Navbar";
import { Pizza } from "./components/Pizza";
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
      <Pizza>Pepperoni</Pizza>
      <Pizza>Pinnapple</Pizza>
      <Pizza>Mushroom</Pizza>
      <header className="App-header">
        <LogoComponent logoImage={reactImg} />
        <h3>{catFunction()}</h3>
      </header>
      <h1>Showing the one parent rule in React</h1>
    </div>
  );
}

export default App;
