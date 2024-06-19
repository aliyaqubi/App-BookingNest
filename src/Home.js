import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';                            // Import the CSS file
//import RegisterCustomer from './RegisterC.js';
//import RegisterHotel from './RegisterH.js';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to BookingNest</h1>
        <div>
          <Link to="/register-customer" className="home-button">
            <button>Register as Customer</button>
          </Link>
        </div>
        <div>
          <Link to="/register-hotel" className="home-button">
            <button>Register Your Hotel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;






