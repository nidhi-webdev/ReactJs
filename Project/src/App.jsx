import { useEffect, useState } from "react"

const App = () => {
const [num, setNum] = useState(0)

const count = () => {
  setNum(num + 1)
}

useEffect(() => {
  console.log("Hello");
  
}, [])


  return (
    <div className="p-10">
      <h1 className="bold"> {num} </h1>
      <button onClick={count} className='bg-amber-500 text-white p-3 rounded-2xl'> Click me </button>
    </div>
  )
}

export default App
