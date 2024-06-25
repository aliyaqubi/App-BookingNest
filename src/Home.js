import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import './Home.css';                          


const Home = () => {

  return (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <main style={{ padding: '20px' }}>
    <section id="home" style={{ textAlign: 'center', margin: '40px 0' }}>
      <h2>Welcome to BookingNest</h2>
      <p>Experience the best stay at our luxurious hotels with top-notch amenities and services.</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Book Now
      </button>
    </section>
  </main>
</div>
);
};
export default Home;






