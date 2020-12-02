import React from "react";

export function RefsVsState() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  return (
    <div>
      <p>Contador del State: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementa el contador del estado
      </button>
      <p>Contador del Ref : {countRef.current}</p>
      <button onClick={() => (countRef.current = countRef.current + 1)}>
        Incrementa contador del Ref
      </button>
    </div>
  );
}
