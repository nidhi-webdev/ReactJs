const App = () => {
  return (
    <div className='h-screen'>

      <form className='flex p-10 items-start gap-4 w-full'>
        <div className="flex p-10 items-start flex-col">
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
        <img src="https://cdn.pixabay.com/photo/2017/03/18/17/46/notepad-2154581_640.png" />
        </div>
      </form>
    </div>
  )
}

export default App
