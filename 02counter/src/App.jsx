import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
  // let counter = 5;
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    // setCounter(counter)
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {   
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>
      <p>counter: {counter}</p>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
