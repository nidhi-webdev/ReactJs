
const App = () => {
  return (
    <div className='h-screen'>

      <form className='flex p-10 items-start flex-col gap-4'> 
        <input 
        type='text' 
        placeholder='Enter Notes Heading' 
        className=' border-2 rounded-xl p-2'
        />
        <textarea 
        className='border-2  rounded-xl h-32 p-2'
        placeholder='Enter Details' 
        name='' 
        id='' 
        defaultValue="" />
      </form>
    </div>
  )
}

export default App
