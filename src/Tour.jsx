import React from 'react'



const Tour = ({ id, image, info, name, price, removeTours }) => {
   const [readMore, setReadMore] = useState(false)
    return (
    <div>
     <article className='tour'>
       <img className='tour-img' src={image} alt={name} />
        <div className='tour-info'>
         <h3>{name}</h3>
         <h4>{info}</h4>
         <p>{price}</p>
        </div>
        <button onClick={() => removeTours(id)}>Not interested</button>
      </article>   
    </div>
  )
}

export default Tour;