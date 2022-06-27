import React, { useState } from 'react'
import { Form } from './components/form'
import { Header } from './components/header'
import { Table } from './components/table'

export function App () {
  const [cars, setCars] = useState([])

  function setCarData (carData) {
    setCars([...cars, carData])
  }

  return (
    <>
      <Header />
      <Form setCarData={setCarData} />
      <Table cars={cars} />
    </>
  )
}
