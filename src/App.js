import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("")

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const handleSubmit = e => {
    setUserInput(e.target.value)
  }

  return (
    <>
    <h1>{count}</h1>
    <h1>{userInput}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>+</button>
    <input onChange={handleSubmit}/>
    </>
  )
}

export default App