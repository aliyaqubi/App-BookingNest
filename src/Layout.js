import React, { useState } from 'react';
import { Modal, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import LogInOut from './LogInOut.js';


const Layout = ({ children }) => {

    const [openSignIn, setOpenSignIn] = useState(false);

    const handleOpenSignIn = () => {
        setOpenSignIn(true);
      };
    
    const handleCloseSignIn = () => {
    setOpenSignIn(false);
    };


    const Header = () => {
        return (
            <header style={{ position: 'sticky', top: '0', backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>BookingNest ...</h1>
                <div>
                    <Link to="/hotel-registration">
                        <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Register Your Hotel
                        </button>
                    </Link>
                    <Link to="/customer-registration">
                        <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Register
                        </button>
                    </Link>
                    <button onClick={handleOpenSignIn} style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Login
                    </button>
                </div>
            </header>
        );
    };


  return (
    <div>
      <Header/>
      <main>{children}</main>
      <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2024 BookingNest. All rights reserved.</p>
      </footer>
      {openSignIn && <LogInOut />}
    </div>
  );
};

export default Layout;



//> What was at the first:

// return (
//     <div>
//       <header style={{ position: 'sticky', top: '0', backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h1 style={{ margin: 0 }}>BookingNest ...</h1>
//         <div>
//             <Link to="/hotel-registration">
//                 <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                     Register Your Hotel
//                 </button>
//             </Link>
//             <Link to="/customer-registration">
//                 <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                     Register
//                 </button>
//             </Link>
//             <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                 Login
//             </button>
//         </div>
//     </header>
//     <main>{children}</main>
//     <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
//         <p>&copy; 2024 BookingNest. All rights reserved.</p>
//     </footer>
//     </div>
//   );
// };

// export default Layout;

