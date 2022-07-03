import React from 'react'
import imgUrl from './off_road.svg'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > .image {
    width: 300px;
  }

  > .subtitle {
    font-weight: var(--font-regular);
    font-size: var(--font-size-normal);
    color: var(--black-color);
  }
`

export function NoCar () {
  return (
    <tr>
      <td colSpan={6}>
        <StyledFigure>
          <img src={imgUrl} alt='Carro fora da estrada' className='image' />
          <figcaption className='subtitle'>Nenhum carro registrado</figcaption>
        </StyledFigure>
      </td>
    </tr>
  )
}
