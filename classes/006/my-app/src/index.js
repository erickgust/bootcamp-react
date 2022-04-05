import ReactDOM from 'react-dom'

const Title = ({ text }) => (
  <h1>{text}</h1>
)

ReactDOM.render(
  <Title text='Title' />,
  document.querySelector('#root')
)
