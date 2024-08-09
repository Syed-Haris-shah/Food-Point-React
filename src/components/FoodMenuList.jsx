import React from 'react'
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import momos from "../assets/momos.jpg"
import FoodMenu from './FoodMenu'

function FoodMenuList() {
    const foodNames = [
        {name: 'pizza', image: pizza, price:'1000', ingredients:'Chiken and Mashrooms'},
        {name: 'burger', image: burger, price:'500', ingredients:'Chiken and Cheese'},
        {name: 'momos', image: momos, price:'100', ingredients:'Meet and Vegetables'},
        {name: 'pizza', image: pizza, price:'1000', ingredients:'Chiken and Mashrooms'},
        {name: 'burger', image: burger, price:'500', ingredients:'Chiken and Cheese'},
        {name: 'momos', image: momos, price:'100', ingredients:'Meet and Vegetables'}
        
    ]
  return (
    <FoodMenu foodNames={foodNames} />
  )
}

export default FoodMenuList
