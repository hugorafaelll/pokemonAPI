import React, { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard.js";
import "./PokeList.css";

function PokeList() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0";
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(url);
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
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container"></div>
      </div>
    </div>
  );
}

export default PokeList;
