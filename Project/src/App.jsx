import './index.css';

const App = () => {

  const inputChnage = (val) => {
    console.log(val);

  }

  return (
    <div>
      <input placeholder='Enter Name' onChange={(elem) => {
        inputChnage(elem.target.value)
      }} />
    </div>
  )
}

export default App
