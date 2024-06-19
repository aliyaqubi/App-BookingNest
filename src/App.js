import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'; // Import the CSS file
import Home from './Home';
//import Hotel from './Hotel.js';
import RegisterCustomer from './RegisterC.js';
import RegisterHotel from './RegisterH.js';


// Block 2: difining function App and fetch inside it (for get/hotel/all in fastAPI)

const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint

function App() {

  // const [hotels, setHotels] = useState([]);          //> to add a state for posts

  // useEffect(() => {
  //   fetch(BASE_URL + 'hotel/all')
  //     .then(response => {
  //       const json = response.json()
  //       console.log(json)
  //       if (response.ok) {
  //         return json
  //       }
  //       throw response
  //     })
  //     .then(data => {
  //       setHotels(data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       alert(error)
  //     })
  // }, [])

  return (
    <div>
      <Router> 
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-customer" element={<RegisterCustomer />} />
            <Route path="/register-hotel" element={<RegisterHotel />} />
          </Routes>
        </div>
      </Router>   
    </div> 
  );
}   

  export default App;
