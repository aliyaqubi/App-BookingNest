import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import './App.css'; 
import Home from './Home.js';
import Layout from './Layout.js';
import Contact from './Contact.js';
import About from './About.js';
import RegisterCustomer from './RegisterC.js';
import RegisterHotel from './RegisterH.js';
import SearchH from './SearchH.js';
import SearchHResults from './SearchHResults.js';
import Booking from './Booking.js';
// import LogInOut from './LogInOut.js';
// import Hotel from './Hotel.js';


// Block 2: difining function App and fetch inside it (for get/hotel/all in fastAPI)

const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint

function App() {

  // Define state variables
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [authTokenType, setAuthTokenType] = useState('');
  const [hotelId, setHotelId] = useState('');

  // retreiving dtat from window local storage
  useEffect(() => {
    setAuthToken(window.localStorage.getItem('authToken') || '');
    setAuthTokenType(window.localStorage.getItem('authTokenType') || '');
    setUsername(window.localStorage.getItem('username') || '');
    setHotelId(window.localStorage.getItem('hotelId') || '');
  }, []);

  // Update localStorage whenever page state changes by refreshing (storing dtat in window local storage)
  useEffect(() => {
    authToken
      ? window.localStorage.setItem('authToken', authToken)
      : window.localStorage.removeItem('authToken');
    authTokenType
      ? window.localStorage.setItem('authTokenType', authTokenType)
      : window.localStorage.removeItem('authTokenType');
    username
      ? window.localStorage.setItem('username', username)
      : window.localStorage.removeItem('username');
    hotelId
      ? window.localStorage.setItem('hotelId', hotelId)
      : window.localStorage.removeItem('hotelId');
  }, [authToken, authTokenType, username, hotelId]);

  
  return (
    <div>
      <Router>
        <Layout> 
          <div className="App"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customer-registration" element={<RegisterCustomer/>} />
              <Route path="/hotel-registration" element={<RegisterHotel />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<SearchH />} />
              <Route path="/search-hotel-results" element={<SearchHResults />} />
              <Route path="/bookings" element={<Booking />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </div> 
  );
}   

  export default App;
