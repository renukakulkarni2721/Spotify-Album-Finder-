import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setAlbums([]);

    try {
      const response = await fetch(`http://localhost:4000/search?q=${query}`);
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Spotify Album Finder 🎵</h1>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter artist name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading albums...</p>}

      <div className="album-grid">
        {albums.map((album, index) => (
          <div className="album-card" key={index}>
            <img src={album.image} alt={album.name} />
            <h3>{album.name}</h3>
            <p>{album.artist}</p>
            <a href={album.url} target="_blank" rel="noreferrer">
              Listen on Spotify
            </a>
          </div>
        ))}
      </div>

      {!loading && albums.length === 0 && (
        <p className="hint">Try searching for “Taylor Swift” or “Arijit Singh” 🎤</p>
      )}
    </div>
  );
}

export default App;
