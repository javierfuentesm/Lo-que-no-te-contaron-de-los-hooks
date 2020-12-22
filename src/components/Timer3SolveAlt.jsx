import React from "react";
export function Timer3SolveAlt() {
  const [count, setCount] = React.useState(0);
  const [randomNum, setRandomNum] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
      setRandomNum(Math.random());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <p>The count is: {count}</p>
      <p>RandomNum is {randomNum}</p>
    </div>
  );
}
