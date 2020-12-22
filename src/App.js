import React from "react";
import "./styles.css";
import ClassComponent from "./components/ClassComponent.jsx";
import ClassRerender from "./components/ClassRerender.jsx";
import { Rerender } from "./components/Rerender";
import { FunctionComponent } from "./components/FunctionComponent";
import { PokemonForm } from "./components/PokemonForm";
import { PokemonClassForm } from "./components/PokemonClassForm";
import { Timer } from "./components/Timer";
import { Timer2 } from "./components/Timer2";
import { Timer2Solve } from "./components/Timer2Solve";
import { Timer2SolveAlt } from "./components/Timer2SolveAlt";
import { RefsVsState } from "./components/RefsVsState";

export default function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <Rerender /> */}
      {/* <ClassRerender /> */}
      {/* <FunctionComponent /> */}
      {/* <PokemonForm /> */}
      {/* <Timer /> */}
      {/* <Timer2 /> */}
      {/* <Timer2Solve /> */}
      {/* <Timer2SolveAlt /> */}
      {/* <PokemonClassForm /> */}

      <RefsVsState />
    </div>
  );
}
