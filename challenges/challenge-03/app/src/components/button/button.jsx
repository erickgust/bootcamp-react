import React from 'react'
import './button.css'

export function Button ({ children, type = 'button' }) {
  return (
    <button type={type} className='main-button'>
      {children}
    </button>
  )
}
