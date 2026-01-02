import { useState } from "react"

const App = () => {
  const [tittle, setTittle] = useState(" ")
  const [detail, setDetail] = useState(" ")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTittle("")
    setDetail("")
  }

  return (
    <div className='h-screen bg-black text-white flex'>

      <form className='flex p-10 items-start flex-col gap-4 bg-black w-1/2' onClick={(e) => { handleSubmit(e) }}>

        <h1 className="text-3xl"> Add Notes </h1>

        <input
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value)
          }}
          type='text'
          placeholder='Enter Notes Heading'
          className='border-2 rounded-xl p-2 w-full'
        />

        <textarea
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
          className='border-2 rounded-xl h-32 p-2 w-full'
          placeholder='Enter Details'
          name=''
          id=''
          defaultValue="" />

        <button className="bg-white text-black w-full px-5 py-3 rounded-xl cursor-pointer active:scale-95"> Add Notes </button>

      </form>

      <div className="bg-gray-800 w-1/2 mt-10 p-4">

        <h1 className="ml-10 text-3xl"> Your Notes </h1>

        <div className="flex flex-wrap mt-5 gap-5 overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white   "></div>
          <div className="h-52 w-40 rounded-2xl bg-white  "></div>
          <div className="h-52 w-40 rounded-2xl bg-white   "></div>
          <div className="h-52 w-40 rounded-2xl bg-white "></div>
          <div className="h-52 w-40 rounded-2xl bg-white  "></div>
          <div className="h-52 w-40 rounded-2xl bg-white  "></div>
        </div>

      </div>
    </div>
  )
}

export default App
