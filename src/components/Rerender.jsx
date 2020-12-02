import React from "react";

export function Rerender() {
  const [bool, setBool] = React.useState(false);
  const randomNum = Math.random();

  return (
    <div>
      <p>Este número random será diferente cada vez que le des click:</p>
      <p>{randomNum}</p>
      <p>Estado de bool {`${bool}`}</p>
      <button onClick={() => setBool(!bool)}>Dispara un re-renderizado</button>
    </div>
  );
}
