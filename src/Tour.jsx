import React from 'react'



const Tour = ({ id, image, info, name, price, removeTours }) => {
   const [readMore, setReadMore] = useState(false)
    return (
    <div>
     <article className='tour'>
       <img className='tour-img' src={image} alt={name} />
        <div className='tour-info'>
         <p>{price}</p>
         <h3>{name}</h3>
         { readMore ? <h4>{info}</h4> : `<h4>${(info.substring(0, 180))}</h4>`}
         <button type='button' className='btn'>{readMore ? 'show-less' : 'show-more'}</button>
        </div>

        <button onClick={() => removeTours(id)}>Not interested</button>
      </article>   
    </div>
  )
}

export default Tour;