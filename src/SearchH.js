import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/system';

// const Input = styled.input`
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin: 10px 0;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
// `;

// const SuccessMessage = styled.p`
//   color: green;
// `;

// const Result = styled.div`
//   margin-top: 20px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   background-color: #f9f9f9;
// `;


const SearchH = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!country && !city) {
      setError('Please enter a country or a city to search');
      return;
    }

    try {
      setError('');
      const response = await axios.get('http://localhost:8000/hotel/all', {
        params: {
          country,
          city
        }
      });
      setResults(response.data);
    } catch (error) {
      setError('Error during search. Please try again later.');
    }

    // try {
    //   setError('');
    //   const countryResponse = country ? await axios.get(`http://localhost:8000/hotel/all?country=${country}`) : { data: [] };
    //   const cityResponse = city ? await axios.get(`http://localhost:8000/hotel/all?city=${city}`) : { data: [] };
    //   setResults([...countryResponse.data, ...cityResponse.data]);
    // } catch (error) {
    //   setError('Error during search. Please try again later.');
    // }
  };

  return (
    <div>
      <h2 style={{color: 'blue'}}>Where do you want to stay?</h2>
        <form>
          <input
            style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid blue' }}
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            style={{ width: '315px', padding: '10px 20px', margin: '10px auto', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            onClick={handleSearch}>
              Search
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {results.map((hotel, index) => (
          <results key={index} 
            style={{ padding: '10px', marginTop: '20px', backgroundColor: 'blue', border: '1px solid #ccc', borderRadius: '5px'}}>
            <p>{hotel.name}</p>
            <p>{hotel.city}, {hotel.country}</p>
          </results>
        ))}
      </div>
    </div>
  );
};

export default SearchH;
