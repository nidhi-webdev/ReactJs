import './index.css';

const App = () => {

  const inputChnage = () => {
    console.log("Change");

  }

  return (
    <div>
      <input placeholder='Enter Name' onChange={inputChnage} />
    </div>
  )
}

export default App
