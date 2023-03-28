import React from 'react'
import Tour from './Tour'; 


const Tours = ({ tours, removeTours }) => {
  return (
    <>
        <h1>Our Tours</h1>
    <div className='Tours'>
      {tours.map((tour) => {
        return( 
          <Tour key={tour.id} {...tour} removeTours={removeTours} />
        )
    })
    }  
    </div>
    </>
  )
}

export default Tours;