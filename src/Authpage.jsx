import { useState, useEffect } from 'react';

const UserAuth = () => {
   const [user, setUser] = useState(null);

const login = () => {
   setUser({ name: "Bertrandgoere" });
   };

   const logout = () => {
    setUser(null);
   };
   
   return( 
     <div>
      {user ? (  
       <div>
      <h4>hello, there, {user.name}</h4> 
      <button className='btn' onClick={logout}>
        logout
        </button>     
        </div>
      ) : ( 
        <div>
        <h4>Please login </h4> 
        <button className='btn' onClick={login}>
          login
          </button>     
          </div>
        )}
      </div>
   )
}

export default UserAuth;