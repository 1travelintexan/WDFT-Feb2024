import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const CharacterDetailPage = () => {
  const [oneCharacter, setOneCharacter] = useState(null);
  // //without destructuring
  // const params = useParams()
  // const characterId = params.id
  //Destructure the params
  const { id } = useParams();
  //useEffect that watches the parameter and calls the function anytime it changes
  //***************updating phase*************
  useEffect(() => {
    console.log("updating phase");
    async function getOneChar() {
      axios(`https://hp-api.onrender.com/api/character/${id}`)
        //************AXIOS ALWAYS RETURNS THE INFO IN THE .DATA KEY ****************/
        .then((response) => {
          console.log(response.data);
          setOneCharacter(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getOneChar();
  }, [id]);

  //this one checks if there is a character and shows a loading... if no character :)
  if (!oneCharacter) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>Detail Page</h2>
      <Link to="/spells">All Spells</Link>
      <Link to="/">Home</Link>
      <div>
        <img
          src={oneCharacter.image}
          alt={oneCharacter.name}
          style={{ height: "300px" }}
        />
        <h3>Name: {oneCharacter.name}</h3>
        <h3>Actor: {oneCharacter.actor}</h3>
        <h3>House: {oneCharacter.house}</h3>
        <h3>Patronus: {oneCharacter.patronus}</h3>
        <h3>Wand Material: {oneCharacter.wand.wood}</h3>
        <h3>Wand Core: {oneCharacter.wand.core}</h3>
        <h3>Wand Length: {oneCharacter.wand.length}</h3>
      </div>
    </div>
  );
};
