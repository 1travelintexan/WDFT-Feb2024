import { useEffect, useState } from "react";

export const SpellsPage = () => {
  const [spells, setSpells] = useState(null);
  const fetchSpells = async () => {
    try {
      const response = await fetch("https://hp-api.onrender.com/api/spells");
      const allSpells = await response.json();

      setSpells(allSpells);
    } catch (err) {
      console.log("expelliarmus! there was error fetching all spells", err);
    }
  };

  //useEffect for when the page first loads
  useEffect(() => {
    fetchSpells();
  }, []);

  // all spellßßßßßßß tu peux le faire!merciii

  return (
    <div>
      {spells &&
        spells.map((oneSpell) => (
          <div key={oneSpell.id} className="spell-card">
            <h3>name: {oneSpell.name}</h3>
            <h3>description: {oneSpell.description}</h3>
          </div>
        ))}
    </div>
  );
};
