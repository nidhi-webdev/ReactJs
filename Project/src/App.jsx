import axios from 'axios'

const App = () => {

  const getData =  () => {
   const res = axios.get('https://jsonplaceholder.typicode.com/users')
console.log(res);

  }

  return (
    <div>
      <button onClick={getData}> Get data </button>
    </div>
  )
}

export default App
