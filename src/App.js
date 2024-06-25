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
import LogInOut from './LogInOut.js';
// import Hotel from './Hotel.js';


// Block 2: difining function App and fetch inside it (for get/hotel/all in fastAPI)

const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint

function App() {

  
  return (
    <div>
      <Router>
      <Layout> 
          <div className="App">
            <nav>
              <NavLink to="/" exact activeClassName="active" href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                Home
              </NavLink>
              {' | '}
              <NavLink to="/about" activeClassName="active" href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                About
              </NavLink>
              {' | '}
              <NavLink to="/contact" activeClassName="active" href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                Contact
              </NavLink>
            </nav>   
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customer-registration" element={<RegisterCustomer/>} />
              <Route path="/hotel-registration" element={<RegisterHotel />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="" element={<LogInOut />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </div> 
  );
}   

  export default App;
