import React, { useEffect, useState } from 'react'

export const App = () => {
  const [counter, setCounter] = useState(1)

  return (
    <>
      {counter > 0 && <Counter counter={counter}/>}
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>
  )
}

function Counter ({ counter }) {
  useEffect(() => {
    console.log('useEffect do Counter')

    return () => {
      console.log('clean useEffect do Counter')
    }
  })

  return (
    <h1>{counter}</h1>
  )
}
