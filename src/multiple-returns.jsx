import { useState, useEffect } from 'react';

const MultipleReturnBasics = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
     // done, fetching data
        }, 3000)
    }, [])

    if(isLoading){
      return <h2>Loading....</h2>  
    }
    return <h2>Multiple Returns Basics</h2>
}

export default MultipleReturnBasics; 