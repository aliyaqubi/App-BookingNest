import React, { useState } from 'react';
import axios from 'axios';
import './RegisterH.css';  // Import the CSS file
 
   
 
 
const RegisterHotel = () => {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [rooms, setRooms] = useState('');
  const [star, setStar] = useState('');
  const [message, setMessage] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/hotel/', {
        name,
        manager,
        username,
        password,
        email,
        phone,
        adress,
        country,
        city,
        rooms,
        star,
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
 
  return (               //> 'e' in all of <input/> elements stands for 'event'
    <div>  
    <div className="form-container">
      <h2 style={{  marginTop: '10px' , marginBottom: '60px' , color:'green'}}>Register Your Hotel</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Hotel Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Manager Name *</label>
          <input
            type="text"
            required
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />
        </div>
        <div>
          <label>Username *</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password *</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Email *</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone *</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Adress *</label>
          <input
            type="text"
            required
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div>
          <label>Country *</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label>City *</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Number of rooms:</label>
          <input
            type="text"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <div>
          <label>Star:</label>
          <input
            type="text"
            value={star}
            onChange={(e) => setStar(e.target.value)}
          />
        </div>
        <p style={{ textAlign: 'center' , color: 'blue' }}>
          Fields marked with an asterisk (*) are required.
        </p>
        <button type="submit">Register</button>
      </form>
      {message && 
        <p style={{ fontWeight: 'bold' , backgroundColor: '#4CAF50', padding: '20px', textAlign: 'center' , borderRadius: '10px' , color: 'blue' }}>
          {message}
        </p>
      }
    </div>
    </div>
  );
};
 
export default RegisterHotel;





















