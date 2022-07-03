import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  > .text {
    display: block;
    font-size: var(--font-size-normal);
    font-weight: var(--font-medium);
    color: var(--black-color);
    margin-bottom: 5px;
  }

  > .input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    color: var(--black-color);
    border-radius: var(--border-radius);
    border: 1px solid var(--gray-color);
  }

  > .input:focus {
    border-color: transparent;
    outline: 2px solid var(--primary-color);
  }

  &.-color {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: var(--white-color);
    border-radius: var(--border-radius);
    border: 1px solid var(--gray-color);
    overflow: hidden;
  }

  &.-color > .text {
    margin: 0;
    padding: 9px;
  }

  &.-color > .color {
    background-color: transparent;
    appearance: none;
    border: none;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }

  &.-color > .color::-webkit-color-swatch {
    border-radius: 4px;
    border: none;
  }

  &.-color > .color::-moz-color-swatch {
    border-radius: 4px;
    border: none;
  }
`

export function Input ({ children, type, id, className = '' }) {
  return (
    <StyledLabel className={`-${className}`}>
      <span className='text'>{children}</span>
      <input
        type={type}
        id={id}
        className={className || 'input'}
        required
        />
    </StyledLabel>
  )
}

export function InputColor ({ children, ...props }) {
  return (
    <Input className='color' type='color' {...props}>
      {children}
    </Input>
  )
}
