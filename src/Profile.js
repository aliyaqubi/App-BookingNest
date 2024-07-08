import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
//import './RegisterH.css';  // Import the CSS file
 
   
 
 
const Profile = () => {
    //const [firstname, setFirstname] = useState('');
    const location = useLocation();

    if (!location.state) {
        return <p>Error: No booking details provided.</p>;
    }
    
    const { firstname } = location.state;

    return (               
        <div>  
        <div className="form-container">
          <h2 style={{ marginTop: '10px' , marginBottom: '60px' , color:'green'}}>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname :</label>
                <input
                    type="text"
                    required
                    value={firstname} readOnly                               // 'e' in all of <input/> elements stands for 'event'
                    onChange={(e) => setFirstname(e.target.value)}    //What changed when comes new input from user (event)
                />
            </div>
            </form>
        </div>
        </div>
    );
};

export default Profile;
  