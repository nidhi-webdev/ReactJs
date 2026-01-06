import React from 'react'

const App = () => {

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    console.log(data);



  }

  return (
    <div>
      <button onClick={getData}> Get data </button>
    </div>
  )
}

export default App
