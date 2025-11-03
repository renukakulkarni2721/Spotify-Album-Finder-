import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-node";

// Load environment variables
dotenv.config();

console.log("Client ID:", process.env.SPOTIFY_CLIENT_ID);
console.log("Client Secret:", process.env.SPOTIFY_CLIENT_SECRET ? "Loaded ✅" : "Missing ❌");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Initialize Spotify API (no redirect URI needed for Client Credentials flow)
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Function to generate Spotify token
async function generateToken() {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);
    console.log("🎵 Spotify access token generated successfully!");

    // Automatically refresh token before it expires
    setTimeout(generateToken, (data.body.expires_in - 60) * 1000); 
    // expires_in is usually 3600 sec (1 hour)
  } catch (err) {
    console.error("❌ Error generating Spotify token:", err.body || err);
  }
}

// Generate token once when server starts
generateToken();

// --- Routes ---

// Test route
app.get("/", (req, res) => {
  res.send("🎧 Spotify Album Finder API is running ✅");
});

// Album search route
app.get("/search", async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  try {
    const data = await spotifyApi.searchAlbums(q, { limit: 10 });
    const albums = data.body.albums.items.map((album) => ({
      name: album.name,
      artist: album.artists[0]?.name,
      image: album.images[0]?.url,
      url: album.external_urls.spotify,
    }));

    res.json(albums);
  } catch (error) {
    console.error("❌ Error fetching albums:", error.body || error);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});
