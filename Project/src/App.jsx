import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [num, setNum] = useState("2")



  const Increase = () => {
    console.log("Increasing");

  }
  const Decrease = () => {
    console.log("Decreasing")

  }

  return (
    <div>
      <h1> {num} </h1>
      <button onClick={Increase}> Increase </button>
      <button onClick={Decrease}> Decrease </button>
    </div>
  )
}

export default App
