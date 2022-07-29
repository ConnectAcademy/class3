import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name, surname, age);
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{surname}</h3>
      <h3>{age}</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setSurname(e.target.value)} />
        <input onChange={(e) => setAge(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
