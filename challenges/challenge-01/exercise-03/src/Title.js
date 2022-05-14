import { createElement } from 'react'

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
}

export const Title = ({ as, children }) => (
  createElement(elements[as] || elements.h1, null, children)
) 
