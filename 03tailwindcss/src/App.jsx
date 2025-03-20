import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    userName: "Pavan",
    age: 22
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-orange-400 text-white p-5 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card 
        userName = "Hello React"
        // btnText = "Click Me"
        // someObj = {myObj}
        // someArr = {myArr}
      />
    </>
  )
}

export default App
