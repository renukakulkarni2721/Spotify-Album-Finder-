🎧 Spotify Album Recommender
AI-Powered Music Discovery Web App

The Spotify Album Recommender is a web application that helps users discover new music based on their listening preferences.
Using Spotify’s API and a smart recommendation engine, the app suggests albums that match the user’s taste — helping them explore more music effortlessly.

🚀 Features

🔐 Spotify Login – Secure user authentication using Spotify OAuth.

🎵 Personalized Album Suggestions – Recommendations based on the user’s top tracks, artists, or genres.

💽 Clean UI – Modern, responsive, and fast music browsing experience.

🔍 Smart Matching – Uses audio features, genres, and similarity scoring.

❤️ Save to Spotify – Add recommended albums directly to your Spotify library.

⚡ Fast & Lightweight Architecture – Built using modern web technologies.

🛠️ Tech Stack

Frontend:

React.js / HTML / CSS

Axios for API calls

Spotify Web Playback SDK (optional)

Backend:

Node.js

Express.js

Spotify Web API

Other Tools:

OAuth 2.0

Environment Variables (.env)

📂 Project Structure
/spotify-album-recommender
│── /client
│   ├── src
│   ├── components
│   ├── pages
│   ├── App.js
│── /server
│   ├── index.js
│   ├── routes
│── .env
│── package.json
│── README.md

🔧 Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/spotify-album-recommender.git
cd spotify-album-recommender

2️⃣ Install Dependencies

Frontend

cd client
npm install


Backend

cd server
npm install

3️⃣ Configure Environment Variables

Create a .env file inside the server folder:

CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret
REDIRECT_URI=http://localhost:3000/callback

4️⃣ Start the App

Backend:

npm start


Frontend:

npm start


Your app runs at:
👉 http://localhost:3000

🎯 How Recommendations Work

The system fetches Spotify data like:

User’s top artists

User’s top tracks

Audio features (tempo, danceability, valence, energy)

Genre similarity

Then it analyzes the pattern and suggests the closest-matching albums using Spotify’s recommendation algorithm + your custom logic.

🖼️ Screenshots (optional)

Add UI screenshots here later.

✨ Future Improvements

🔍 Advanced mood-based filtering

🧠 AI-based content embedding for deeper similarity

📱 Mobile app version

🌙 Dark/Light mode

👥 Collaborative playlist recommendations

🤝 Contributors

Soham Patil (You)

Renuka Kulkarni
