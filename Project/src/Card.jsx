import React from 'react'

const Card = (props) => {
    console.log(props);
    
    return (
        <div className='card'>
            <img src={props.data.image} alt='Normal image' />
            <h1> {props.data.name} </h1>
            <p> {props.data.text} </p>
            <button>View Profile </button>
        </div>
    )
}

export default Card
