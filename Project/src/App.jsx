import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState("")

  const changeValue = () => {
    setNum(30)

  }


  return (
    <div>
      <h1 className='text-black'> Value of num is {num} </h1>
      <button className='w-32'
        onClick={changeValue}
      >
        click
      </button>
    </div>
  )
}

export default App
