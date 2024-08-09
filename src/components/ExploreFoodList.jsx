import React from 'react'
import Pizza from "../assets/pizza.jpg"
import Burger from "../assets/burger.jpg"
import Momos from "../assets/momos.jpg"
import ExploreFood from './ExploreFood'


function ExploreFoodList() {
    const foods = [
        {name: 'Pizza', image:Pizza},
        {name: 'Burger', image:Burger},
        {name: 'Momos', image:Momos}
    ]
  return (
    <ExploreFood foods={foods} />
  )
}

export default ExploreFoodList
