import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(null);
  const [query, setQuery] = useState('girls'); // Default query
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Function to fetch show details from the API
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching the show details:', error);
      }
    };

    fetchShow();
  }, [query]); // Fetch data when the query changes

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My TV App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter show name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {show ? (
          <div className="show-card">
            <img src={show.image ? show.image.medium : ''} alt={show.name} className="show-image" />
            <div className="show-details">
              <h2>{show.name}</h2>
              <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
              <p><strong>Rating:</strong> {show.rating.average || 'N/A'}</p>
              <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: show.summary }} /></p>
            </div>
          </div>
        ) : (
          <p>Loading show details...</p>
        )}
      </header>
    </div>
  );
}

export default App;