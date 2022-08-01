import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");

  useEffect(() => {
    if (state1 !== "") {
      console.log("State 1 se promeni");
    }
  }, [state1]);

  useEffect(() => {
    if (state2 !== "") {
      console.log("State 2 se promeni");
    }
  }, [state2]);

  return (
    <>
      <input
        placeholder="Change state 1"
        onChange={(evt) => setState1(evt.target.value)}
      />
      <input
        placeholder="Change state 2"
        onChange={(evt) => setState2(evt.target.value)}
      />
    </>
  );
};

export default MyComponent;
