import axios from 'axios'

const App = () => {

  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);

  }

  return (
    <div>
      <button onClick={getData}> Get data </button>
    </div>
  )
}

export default App
