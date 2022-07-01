import React from 'react'
import { Button } from '../button'
import { Input, InputColor } from '../input'

import './form.css'

export function Form ({ setCarData }) {
  function getFormElement (event) {
    return (elementName) => {
      return event.target.elements[elementName].value
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    const getElement = getFormElement(e)
    const data = {
      image: getElement('image'),
      brandModel: getElement('model'),
      year: getElement('year'),
      plate: getElement('plate'),
      color: getElement('color')
    }

    setCarData(data)

    e.target.reset()
    e.target.elements[0].focus()
  }

  return (
    <form className='cars-form' onSubmit={handleSubmit}>
      <Input type='url' id='image'>Imagem</Input>
      <Input type='text' id='model'>Marca / Modelo</Input>
      <Input type='text' id='year'>Ano</Input>
      <Input type='text' id='plate'>Placa</Input>
      <InputColor id='color'>Cor</InputColor>

      <Button type='submit'>Enviar</Button>
    </form>
  )
}
