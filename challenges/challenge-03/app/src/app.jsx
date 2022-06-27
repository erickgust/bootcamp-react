import React, { useState } from 'react'
import { Form } from './components/form'
import { Header } from './components/header'
import { Table } from './components/table'

export function App () {
  const [cars, setCars] = useState([])

  return (
    <>
      <Header />
      <Form setCars={setCars} cars={cars} />
      <Table cars={cars} />
    </>
  )
}
