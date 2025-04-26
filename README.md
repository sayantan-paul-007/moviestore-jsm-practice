🎥 MovieStore
A stylish React.js application to search and explore movies using the OMDb API.
Built with a focus on smooth UI, basic error handling, and mobile responsiveness.

✨ Features
🔍 Search for movies by title

🎴 Display movie details: Poster, Title, Year, and Type

❗ Error handling for API failures or no search results

📱 Responsive design (works well on mobile)

🖌️ Modern, elegant UI with custom CSS

🖼️ Fallback image if movie poster is unavailable

🚀 Live Demo
https://moviestore-jsm.vercel.app/

🛠️ Tech Stack
Frontend: React.js (Functional Components, Hooks)

API: OMDb API

Styling: Custom CSS, Google Fonts

📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/moviestore.git
Navigate to the project directory:

bash
Copy
Edit
cd moviestore
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The app will run at http://localhost:3000.

🔑 API Key Setup
The app uses the OMDb API.
Currently, a demo key is hardcoded (apikey=5650cfb) in the project:

javascript
Copy
Edit
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5650cfb';
For production or serious use, you should:

Get your free OMDb API key

Replace the API key in App.js

📂 Project Structure
pgsql
Copy
Edit
moviestore/
├── public/
│   └── search.svg
├── src/
│   ├── components/
│   │   └── MovieCard.js
│   ├── App.js
│   ├── style.css
│   └── index.js
├── package.json
└── README.md
📸 Screenshots

Home (Desktop)	Search Result (Mobile)
(Add screenshots here)	(Add screenshots here)
💡 Improvements for Future
Pagination or infinite scroll

Loading animations while fetching

Movie detail pages

Dark mode toggle

Better error UI/UX

Environment variables for API keys

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

🧾 License
This project is free to use under the MIT License.

🌟 Show your support!
If you like this project, please ⭐️ the repository!

