import React from 'react'
import './button.css'

export function Button ({ children, type = 'button', handleClick }) {
  return (
    <button type={type} className='main-button' onClick={handleClick}>
      {children}
    </button>
  )
}
