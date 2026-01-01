import React from 'react'

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted");

  }


  return (
    <div>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }}>
        <input type='text' placeholder='Enter Your Name' />

        <button> Submit </button>
      </form>
    </div>
  )
}

export default App
