// <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
// Login
// </button>

//> Note 1: uploading image_hotel from back-end (fastapi.v115) - Should add to App.js ?

//import Hotel from './Hotel.js';
// const [hotels, setHotels] = useState([]);          //> to add a state for posts

  // useEffect(() => {
  //   fetch(BASE_URL + 'hotel/all')
  //     .then(response => {
  //       const json = response.json()
  //       console.log(json)
  //       if (response.ok) {
  //         return json
  //       }
  //       throw response
  //     })
  //* This part (marked by *) is for sorting posts: last post comes to top. It works if we define timestamp in model of images/posts
  //*     .then(data => {
  //*       const result - data.sort((a, b) =>{
  //*         const t_a = a.timestamp.split(/[-T:]/); 
  //*         const t_b = b.timestamp.split(/[-T:]/);
  //*         const d_a = new Date(Date.UTC(t-a[0], t-a[1]-1, t-a[2], t-a[3], t-a[4], t-a[5]));
  //*         const d_b = new Date(Date.UTC(t-b[0], t-b[1]-1, t-b[2], t-b[3], t-b[4], t-b[5])); 
  //*         return d_b - d_a
  //*       })
  //*       return result  
  //*     })
  //     .then(data => {
  //       setHotels(data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       alert(error)
  //     })
  // }, [])


//> this block should add under the block of < RegisterCustomer /> in return in App.js (v116)
//<div className = "app_hotels">   
//   {
//        hotels.map(hotel => (
//          <Hotel hotel = {hotel}/>
//        ))
//   } 
//</div>

//====================================================================

//> Note 2: Deleted it and deleted the extra forms in Homepage

//    <div>
//      <div className ="app_hotels">   
//        <h1>BookingNest</h1>
//      < RegisterCustomer />
//      </div>      
//    </div>
//    <div>
//      <div className ="app_hotels">   
//        <h1>BookingNest</h1>
//      < RegisterHotel />
//      </div>      
//    </div>

// =====================================================================

//> Note 3: first code for home.js

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


//====================================================================
// Note 4: Home.js by Atiq

// import React from 'react';
// import { Link } from 'react-router-dom';
// //import './Home.css';                            // Import the CSS file
// //import RegisterCustomer from './RegisterC.js';
// //import RegisterHotel from './RegisterH.js';

// const Home = () => {

//   return (
//   <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
//   <header style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     <h1 style={{ margin: 0 }}>BookingNest</h1>
//     <div>
//       <Link to="/signup">
//         <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Sign Up
//         </button>
//       </Link>
//       <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Sign In
//       </button>
//     </div>
//   </header>
//   <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
//     <a href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>Home</a>
//     <a href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>About</a>
//     <a href="#rooms" style={{ textDecoration: 'none', color: '#4CAF50' }}>Rooms</a>
//     <a href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>Contact</a>
//   </nav>
//   <main style={{ padding: '20px' }}>
//     <section id="home" style={{ textAlign: 'center', margin: '40px 0' }}>
//       <h2>Welcome to BookingNest</h2>
//       <p>Experience the best stay at our luxurious hotels with top-notch amenities and services.</p>
//       <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Book Now
//       </button>
//     </section>
//     <section id="about" style={{ margin: '40px 0' }}>
//       <h2>About Us</h2>
//       <p>Our hotel offers the perfect blend of comfort and convenience, located in the heart of the city.</p>
//     </section>
//     <section id="rooms" style={{ margin: '40px 0' }}>
//       <h2>Our Rooms</h2>
//       <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
//         <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', margin: '10px' }}>
//           <img src="room1.jpg" alt="Room 1" style={{ width: '100%' }} />
//           <div style={{ padding: '10px' }}>
//             <h3>Deluxe Room</h3>
//             <p>Spacious room with a king-size bed, sea view, and modern amenities.</p>
//             <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Book Now
//             </button>
//           </div>
//         </div>
//         <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden', margin: '10px' }}>
//           <img src="room2.jpg" alt="Room 2" style={{ width: '100%' }} />
//           <div style={{ padding: '10px' }}>
//             <h3>Suite Room</h3>
//             <p>Luxurious suite with a separate living area, city view, and premium amenities.</p>
//             <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="contact" style={{ margin: '40px 0' }}>
//       <h2>Contact Us</h2>
//       <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
//         <input type="text" placeholder="Name" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <input type="email" placeholder="Email" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <textarea placeholder="Message" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Send
//         </button>
//       </form>
//     </section>
//   </main>
//   <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
//     <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
//   </footer>
// </div>
// );
// };
// export default Home;

