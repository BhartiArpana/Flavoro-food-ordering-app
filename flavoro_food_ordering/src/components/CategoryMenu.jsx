import React from 'react'

const CategoryMenu = () => {
  return (
    <div className=''>
        <div className='pl-5'>
            <h1 className='font-semibold text-xl'>Find the best food</h1>
        </div>
        <div className='pl-5 pt-5 flex gap-2.5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className='bg-gray-300 font-bosemiboldld px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white '>All</button>
              <button className='bg-gray-300 font-semibold px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white '>Lunch</button>
                <button className='bg-gray-300 font-semibold px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white '>Breakfast</button>
                  <button className='bg-gray-300 font-semibold px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white '>Dinner</button>
                    <button className='bg-gray-300 font-semibold px-3 py-2 rounded-lg hover:bg-green-600 hover:text-white '>Snacks</button>
        </div>
    </div>
  )
}

export default CategoryMenu