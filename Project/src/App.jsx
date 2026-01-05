import React from 'react'

const App = () => {

 const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(res);
  
  
}

  return (
    <div>
      <button onClick={getData}> Get data </button>
    </div>
  )
}

export default App
