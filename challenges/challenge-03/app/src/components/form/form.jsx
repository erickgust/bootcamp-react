import React from 'react'
import { Button } from '../button'
import { Input, InputColor } from '../input'

import './form.css'

export function Form () {
  return (
    <form className='cars-form'>
      <Input type='url'>Imagem</Input>
      <Input type='text'>Marca / Modelo</Input>
      <Input type='text'>Ano</Input>
      <Input type='text'>Placa</Input>
      <InputColor type='color'>Cor</InputColor>

      <Button type='submit'>Enviar</Button>
    </form>
  )
}
