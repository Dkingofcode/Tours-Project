// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// //const url = 'https://api.github.com/users';
// const url = 'https://api.github.com/users/QuincyLarson';


// function MultipleReturnFecthData() {
//     const [user, setUser] = useState(null);
//     const [isUser, setIsUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);


//     useEffect(() => {
//       const fetchUser = async () => {
//         try{
//            const response = await fetch(url);
//            const data = await response.json();
//            setUser(data);
//         }catch(error){
//            console.log(error)
//         }

//       }
//       fetchUser()
//     }, []);
    
//     if(!user){
//       return <h1>Loading...</h1>
//     }

//     if(isError){
//       return <h1>Error 404 page</h1>
//     }

//     const toggleAlert = () => {
//       if(showAlert){
//         setShowAlert(!showAlert)
//         return;
//       }
//       setShowAlert(true);
//     }

//     const Login = () => {
//       setIsUser({name: "Berharem"});
//     }

//     const Logout = () => {
//       setIsUser(null);
//     }

//   const handleAuth = () => {
//     if(isUser){
//       setIsUser(null)
//       console.log(user)
//   }else{
//     setIsUser({ name: "Brenbertehs"})
//     console.log(user)
//   } 
//   }
 
//     const { id, avatar_url, followers, following, location, name, bio} = user
//     return(
//       <section className='github'>
//       <img className='user-img' style={{ width: '150px', borderRadius: '25px' }} src={avatar_url} alt={user.login} />
//       <h1 className='user'>{name}</h1>
//       <h2 className='user'>{id}</h2>
//       <h3 className='user'>works at {location}</h3>
//       <h2 className='user'>{bio}</h2>
//       <h4 className='user'>Has {followers} number of followers</h4>
//       <h5 className='user'>Following {following} number of people</h5>
     

//        <button className='btn' onClick={() => setShowAlert(!showAlert)}>Tree List, graphs</button>

//        <button className='bg-btn' onClick={() => handleAuth}>Login: logout</button>
      
//       </section>
//     )
// }
import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading"; 
import './App.css';


const url = 'https://course-api.com/react-tours-project';

function App(){
  const [tours, setTours] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const FetchTours = async () => {
      try{ 
       const response = await fetch(url);
       const data = await response.json();
       setTours(data);
       console.log(data);
     }catch(error){
        console.log(error);

     }
    }

     FetchTours()
  }, [])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(!tours){
    setIsLoading(true);
  }

  if(isloading){
      setIsLoading(true);
     return(
      <Loading />
     ) 
  }

  if(isError){
    setIsError(true)
    return <h1> Error 404 page</h1>
  }


  return(
    <Tours tours={tours} removeTours={removeTours} />
  )
}

export default App;








// function FetchData() {
//   const [users, setUsers] = useState([]);

//    console.log("Pleredemen");

//     useEffect(() => {
//       const fetchData = async () => {
//         try { 
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//         }
//         catch(error){
//           console.log(error);
//         }
//       };
//       fetchData();   
//  }, []); 
 
//    return (
//       <section className='github'>
//       <h2 className='heading'>github users</h2>
//       <ul className='users'>
//         {users.map((user) => {
//           const {id, login, avatar_url, html_url} = user;
//           return (
//              <li key={id} className='user'>
//             <img src={avatar_url} alt={login} className='user-img' />
//              <div className='user-details'>
//               <h5>{login}</h5>
//               <a href={html_url}>profile</a>
//              </div>
//           </li>
//           )
//         })}
//       </ul>
//        </section>
//   )
// };

// export default FetchData;
//export default MultipleReturnFecthData;
