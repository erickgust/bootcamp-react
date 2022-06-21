import React from 'react'

export const App = () => {
  function handleClick (cep) {
    fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
      .then(response => response.json())
      .then(result => console.log(result))
  }

  return (
    <button onClick={() => handleClick('06233-030')}>Buscar CEP</button>
  )
}
