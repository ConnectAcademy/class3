import React, { useState } from "react";

import MyComponent from "./MyComponent";

const App = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      {show && <MyComponent />}
      <button onClick={() => setShow((p) => !p)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default App;
