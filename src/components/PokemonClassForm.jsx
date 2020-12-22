import React, { Component } from "react";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = null;
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
      .then((res) => res.json())
      .then((res) => {
        this.setState(res);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonToGet !== this.state) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${prevProps.pokemonToGet}/`)
        .then((res) => res.json())
        .then((res) => {
          this.setState(res);
        });
    }
  }
  render() {
    const pokemon = this.state;
    const style = { textTransform: "capitalize" };
    return (
      <div>
        <h1>Usando Class Component</h1>
        {pokemon ? (
          <>
            <img
              src={pokemon.sprites.front_default}
              alt={"Image of " + pokemon.name}
            />
            <p style={style}>Name: {pokemon.name}</p>
            <p style={style}>
              Type: {pokemon.types.map((x) => x.type.name).join(", ")}
            </p>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export function PokemonClassForm() {
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
