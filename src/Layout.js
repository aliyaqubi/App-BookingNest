import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Modal, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import logo from './images/BookingNest.png';
//import LogInOut from './LogInOut.js';

const BASE_URL = 'http://localhost:8000/' 

//backgroundColor: '#4CAF50', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
//margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' 
const Header = styled('header')(({ theme }) => ({
  position: 'sticky', 
  top: '0',
  backgroundColor: '#4CAF50',
  padding: '10px 20px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '40px',
  display: 'flex',
  alignItems: 'center'
}));

const Logo = styled('img')(({ theme }) => ({
  height: '100px',
  marginRight: '35px'
}));

const StyledButton = styled('button')(({ theme }) => ({
  margin: '0 5px',
  padding: '10px 20px',
  backgroundColor: 'white',
  color: '#4CAF50', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer'
}));



const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: 24,
  padding: '16px',
}));

const Layout = ({ children }) => {

    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authToken, setAuthToken] = useState(null);
    const [authTokenType, setAuthTokenType] = useState(null);
    //const [hotelId, setHotelId] = useState('');
    const [customerId, setCustomerId] = useState('');

    

    const handleOpenSignIn = () => {
        setOpenSignIn(true);
      };
    
    const handleCloseSignIn = () => {
    setOpenSignIn(false);
    };

    const SignIn = async (event) => {
      event.preventDefault();

      let formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const requestOptions = {
        method: 'POST',
        body: formData
      }

      fetch(BASE_URL + 'customer-token', requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then(data => {
          console.log(data);
          setAuthToken(data.access_token)
          setAuthTokenType(data.token_type)
          //setHotelId(data.hotel_id)
          setCustomerId(data.customer_id)
          setUsername(data.username)
        })
        .catch(error => {
          console.log(error);
          alert(error)
        })

      setOpenSignIn(false);   // for disappearing windows message(by login it's appeared on top of windows )

    }

    const signOut = (event) => {
      setAuthToken('')
      setAuthTokenType('')
      //setHotelId('')
      setCustomerId('')
      setUsername('')
    }

  return (  
    <div>
      <Header>
        <Title>
          <NavLink to="/" exact activeClassName="active" href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>
            <Logo src={logo} alt="BookingNest Logo" />
          </NavLink>
          BookingNest...
        </Title>  
        <nav>
          <header>
            {authToken ? (
              <div>
                <StyledButton onClick={() => signOut()}>
                  Logout
                </StyledButton>
                <Link to="/profile">
                    <button style={{ margin: '0 5px', padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Profile
                    </button>
                </Link>
              </div>
              ) : (
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
                    <StyledButton onClick={handleOpenSignIn}>
                      Login
                    </StyledButton>
                </div>
              )
            }
        </header>
        </nav>
      </Header>
      <nav style={{ textAlign: 'center', padding: '10px'}}>
        <NavLink to="/" exact activeClassName="active" href="#home" style={{ textDecoration: 'none', color: '#4CAF50' }}>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/about" activeClassName="active" href="#about" style={{ textDecoration: 'none', color: '#4CAF50' }}>
          About
        </NavLink>
        {' | '}
        <NavLink to="/contact" activeClassName="active" href="#contact" style={{ textDecoration: 'none', color: '#4CAF50' }}>
          Contact US
        </NavLink>
      </nav> 
      <main>{children}</main>
      <footer style={{ backgroundColor: '#4CAF50', padding: '20px', textAlign: 'center' }}>
        <p style={{color: 'white'}} >&copy; 2024 BookingNest. All rights reserved.</p>
      </footer>
      {openSignIn && (                                                          //> Block: Login Pop-up form
        <Modal open={openSignIn} onClose={() => setOpenSignIn}>
          <ModalBox>
            <center>
              <h2 style={{ margin: 0 }}>BookingNest ...</h2>
            </center>
            <form>
              <input
                  placeholder= 'username'
                  type= 'text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
              />
              <input
                  placeholder= 'password'
                  type= 'password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
              />
              <Button type="submit" onClick={SignIn} variant="contained" color="primary">
                Login
              </Button>
            </form>
          </ModalBox>
        </Modal>
      )}
    </div>
  );
}; 

export default Layout;



