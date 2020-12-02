import React from "react";
export function Timer2SolveAlt() {
  const [count, setCount] = React.useState(0);
  const [randomNum, setRandomNum] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
      setRandomNum(Math.random());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>The count is: {count}</p>
      <p>RandomNum is {randomNum}</p>
    </div>
  );
}
