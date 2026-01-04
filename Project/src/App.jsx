import { useState } from "react"
import { X } from 'lucide-react';

const App = () => {
  const [tittle, setTittle] = useState("")
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ tittle, detail })
    setTask(copyTask)
    setTittle("")
    setDetail("")
  }
  const deleteNote = (idx) => {
    const copyTask = [...task]
    console.log(copyTask[idx]);


  }

  return (
    <div className='h-screen bg-black text-white flex'>

      <form className='flex p-10 items-start flex-col gap-4 bg-black w-1/2' onSubmit={(e) => { handleSubmit(e) }}>

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
          id='' />

        <button className="bg-white text-black w-full px-5 py-3 rounded-xl cursor-pointer active:scale-95"> Add Notes </button>

      </form>

      <div className="bg-gray-800 w-1/2 mt-10 p-4">

        <h1 className="ml-10 text-3xl"> Your Notes </h1>

        <div className="flex flex-wrap mt-5 gap-5 overflow-auto">

          {task.map((elem, idx) => {
            return <div className=" relative bg-cover h-52 w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] " key={idx}>
              <h3 className="leading-tight pt-10 ml-5 text-black font-bold">{elem.tittle}</h3>
              <p className="leading-tight font-medium ml-5 text-gray-600">{elem.detail}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className="text-white bg-red-500 absolute bottom-2 left-1/2 -translate-x-1/2 px-9 py-2 rounded object-cover cursor-pointer active:scale-95  text-xs font-bold"> Delete </button>
            </div>
          })}


        </div>

      </div>
    </div>
  )
}

export default App
