import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'

import './reset.css'
import './base.css'
import './style.css'

const root = document.querySelector('[data-js="root"]')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
