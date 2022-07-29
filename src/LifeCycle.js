import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(8);

  useEffect(() => {
    console.log("I mouted for the first time");
    return () => {
      console.log("I unmounted");
    };
  }, [count]);
  return (
    <>
      {count2}
      <button onClick={() => setCount((prev) => prev + 1)}>LifeCycle</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        Dont call useEffect
      </button>
    </>
  );
};

export default LifeCycle;
