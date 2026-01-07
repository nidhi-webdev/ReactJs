import { useEffect, useState } from "react"

const App = () => {
const [num, setNum] = useState(0)
const [num2, setNum2] = useState(100)

const count = () => {
  setNum(num + 1)
  setNum2(num + 10)
}

useEffect(() => {
  console.log("Hello");
  
}, [num])


  return (
    <div className="p-10">
      <h1 className="bold">Num: {num} </h1>
       <h1 className="bold"> Num2 :{num2} </h1>
      <button onClick={count} className='bg-amber-500 text-white p-3 rounded-2xl'> Click me </button>
    </div>
  )
}

export default App
