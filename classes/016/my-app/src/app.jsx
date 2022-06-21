import React, { useEffect } from 'react'

export const App = () => {
  useEffect(() => { getCep('06233-030') })

  function getCep (cep) {
    fetch(`https://ws.apicep.com/cep.json?code=${cep}`)
      .then(response => response.json())
      .then(result => console.log(result))
  }

  return (
    <button>Buscar CEP</button>
  )
}
