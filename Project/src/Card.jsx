import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='Normal image' />
            <h1> {props.name} </h1>
            <p> {props.text} </p>
            <button>View Profile </button>
        </div>
    )
}

export default Card
