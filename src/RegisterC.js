import React, { useState } from 'react';
import axios from 'axios';
import './RegisterC.css'; 


const RegisterCustomer = () => {
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/customer/', {
        firstname,
        secondname,
        username,
        password,
        email,
        phone,
        adress,
        nationality,
        age,
      });
      if (response && response.data) {
        setMessage('Congratulations! your are registared successfully.');
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
    <div>  
    <div className="form-container">
      <h2>Register as Customer</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Firstname:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label>Secondname:</label>
          <input
            type="text"
            value={secondname}
            onChange={(e) => setSecondname(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Adress:</label>
          <input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div>
          <label>Nationality:</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default RegisterCustomer;



