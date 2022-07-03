import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  height: 90px;
  background-color: var(--black-color);
  justify-content: center;
  align-items: center;

  > .title {
    color: var(--white-color);
    font-size: var(--font-size-title);
    font-weight: var(--font-bold);
  }
`

export function Header () {
  return (
    <StyledHeader>
      <h1 className='title'>Cadastrar Carros</h1>
    </StyledHeader>
  )
}
