import React, { useState } from 'react';
import axios from 'axios';
import './RegisterH.css';  // Import the CSS file

const RegisterHotel = () => {
  const [hotelName, setHotelName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/hotel/', {
        hotelName,
        managerName,
      });
      if (response && response.data) {
        setMessage('Congratulation! Your hotel is registered succesfully.');
      } else {
        setMessage('Unexpected response format');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage('Error: ' + error.response.data.detail);
      } else {
        setMessage('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Register Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Hotel Name:</label>
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>
        <div>
          <label>Manager Name:</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterHotel;























