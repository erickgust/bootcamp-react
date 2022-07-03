import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  font-size: var(--font-size-normal);
  font-weight: var(--font-bold);
  padding: 10px;
  max-width: 150px;
  width: 100%;
  align-self: center;
  cursor: pointer;
  transition: background-color 100ms ease-in;

  &:hover {
    background-color: var(--btn-hover-color);
  }

`

export function Button ({ children, type = 'button', handleClick }) {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}
