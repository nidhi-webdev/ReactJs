import React, { useState } from 'react'

const App = () => {
  const [arr, setArr] = useState({ user: "Nidhi", age: 20 })

  const changeuser = () => {
    const newUser = { ...arr }
    arr.user = "Sunidhi"
    setArr(arr)
}

  return (
    <div>
      <h1></h1>
      <button onClick={changeuser}> Click </button>
    </div>
  )
}

export default App
