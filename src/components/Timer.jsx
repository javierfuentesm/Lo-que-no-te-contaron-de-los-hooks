import React from "react";
export function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>The count is: {count}</div>;
}
