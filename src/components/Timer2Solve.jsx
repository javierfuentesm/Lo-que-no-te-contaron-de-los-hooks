import React from "react";
export function Timer2Solve() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(count);
  const [randomNum, setRandomNum] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      countRef.current = countRef.current + 1;
      setCount(countRef.current);
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
