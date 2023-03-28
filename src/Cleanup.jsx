import { useState, useEffect } from 'react';

const Cleanup = () => {
   const [toggle, setToggle] = useState(false);

   return(
     <div>
       <button className='btn' onClick={() => setToggle(!toggle)}>
         toggle component
        </button>
        {toggle && <anotherComponent />} 
     </div>   
   )

   }

   const anotherComponent = () => {
    useEffect(() => {
       console.log('hmm, this is interesting')
       const timer = setInterval(() => {
         console.log('hello from interval');
       }, 1000);
       return () => {
         clearInterval(timer);
         console.log('cleanup');
       };
    },[]);
   return <h1>Hello there</h1>
   }
   
export default Cleanup; 









