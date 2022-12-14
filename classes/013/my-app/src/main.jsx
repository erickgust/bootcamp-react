import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('[data-js="root"]'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
