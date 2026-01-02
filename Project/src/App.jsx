const App = () => {
  return (
    <div className='h-screen'>

      <form className='flex p-10 items-start  w-full'>
        <div className="flex p-10 items-start flex-col gap-4 justify-between w-1/2 ">
          <input
            type='text'
            placeholder='Enter Notes Heading'
            className='border-2 rounded-xl p-2 w-full'
          />
          <textarea
            className='border-2 rounded-xl h-32 p-2 w-full'
            placeholder='Enter Details'
            name=''
            id=''
            defaultValue="" />
          <button className="bg-black text-white w-full px-5 py-3 rounded-xl cursor-pointer"> Add Notes </button>
        </div>
        <img className="h-50 rotate-y-180" src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" />

      </form>
    </div>
  )
}

export default App
