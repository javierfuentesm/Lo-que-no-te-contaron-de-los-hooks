import React from "react";
import "./styles.css";
import ClassComponent from "./components/ClassComponent.jsx";
import ClassRerender from "./components/ClassRerender.jsx";
import { Rerender } from "./components/Rerender";
import { FunctionComponent } from "./components/FunctionComponent";
import { PokemonForm } from "./components/PokemonForm";

export default function App() {
  return (
    <div className="App">
      <h1>Usando un ClassComponent</h1>
      <ClassComponent />
      <Rerender />
      <ClassRerender />
      <FunctionComponent />
      <PokemonForm />
    </div>
  );
}
