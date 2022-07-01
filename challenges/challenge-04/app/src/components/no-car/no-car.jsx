import React from 'react'
import imgUrl from './off_road.svg'
import './no-car.css'

export function NoCar () {
  return (
    <tr>
      <td colSpan={6}>
        <figure className='no-car'>
          <img src={imgUrl} alt='Carro fora da estrada' className='image' />
          <figcaption className='subtitle'>Nenhum carro registrado</figcaption>
        </figure>
      </td>
    </tr>
  )
}
