import React from 'react'

const Input = ({ children, type, className = 'input' }) => (
  <label className='main-label'>
    <span>{children}</span>
    <input type={type} className={className} required />
  </label>
)

export function App () {
  return (
    <form>
      <Input type='url'>Imagem</Input>
      <Input type='text'>Marca / Modelo</Input>
      <Input type='text'>Ano</Input>
      <Input type='text'>Placa</Input>
      <Input type='color' className='color'>Cor</Input>
    </form>
  )
}
