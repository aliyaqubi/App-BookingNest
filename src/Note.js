{/* <div>
        {results.map((hotel, index) => (
          <results key={index} 
            style={{ padding: '10px', marginTop: '20px', backgroundColor: 'blue', border: '1px solid #ccc', borderRadius: '5px'}}>
            <p>{hotel.name}</p>
            <p>{hotel.city}, {hotel.country}</p>
          </results>
        ))}
      </div>

{results.length > 0 ? (
  results.map((hotel, index) => (
      <Result key={index}>
          <p>{hotel.name}</p>
          <p>{hotel.city}, {hotel.country}</p>
      </Result>
  ))
) : (
  <p>No results found</p> 
)}


<input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="dnumber"
                    placeholder="customer_id"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, customer_id: e.target.value })}
                />
                <input
                    style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
                    type="number"
                    placeholder="hotel_id"
                    onChange={(e) => setBookingDetails({ ...bookingDetails, hotel_id: e.target.value })}
                /> */}

//<h2 style={{color: 'green'}}>Whrer do you want to stay?</h2>
{/* <Input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
<Button onClick={handleSearch}>Search</Button>
{error && <ErrorMessage>{error}</ErrorMessage>} */}



//==================================

// Note 8: removing elements from Customer form
/* <div>
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
        </div> */


/* <nav>
              <NavLink to="/" exact activeClassName="active" href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                Home
              </NavLink>
              {' | '}
              <NavLink to="/about" activeClassName="active" href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                About
              </NavLink>
              {' | '}
              <NavLink to="/contact" activeClassName="active" href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>
                Contact
              </NavLink>
            </nav>                 */



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
    // .then(Response => {
    //   console.log(Response.json());
    // })
    // .catch(error => {
    //   console.log(error);
    // })

  
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

// CSS Sample Classes ======================================================

// from video 147
// Important Tailwind CSS Classes Used Throughout This Section
// I'll use the following CSS classes (and elements) in my solution.

// <main className="h-screen my-8 flex gap-8">...</main>
// <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">...</button>
// <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
// <p className="flex flex-col gap-1 my-4">...</p>
// <label className="text-sm font-bold uppercase text-stone-500">...</label>
// <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">...</dialog>
// <form className="mt-4 text-right">...</form>
// <h2 className="text-xl font-bold text-stone-700 my-4">...</h2>
// <p className="text-stone-600 mb-4">...</p>
// <div className="w-[35rem] mt-16">...</div>
// <menu className="flex items-center justify-end gap-4 my-4">...</menu>
// <button className="text-stone-800 hover:text-stone-950">...</button>
// <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">...</button>
// <div className="flex items-center gap-4">
// <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
// <button className="text-stone-700 hover:text-stone-950">...</button>
// <div className="mt-24 text-center w-2/3">
// <img className="w-16 h-16 object-contain mx-auto" />
// <h2 className="text-xl font-bold text-stone-500 my-4">...</h2>
// <p className="text-stone-400 mb-4">...</p>
// <p className="mt-8">...</p>
// <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
// <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">...</h2>
// <ul className="mt-8">...</ul>
// <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">...</button>
// <div className="w-[35rem] mt-16">...</div>
// <header className="pb-4 mb-4 border-b-2 border-stone-300">...</header>
// <div className="flex items-center justify-between">...</div>
// <h1 className="text-3xl font-bold text-stone-600 mb-2">...</h1>
// <button className="text-stone-600 hover:text-stone-950">...</button>
// <p className="mb-4 text-stone-400">...</p>
// <p className="text-stone-600 whitespace-pre-wrap">...</p>
// <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
// <p className="text-stone-800 my-4">...</p>
// <ul className="p-4 mt-8 rounded-md bg-stone-100">...</ul>
// <li className="flex justify-between my-4">...</li>
// <button className="text-stone-700 hover:text-red-500">...</button>






