import React from 'react';
import { Link } from 'react-router-dom';
//import './Home.css';                            // Import the CSS file
//import RegisterCustomer from './RegisterC.js';
//import RegisterHotel from './RegisterH.js';

const Home = () => {
//   return (
//     <div className='whole-page'>
//       <div className="home-container">
//         <h1>Welcome to BookingNest</h1>
//         <div>
//           <Link to="/register-customer" className="home-button">
//             <button>Register as Customer</button>
//           </Link>
//         </div>
//         <div>
//           <Link to="/register-hotel" className="home-button">
//             <button>Register Your Hotel</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
//  return (
  return (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <header style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1 style={{ margin: 0 }}>BookingNest</h1>
    <div>
      <Link to="/signup">
        <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </Link>
      <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Sign In
      </button>
    </div>
  </header>
  <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
    <a href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>Home</a>
    <a href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>About</a>
    <a href="#rooms" style={{ textDecoration: 'none', color: '#4CAF50' }}>Rooms</a>
    <a href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>Contact</a>
  </nav>
  <main style={{ padding: '20px' }}>
    <section id="home" style={{ textAlign: 'center', margin: '40px 0' }}>
      <h2>Welcome to Our BookingNest</h2>
      <p>Experience the best stay at our luxurious hotels with top-notch amenities and services.</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Book Now
      </button>
    </section>
    <section id="about" style={{ margin: '40px 0' }}>
      <h2>About Us</h2>
      <p>Our hotel offers the perfect blend of comfort and convenience, located in the heart of the city.</p>
    </section>
    <section id="rooms" style={{ margin: '40px 0' }}>
      <h2>Our Rooms</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', margin: '10px' }}>
          <img src="room1.jpg" alt="Room 1" style={{ width: '100%' }} />
          <div style={{ padding: '10px' }}>
            <h3>Deluxe Room</h3>
            <p>Spacious room with a king-size bed, sea view, and modern amenities.</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        </div>
        <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', margin: '10px' }}>
          <img src="room2.jpg" alt="Room 2" style={{ width: '100%' }} />
          <div style={{ padding: '10px' }}>
            <h3>Suite Room</h3>
            <p>Luxurious suite with a separate living area, city view, and premium amenities.</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" style={{ margin: '40px 0' }}>
      <h2>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
        <input type="text" placeholder="Name" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
        <input type="email" placeholder="Email" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
        <textarea placeholder="Message" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </section>
  </main>
  <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
    <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
  </footer>
</div>
);
};
export default Home;






