import React, { useState } from 'react'

export const App = () => {
  const [counter, setCounter] = useState(0)

  function handleCounter () {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={handleCounter}>
        Incrementar
      </button>
    </>
  )
}
