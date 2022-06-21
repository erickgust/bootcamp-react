import React, { useState } from 'react'

export const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Title>{counter}</Title>
      <Buttons setCounter={setCounter}/>
    </>
  )
}

function Title ({ children }) {
  return <h1>{children}</h1>
}

function Buttons ({ setCounter }) {
  function increment () {
    setCounter(prevState => prevState + 1)
  }

  function decrement () {
    setCounter(prevState => prevState - 1)
  }

  return (
    <>
      <button type="button" onClick={decrement}>Decrementar</button>
      <button type="button" onClick={increment}>Incrementar</button>
    </>
  )
}
