import ReactDOM from 'react-dom'

const Title = ({ children }) => (
  <>
    <h1>{children}</h1>
    <h2>Subtitle</h2>
  </>
)

ReactDOM.render(
  <Title>My title</Title>,
  document.querySelector('#root')
)
