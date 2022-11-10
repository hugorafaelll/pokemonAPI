import React from "react";
import "./PokeList.css";

function PokeList() {
<<<<<<< HEAD
  const url = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0";
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
  };

  useEffect(() => {
    getAllPokemons();
    console.log(allPokemons);
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container"></div>
      </div>
    </div>
  );
=======
  return <div>PokeList</div>;
>>>>>>> parent of 10dd866 (try use images from api)
}

export default PokeList;
