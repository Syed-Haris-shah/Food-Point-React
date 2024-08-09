import React from 'react'


function ExploreFood({foods}) {
    return (

            <div className="food-main">
                <h1>Explore Foods</h1>
                <div className="food-card">
                    {foods.map((food,index)=>(
                        <div key={index} className='explore-food-card'>
                            <img src={food.image} alt={food.name} />
                            <p>{food.name}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default ExploreFood
