import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/system';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';



const Input = styled('input')`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled('button')`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled('p')`
  color: red;
`;

const SearchH = () => {
  //const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //const history = useHistory();

  const handleSearch = async () => {
    if (!city) {
      setError('Please enter a country or a city to search');
      return;
    }


    try {
      setError('');
      //const countryResponse = country ? await axios.get(`http://localhost:8000/hotel/all?country=${country}`) : { data: [] };
      const cityResponse = city ? await axios.get(`http://localhost:8000/hotel/all?city=${city}`) : { data: [] };
      //setResults([...countryResponse.data, ...cityResponse.data]);
      navigate('/search-hotel-results', { state: { results: (cityResponse.data) } });
    } catch (error) {
      setError('Error during search. Please try again later.');
    }
  };

  return (
    <div>
      <h2 style={{color: 'blue'}}>Where do you want to stay?</h2>
        <form>
          <input
            style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Link to="/search-hotel-results">
            <button
              style={{ width: '315px', padding: '10px 20px', margin: '10px auto', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              onClick={handleSearch}>
                Search
            </button>
          </Link>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchH;

