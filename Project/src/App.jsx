import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState(" ")



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name);
  }


  return (
    <div>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }}>
        <input value={name}
        onChange={(e) => {
         setName(e.target.value)
        }}
        type='text' placeholder='Enter Your Name' />

        <button> Submit </button>
      </form>
    </div>
  )
}

export default App
