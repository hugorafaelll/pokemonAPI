import React, { useState, useEffect } from "react";
import "./PokeList.css";
import PokeCard from "./PokeCard";

function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
    console.log(allPokemons);
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokeCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpercase())}
              type={pokemonStats.type[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeList;
