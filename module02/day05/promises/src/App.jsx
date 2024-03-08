import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState(null);
  //**************Callback functions*****************
  function sayHi(func) {
    setTimeout(() => {
      console.log("Hi :)");
      func();
    }, 1000);
  }
  function sayBye() {
    console.log("bye");
  }
  // console.log(sayHi(), sayBye());
  //this is invoking the sayHi function with sayBye as a callback
  sayHi(sayBye);

  //**********************creating a Promise***********/
  const ourPromise = new Promise((resolve, reject) => {
    if (2 + 2 === 4) {
      resolve("Yes that is great! 2 + 2 does equal 4");
    } else {
      reject("Oh no, thats not good");
    }
  });
  const ourPromise1 = new Promise((resolve, reject) => {
    if ("Ragnar" === "Ragnar") {
      resolve("Yes Ragnar is a great name");
    } else {
      reject("Oh no, thats not good");
    }
  });
  const ourPromise2 = new Promise((resolve, reject) => {
    if (true) {
      resolve("true true true");
    } else {
      reject("Oh no, thats not good");
    }
  });
  //**************consuming the promise**************
  // ourPromise
  //   //if the promise is successful
  //   .then((responseIfSuccessful) => {
  //     console.log("Our response from our promise", responseIfSuccessful);
  //   })
  //   //the catch is if it failed
  //   .catch((error) => {
  //     console.log("there was an error", error);
  //   });

  //********************Promise all Example ************* */
  // Promise.all([ourPromise, ourPromise1, ourPromise2])
  //   .then((responseFromAll) => {
  //     console.log("here is response", responseFromAll);
  //   })
  //   .catch((err) => {
  //     console.log("this is the error inside all", err);
  //   });
  //******************fetch Example with .then & .catch ****************/
  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((responseIfSuccessful) => {
  //     console.log("before json", responseIfSuccessful);
  //     return responseIfSuccessful.json();
  //   })
  //   .then((parsed) => {
  //     console.log("made it here", parsed);
  //   })
  //   .catch((err) => {
  //     console.log("the error", err);
  //   })
  //   .finally(() => {
  //     console.log("this always happens");
  //   });
  // //*******************fetch example with async & await *********** */
  //async needs to tell the function that you will use await inside
  async function getChars() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const parsed = await response.json();
      console.log("here the parsed data", parsed);
      setCharacters(parsed.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("this is the finally");
    }
  }

  //********************axios example async and await ****************/
  // const getChars = async () => {
  //   try {
  //     const response = await axios(
  //       "https://hp-api.onrender.com/api/characters/house/slytherin"
  //     );
  //     //axios will ALWAYS give the info in the .data key
  //     setCharacters(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    getChars();
  }, []);
  //always remember to call the function
  return (
    <>
      <h1>Promises</h1>
      {characters &&
        characters.map((oneChar) => {
          return (
            <div key={oneChar.id}>
              <img src={oneChar.image} alt={oneChar.name} />
              <h4>{oneChar.name}</h4>
            </div>
          );
        })}
    </>
  );
}

export default App;
