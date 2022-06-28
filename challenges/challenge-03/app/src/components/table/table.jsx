import React from 'react'
import { Button } from '../button'
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
        {cars.length === 0 && (
          <tr className='no-car'>
            <td colSpan={6}>
              <h1>Nenhum carro registrado</h1>
            </td>
          </tr>
        )}

        {cars.map((car) => (
          <tr className='table-row' key={car.plate}>
            <td><img src={car.image} alt={car.brandModel} /></td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td>{car.color}</td>
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
