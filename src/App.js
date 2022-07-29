import React, { useState } from "react";

import LifeCycle from "./LifeCycle";

const App = () => {
  const [show, setShow] = useState(false);
  const [userInpt, setUserInpt] = useState("");
  console.log("App component rendered");
  return (
    <>
      <h1>Hello World!</h1>
      {show && <LifeCycle />}
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      <input onChange={(e) => setUserInpt(e.target.value)} />
    </>
  );
};

export default App;