// ====================================================================

// Note 5: App.js by Atiq

// import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import './App.css'; // Import the CSS file
// import Home from './Home';
// import SignupPage from './SignupPage';
// import RegisterCustomer from './RegisterC.js';
// import RegisterHotel from './RegisterH.js';
// import Hotel from './Hotel.js';

// const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint

// function App() {

  
//   return (
//     <div>
//       <Router> 
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<RegisterCustomer/>} />
//             <Route path="/register-customer" element={<RegisterCustomer />} />
//             <Route path="/hotel-registration" element={<RegisterHotel />} />
//           </Routes>
//         </div>
//       </Router>   
//     </div> 
//   );
// }   

//   export default App;

// ================================================================

// Note 6: SignupPage by atiq

// import React from 'react';
// import { Link } from 'react-router-dom';

// function SignupPage() {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
//       <header style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white' }}>
//         <h1 style={{ margin: 0 }}>BookingNest</h1>
//       </header>
//       <main style={{ padding: '20px', textAlign: 'center' }}>
//         <section style={{ margin: '40px 0' }}>
//           <h2>Explore Our Amenities</h2>
//           <p>Enjoy luxurious amenities and world-class services at our hotel.</p>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li>✔️ Spacious Rooms</li>
//             <li>✔️ Swimming Pool</li>
//             <li>✔️ Free Wi-Fi</li>
//             <li>✔️ 24/7 Room Service</li>
//             <li>✔️ Fitness Center</li>
//           </ul>
//           <div style={{ marginTop: '20px' }}>
//             <Link to="/register-customer">
//             <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Sign Up as a Customer
//             </button>
//             </Link>
//             <Link to="/register-hotel">
//             <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Sign Up as a Hotel Owner
//             </button>
//             </Link>
//           </div>
//         </section>
//       </main>
//       <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
//         <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default SignupPage;


//====================================================================

//Note 7: example of Urgen work on question of Ladan

// def get_current_user(...):
// 	#read token
// 	#fetch from db using id from token
// 	if not user:
// 		raise HTTPException(403)
// 	#some try except stuff to deal with auth
// 	return DBUser;
 
// def get_generic_or_current_user(...):
// 	try
// 		return get_current_user(...)
// 	except
// 		return GenericUser()
 
// class GenericUser(DBUser)
// 	pass
 
// @router.get("/products/")
// def getProductList(db: Session = Depends(get_db), cu: DBUser = Depends(get_current_user)):
 
// @router.get("/publics/")
// def getPublicList(db: Session = Depends(get_db), cu: DBUser = Depends(get_generic_or_current_user)):


//==================================================================

// the main content of file App.js when installing & strating the React
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   fetch('http://127.0.0.1:8000/product/all')
//     .then(Response => {
//       console.log(Response.json());
//     })
//     .catch(error => {
//       console.log(error);
//     })

  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




/* <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
    <a href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>Home</a>
    <a href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>About</a>
    <a href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>Contact</a>
</nav> */


// Note: last situation of Home.js before adding layout

// const Home = () => {

//   return (
//   <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
//   <header style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     <h1 style={{ margin: 0 }}>BookingNest...</h1>
//     <div>
//       <Link to="/hotel-registration">
//         <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Register Your Hotel
//         </button>
//       </Link>
//       <Link to="/customer-registration">
//         <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Register Yourself
//         </button>
//       </Link>
//       <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Login
//       </button>
//     </div>
//   </header>
//   <main style={{ padding: '20px' }}>
//     <section id="home" style={{ textAlign: 'center', margin: '40px 0' }}>
//       <h2>Welcome to BookingNest</h2>
//       <p>Experience the best stay at our luxurious hotels with top-notch amenities and services.</p>
//       <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Book Now
//       </button>
//     </section>
//     <section id="about" style={{ margin: '40px 0' }}>
//       <h2>About Us</h2>
//       <p>Our hotels offers the perfect blend of comfort and convenience.</p>
//     </section>
//     <section id="contact" style={{ margin: '40px 0' }}>
//       <h2>Contact Us</h2>
//       <form className ="contact_us">
//         <input type="text" placeholder="Name" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <input type="email" placeholder="Email" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <textarea placeholder="Message" style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }} />
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//           Send
//         </button>
//       </form>
//     </section>
//   </main>
//   <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
//     <p>&copy; 2024 BookingNest. All rights reserved.</p>
//   </footer>
// </div>
// );
// };
// export default Home;

//






