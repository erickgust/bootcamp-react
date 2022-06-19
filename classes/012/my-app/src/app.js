import { useState } from "react"

const App = () => {
  const [inputValue, setInputValue] = useState('')

  function handleChange(e) {
    console.log('input value', e.target.value)
    setInputValue(e.target.value.replace(/\D+/g, ''))
  }

  return (
    <form>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
