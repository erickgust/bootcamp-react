import React from 'react'
import { Button } from '../button'
import { NoCar } from '../no-car'
import './table.css'

export function Table ({ cars, handleDelete }) {
  return (
    <table className="cars-table">
      <thead>
        <tr className="table-row">
          <th>Imagem</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cars.length === 0 && <NoCar />}

        {cars.map((car) => (
          <tr className='table-row' key={car.plate}>
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}
