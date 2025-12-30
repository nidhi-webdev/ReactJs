import './index.css';
import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChnage = (val) => {
    setInputValue(val);
    console.log(val);

  }

  return (
    <div>
      <input placeholder='Enter Name' value={inputValue}
        onChange={(e) => {
          inputChnage(e.target.value)
        }} />
    </div>
  )
}

export default App
