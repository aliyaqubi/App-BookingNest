import React, { useState } from 'react';
import axios from 'axios';
//import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const SearchH = () => {
  //const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  //const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = async () => {
    if (!city) {
      setError('Please enter a country or a city to search');
      return;
    }


    try {
      setError('');
      const cityResponse = city ? await axios.get(`http://localhost:8000/hotel/all?city=${city}`) : { data: [] };
      navigate('/search-hotel-results', { state: { results: (cityResponse.data) } });
    } catch (error) {
      setError('Error during search. Please try again later.');
    }
  };

  return (
    <div>
      <h2 style={{marginBottom: '10px' , color: 'blue'}}>Lets start !</h2>
      <h2 style={{color: 'blue'}}>Where do you want to stay?</h2>
        <form>
          <input
            style={{ width: '400px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Link to="/search-hotel-results">
            <button
              style={{ width: '415px', padding: '10px 20px', margin: '10px auto', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
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














//const countryResponse = country ? await axios.get(`http://localhost:8000/hotel/all?country=${country}`) : { data: [] };

//setResults([...countryResponse.data, ...cityResponse.data]);