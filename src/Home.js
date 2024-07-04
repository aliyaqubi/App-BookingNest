import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import homeImage from './images/Home-Hotel.png';
import SearchH from './SearchH.js'                        
//import { green } from '@mui/material/colors';


const Home = () => {

  return (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <main style={{ padding: '20px' }}>
    <section id="home" style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2 style={{color: 'green'}}>Welcome to BookingNest...</h2>
      <img 
        src={homeImage} 
        alt='A decorative image'
        style={{width: '100%', maxHeight: '200px' , marginTop: '30px'}} 
      />
      <p style={{fontSize:'1rem', marginTop: '20px', color:'green'}}>
        Experience the best stay at our luxurious hotels with top-notch amenities and services.
      </p>
    </section>
    <section id="search-hotel" style={{ textAlign: 'center', margin: '40px 0', marginTop: '100px' }}>
      <SearchH/>
    </section>
  </main>
</div>
);
};
export default Home;






