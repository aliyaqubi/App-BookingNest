import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const Result = styled('div')`
  width: 500px;
  font-weight: bold;
  margin-top: 20px;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: orange;
`;

const SearchHResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle case where state might be null
  if (!location.state) {
    // Redirect to the search page if accessed directly without state
    navigate('/');
    return null;
  }

  const { results } = location.state;


  return (
    <div>
      <h2 style={{color: 'blue'}}>Hotel Searching Results</h2>
      <div>
         {results.length > 0 ? (
            results.map((result, index) => (
                <Result key={index}>
                    <p style={{color: 'green' , fontSize: '30px'}}>Hotel {result.name}</p>
                    <p style={{color: 'blue', fontSize: '20px'}}>{result.city}, {result.country}</p>
                    <Link to="/bookings">
                      <button 
                        style={{ margin: '0 5px', marginTop: '30px' , padding: '10px 20px', backgroundColor: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        //onClick={() => navigate('/bookings', { state: { hotel_name: result.name, city: result.city } })}
                      >
                          Book Now
                      </button>
                    </Link>
                </Result>
            ))
         ) : (
            <p>No results found</p> 
         )}
      </div>
    </div>
  );
};

export default SearchHResults;

// const SearchHResults = () => {

// };

// export default SearchHResults;