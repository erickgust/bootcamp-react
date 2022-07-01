import React from 'react'
import './input.css'

export function Input ({ children, type, id, className = '' }) {
  const variantClassName = className && ` -${className}`

  return (
    <label className={'input-form' + variantClassName}>
      <span className='text'>{children}</span>
      <input
        type={type}
        id={id}
        className={className || 'input'}
        required
        />
    </label>
  )
}

export function InputColor ({ children, ...props }) {
  return (
    <Input className='color' type='color' {...props}>
      {children}
    </Input>
  )
}
