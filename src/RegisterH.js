// import React, { useState } from 'react';
// import axios from 'axios';
// import './RegisterH.css';  // Import the CSS file

// const RegisterHotel = () => {
//   const [hotelName, setHotelName] = useState('');
//   const [managerName, setManagerName] = useState('');
//   const [userName, setUserName] = useState('');
//   const [Password, setPassword] = useState('');
//   const [hotelName, setHotelName] = useState('');
//   const [message, setMessage] = useState('');


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/hotel/', {
//         hotelName,
//         managerName,
//       });
//       if (response && response.data) {
//         setMessage('Congratulation! Your hotel is registered succesfully.');
//       } else {
//         setMessage('Unexpected response format');
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage('Error: ' + error.response.data.detail);
//       } else {
//         setMessage('Error: ' + error.message);
//       }
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register Hotel</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Hotel Name:</label>
//           <input
//             type="text"
//             value={hotelName}
//             onChange={(e) => setHotelName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Manager Name:</label>
//           <input
//             type="text"
//             value={managerName}
//             onChange={(e) => setManagerName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>User Name:</label>
//           <input
//             type="text"
//             value={hotelName}
//             onChange={(e) => setHotelName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Hotel Name:</label>
//           <input
//             type="text"
//             value={hotelName}
//             onChange={(e) => setHotelName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Hotel Name:</label>
//           <input
//             type="text"
//             value={hotelName}
//             onChange={(e) => setHotelName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Hotel Name:</label>
//           <input
//             type="text"
//             value={hotelName}
//             onChange={(e) => setHotelName(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default RegisterHotel;

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
 
  return (
    <div>  
    <div className="form-container">
      <h2>Register Your Hotel</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Hotel Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Manager Name:</label>
          <input
            type="text"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
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
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Rooms:</label>
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};
 
export default RegisterHotel;





















