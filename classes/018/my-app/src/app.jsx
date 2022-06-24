import React, { useEffect, useState } from 'react'

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [cep, setCep] = useState(null)

  useEffect(() => {
    console.log('enter useEffect')
    function getCep () {
      if (cep === null) {
        return
      }

      fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
        .then(response => response.json())
        .then(result => console.log(result))
    }

    getCep()

    return () => {
      console.log('clear useEffect')
    }
  }, [cep])

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Cep setCep={setCep} />
    </>
  )
}

function cepMask (value) {
  return value
    .replace(/\D+/, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

function Cep ({ setCep }) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    setCep(inputValue)
  }
  function handleChange (e) {
    const value = e.currentTarget.value
    const cep = cepMask(value)
    setInputValue(cep)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Buscar CEP</button>
    </form>
  )
}

function Counter ({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>
  )
}
