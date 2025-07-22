import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu'
import FoodItem from './FoodItem'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
    </div>
  )
}

export default Home