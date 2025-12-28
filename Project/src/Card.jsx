import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt='Normal image'/>
        <h1> {props.name} </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis commodi eum! Nesciunt, neque eveniet. Optio neque nostrum aut eum a quae adipisci repudiandae ad aperiam voluptatem! Quibusdam, soluta. Totam!</p>
      <button>View Profile </button>
      </div>
  )
}

export default Card
