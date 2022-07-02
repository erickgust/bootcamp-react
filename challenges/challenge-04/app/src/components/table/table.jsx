import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { NoCar } from '../no-car'

const StyledRow = styled.tr`
  &:nth-child(2n) {
    background-color: var(--light-gray-color);
  }

  > th {
    font-size: var(--font-size-normal);
    font-weight: var(--font-medium);
  }

  > th, td {
    padding: 10px 15px;
    text-align: center;
  }
`

const StyledTable = styled.table`
  min-width: 600px;
  width: 100%;
  max-width: 55vw;
  border-spacing: 0;
  background-color: var(--white-color);
  border: 1px solid var(--gray-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  align-self: start;

  > thead {
    background-color: var(--black-color);
    color: var(--white-color);
  }
`

export function Table ({ cars, handleDelete }) {
  return (
    <StyledTable>
      <thead>
        <StyledRow>
          <th>Imagem</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th></th>
        </StyledRow>
      </thead>
      <tbody>
        {cars.length === 0 && <NoCar />}

        {cars.map((car) => (
          <StyledRow key={car.plate}>
            <td>
              <img
                src={car.image}
                alt={car.brandModel}
                style={{ maxWidth: '100px' }}
              />
              </td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: car.color,
                borderRadius: '5px'
              }}/>
            </td>
            <td>
              <Button handleClick={() => handleDelete(car)}>
                Deletar
              </Button>
            </td>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  )
}
