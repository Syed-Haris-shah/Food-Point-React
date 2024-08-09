import React from 'react'

function FoodCard({title, price, ingredients, image}) {
  return (
    <div className='foodCard-container'>

        <div className='foodCard-image'>
            <img src={image} alt={title} />
        </div>

        <div className='foodCard-details'>
            <h1>{title}</h1>
            <h2>RS:{price}</h2>
            <p>{ingredients}</p>
            <button>Order Now</button>
        </div>
      
    </div>
  )
}

export default FoodCard
