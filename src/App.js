import React, {useState, useEffect} from "react";
import './App.css';
import Hotel from './Hotel.js'
import RegisterCustomer from './RegisterC.js';


// Block 2: difining function App and fetch inside it (for get/hotel/all in fastAPI)

const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint

function App() {

  const [hotels, setHotels] = useState([]);          //> to add a state for posts

  useEffect(() => {
    fetch(BASE_URL + 'hotel/all')
      .then(response => {
        const json = response.json()
        console.log(json)
        if (response.ok) {
          return json
        }
        throw response
      })
      .then(data => {
        setHotels(data)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  }, [])

  return (
    <div>
      <div className ="app_hotels">   
        <h1>BookingNest</h1>
      < RegisterCustomer />
      </div>
      <div className = "app_hotels">   
        {
          hotels.map(hotel => (
            <Hotel hotel = {hotel}/>
          ))
      } 
      </div>
    </div>   
  );
}   


  export default App;
  


  

// Block 1: the main content of file when installing & strating the React
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   fetch('http://127.0.0.1:8000/product/all')
//     .then(Response => {
//       console.log(Response.json());
//     })
//     .catch(error => {
//       console.log(error);
//     })

  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
