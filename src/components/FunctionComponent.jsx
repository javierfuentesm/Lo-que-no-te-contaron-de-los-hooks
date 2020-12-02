import React from "react";

export function FunctionComponent() {
  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  }, []); // empty array means nothing to watch, so run once and no more
  const style = { textTransform: "capitalize" };
  return (
    <div>
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
