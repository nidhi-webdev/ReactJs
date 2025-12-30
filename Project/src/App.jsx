import React from 'react'

const App = () => {
  const a = 20;

  const changeValue = (val) => {
    console.log("val");

  }


  return (
    <div>
      <h1 className='text-black'> Value of a is {a} </h1>
      <button className='w-32'
        onClick={changeValue}
      >
        click
      </button>
    </div>
  )
}

export default App
