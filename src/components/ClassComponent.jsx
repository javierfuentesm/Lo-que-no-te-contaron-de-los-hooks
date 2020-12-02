import React, { Component } from "react";

export default class Pokemon extends Component {
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
  render() {
    const pokemon = this.state;
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
}
