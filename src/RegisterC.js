import React, { useState } from 'react';
import axios from 'axios';
import './RegisterC.css'; 



const RegisterCustomer = () => {
  
  const [firstname, setFirstname] = useState('');              //> definition of input elements with an empty '' value
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
 

  const handleSubmit = async (event) => {                    //> handeling the changing of values when user input new values
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/customer/', {
        firstname,
        lastname,
        username,
        password,
        email,
        phone,
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
      <h2 style={{ marginTop: '10px' , marginBottom: '60px' , color:'green'}}>Register</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Firstname *</label>
          <input
            type="text"
            required
            value={firstname}                                  // 'e' in all of <input/> elements stands for 'event'
            onChange={(e) => setFirstname(e.target.value)}    //What changed when comes new input from user (event)
          />
        </div>
        <div>
          <label>Lastname *</label>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
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
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

export default RegisterCustomer;



