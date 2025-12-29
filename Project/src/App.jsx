import React from 'react'
import Card from './Card'

const App = () => {

  const data = [
    {
      name: "Nidhi",
      image: "https://images.unsplash.com/photo-1766860891078-3aeb5647953f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis commodi eum! Nesciunt, neque eveniet. Optio neque nostrum aut eum a quae adipisci repudiandae ad aperiam voluptatem! Quibusdam, soluta. Totam!"

    },
    {
      name: "Sunidhi",
      image: "https://images.unsplash.com/photo-1761839258513-099c3121d72d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis commodi eum! Nesciunt, neque eveniet. Optio neque nostrum aut eum a quae adipisci repudiandae ad aperiam voluptatem! Quibusdam, soluta. Totam!"

    }

  ]

  return (
    <div className='parent'>
      {data.map(function (elem) {
        return <Card data={elem}/> 
        
      })}



    </div>
  )
}

export default App
