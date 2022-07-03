import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle, css } from 'styled-components'
import { App } from './app'

const Reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button, input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
`

const Base = css`
  :root {
    --font-bold: 700;
    --font-medium: 500;
    --font-regular: 400;
    --font-size-title: 36px;
    --font-size-normal: 18px;

    --border-radius: 5px;

    --primary-color: #ED254E;
    --btn-hover-color: #BD0F32;
    --light-gray-color: #EBEBEB;
    --black-color: #222222;
    --gray-color: #999999;
    --white-color: #FFF;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--light-gray-color);
  }
`

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Base}
`

const root = document.querySelector('[data-js="root"]')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
