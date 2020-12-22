import React from "react";
function Pokemon({ pokemonToGet }) {
  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToGet}/`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  }, [pokemonToGet]); // obtener un nuevo pokemon cuando la prop pokemonToGet cambia
  const style = { textTransform: "capitalize" };
  return (
    <div>
      {pokemon ? (
        <>
          <img
            src={pokemon.sprites.front_default}
            alt={"Image of " + pokemon.name}
          />
          <p style={style}>Nombre: {pokemon.name}</p>
          <p style={style}>
            Tipo: {pokemon.types.map((x) => x.type.name).join(", ")}
          </p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export function PokemonForm() {
  const [inputValue, setInputValue] = React.useState("pikachu");
  const [pokemonToGet, setPokemonToGet] = React.useState("charmander");
  function getPokemon() {
    setPokemonToGet(inputValue.trim().toLowerCase());
    setInputValue("");
  }
  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button onClick={getPokemon}>Buscar Pokemon</button>
      <Pokemon pokemonToGet={pokemonToGet} />
    </div>
  );
}
