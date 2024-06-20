import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <header style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white' }}>
        <h1 style={{ margin: 0 }}>BookingNest</h1>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <section style={{ margin: '40px 0' }}>
          <h2>Explore Our Amenities</h2>
          <p>Enjoy luxurious amenities and world-class services at our hotel.</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>✔️ Spacious Rooms</li>
            <li>✔️ Swimming Pool</li>
            <li>✔️ Free Wi-Fi</li>
            <li>✔️ 24/7 Room Service</li>
            <li>✔️ Fitness Center</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <Link to="/register-customer">
            <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Sign Up as a Customer
            </button>
            </Link>
            <Link to="/register-hotel">
            <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Sign Up as a Hotel Owner
            </button>
            </Link>
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SignupPage;
