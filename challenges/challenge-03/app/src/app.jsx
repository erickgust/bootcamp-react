import React, { useState, useEffect } from 'react'
import { Form } from './components/form'
import { Header } from './components/header'
import { Table } from './components/table'
import { del, get, post } from './http'

export function App () {
  const [cars, setCars] = useState({})
  const url = 'http://localhost:3333/cars/'

  useEffect(() => {
    async function getCar () {
      const response = await get(url)
      setCars(response.reduce((acc, car) => ({
        ...acc,
        [car.plate]: car
      }), {}))
    }

    getCar()
  }, [])

  function setCarData (carData) {
    if (typeof cars[carData.plate] === 'undefined') {
      setCars((cars) => ({
        ...cars,
        [carData.plate]: carData
      }))
    }

    post(url, carData)
  }

  function handleDelete ({ plate }) {
    const { [plate]: deleted, ...restCars } = cars
    setCars(restCars)
    del(url, { plate })
  }

  return (
    <>
      <Header />
      <Form setCarData={setCarData} />
      <Table cars={Object.values(cars)} handleDelete={handleDelete} />
    </>
  )
}
