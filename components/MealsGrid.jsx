import React from 'react'
import MealCard from './MealCard'

const MealsGrid = ({mealsData}) => {
    // console.log(mealsData)
  return (
    <div className='flex flex-wrap gap-6'>
      {mealsData?.map((meal,i)=>{
        return <MealCard key={i} data={meal} />
      })}
    </div>
  )
}

export default MealsGrid
