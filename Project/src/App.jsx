import React, { useState } from 'react'

const App = () => {
  const [arr, setArr] = useState([10, 20, 30, 50])

  const changearr = () => {
    const newArr = { ...arr }
    console.log(newArr);

    newArr[0] = 500
    setArr(newArr)
  }

  return (
    <div>
      <h1> {arr} </h1>
      <button onClick={changearr}> Click </button>
    </div>
  )
}

export default App
