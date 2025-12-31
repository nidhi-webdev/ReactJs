import React, { useState } from 'react'

const App = () => {
  const [arr, setArr] = useState({ user: "Nidhi", age: 20 })

  const changeuser = () => {
    const newArr = { ...arr }
    console.log(newArr);

    newArr.user = "Sunidhi"
    setArr(newArr)
  }

  return (
    <div>
      <h1> {arr.user} </h1>
      <button onClick={changeuser}> Click </button>
    </div>
  )
}

export default App
