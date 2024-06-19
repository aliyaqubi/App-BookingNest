//import React, {useState, useEffect} from "react";
//import './Hotel.css'


// const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint


// //> Block 1: difining Hotel function

// function Hotel({ hotel }) {

//     const [imageUrl, setImageUrl] = useState('')

//     useEffect(() => {
//         if (hotel.image_url_type === 'absolute') {
//             setImageUrl(hotel.image_url)
//         } else {
//             setImageUrl(BASE_URL + hotel.image_url)
//         }
//     }, [hotel.image_url_type, hotel.image_url])

//     return (
//         <div className="hotel">
//             <img
//             alt="This is the hotel"
//             className="hotel_image"
//             src={imageUrl}
//             />
//         </div>
//     )
// }

// export default Hotel



//> this block should add under the block of < RegisterCustomer /> in return in App.js
//<div className = "app_hotels">   
  //      {
    //      hotels.map(hotel => (
      //      <Hotel hotel = {hotel}/>
        //  ))
     // } 
      //</div>



// Block 1: the main content of file when installing & strating the React
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

