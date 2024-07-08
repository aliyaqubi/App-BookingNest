import React, { useState } from 'react';
import { Modal, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
//import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { results } from './SearchHResults.js';


const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500',
  boxShadow: '24',
  padding: '20px',
  fontWeight: 'bold' , 
  backgroundColor: '#4CAF50',
  textAlign: 'center' , 
  borderRadius: '10px' , 
}));

const Booking = () => {
  //const [selectedLocation, setSelectedLocation] = useState(null);
  //const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState({});
  const [message, setMessage] = useState('');


  // if (!location.state) {
  //   return <p>Error: No booking details provided.</p>;
  // }

  const handleBooking = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/bookings/', bookingDetails);
      //console.log("Booking successful", response.data);
      if (response && response.data) {
        setMessage('Congratulations! Your reservation has been successfully made.');
      } else {
        setMessage('Unexpected response format');
      }
    } catch (error) {
      console.error("Error during booking", error);
    }
  };

  //const { hotel_name, city } = location.state;

  return (
    <div>
        <h2 style={{color: 'blue'}}>Now you can book your hotel.</h2>
        <h2 style={{marginTop: '10px' , color: 'blue'}}>Good luck!</h2>
            <form onSubmit={handleBooking}>
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="text"
                    required
                    placeholder="Hotel name *" 
                    onChange={(e) => setBookingDetails({ ...bookingDetails, hotel_name: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="text"
                    required
                    placeholder="City *"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, city: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="text"
                    required
                    placeholder="Your firstname *"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, customer_firstname: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="text"
                    required
                    placeholder="Your lastname *"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, customer_lastname: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="date"
                    required
                    placeholder="Date of entry *"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, check_in: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="date"
                    required
                    placeholder="Date of departure *"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, check_out: e.target.value })}
                />
                <p style={{ textAlign: 'center' , color: 'blue' }}>
                  Fields marked with an asterisk (*) are required.
                </p>
                <button
                    style={{ width: '400px', padding: '10px 20px', margin: '10px auto', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
                    type="submit">
                        Submit Booking
                </button>
            </form>
            {message && (
              <Modal open={message} onClose={() => setMessage}>
                <ModalBox>
                  <p style={{ margin: 0 , color: 'blue' }}>
                      {message}
                  </p>
                </ModalBox>
              </Modal>
            )   
            }
    </div>
  );
};

export default Booking;