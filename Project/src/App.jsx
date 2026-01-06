import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data)


  }

  return (
    <div>
      <button onClick={getData}> Get data </button>
      <div>
        {data.map(() => {
          return "hello"
        })}
      </div>

    </div>
  )
}

export default App
