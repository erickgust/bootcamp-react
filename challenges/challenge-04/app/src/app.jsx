import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form } from './components/form'
import { Header } from './components/header'
import { Table } from './components/table'
import { Toast } from './components/toast'
import { del, get, post } from './http'

const StyledWrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-around;
`

export function App () {
  const [cars, setCars] = useState({})
  const [toast, setToast] = useState({ error: false, message: '' })
  const [visible, setVisible] = useState(false)
  const url = 'http://localhost:3333/cars/'

  useEffect(() => {
    async function getCar () {
      const response = await get(url)

      if (Array.isArray(response)) {
        setCars(response.reduce((acc, car) => ({
          ...acc,
          [car.plate]: car
        }), {}))
      }
    }

    getCar()
  }, [])

  function getResponse (response) {
    setToast({ error: false, ...response })
    setVisible(true)
  }

  function setCarData (carData) {
    if (typeof cars[carData.plate] === 'undefined') {
      setCars((cars) => ({
        ...cars,
        [carData.plate]: carData
      }))
    }

    post(url, carData).then(getResponse)
  }

  function handleDelete ({ plate }) {
    const { [plate]: deleted, ...restCars } = cars
    setCars(restCars)
    del(url, { plate }).then(getResponse)
  }

  return (
    <>
      <Header />
      <StyledWrapper>
        <Form setCarData={setCarData} />
        <Table cars={Object.values(cars)} handleDelete={handleDelete} />
      </StyledWrapper>
      <Toast visible={visible} setVisible={setVisible} toast={toast} />
    </>
  )
}
