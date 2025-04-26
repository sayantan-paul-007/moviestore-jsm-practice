# 🎥 MovieStore

A stylish React.js application to search and explore movies using the OMDb API.  
Built with a focus on smooth UI, basic error handling, and mobile responsiveness.

---

## ✨ Features

- 🔍 Search for movies by title
- 🎴 Display movie details: Poster, Title, Year, and Type
- ❗ Error handling for API failures or no search results
- 📱 Responsive design (works well on mobile)
- 🖌️ Modern, elegant UI with custom CSS
- 🖼️ Fallback image if movie poster is unavailable

---

## 🚀 Live Demo

Coming soon! (Deploy on Vercel / Netlify / etc.)

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components, Hooks)
- **API:** OMDb API
- **Styling:** Custom CSS, Google Fonts

---

## 📦 Installation

**Clone the repository:**
```bash
git clone https://github.com/sayantan-paul-007/moviestore.git
```
**Navigate to the project directory:**
```bash
cd moviestore
```
**Install dependencies:**
```bash
npm install
```
**Start the development server:**
```bash
npm install
```
The app will run at [http://localhost:3000](http://localhost:3000).

## 🔑 API Key Setup

This project uses the [OMDb API](https://www.omdbapi.com/).

1. Go to [OMDb API](https://www.omdbapi.com/apikey.aspx) and get a free API key.
2. Replace `your_api_key` in `App.js`:
   ```javascript
   const API_URL = 'https://www.omdbapi.com/?apikey=your_api_key';
   ```

---
## 📂 Project Structure

```
moviestore/
├── public/
│   └── search.svg
├── src/
│   ├── App.js
│   ├── MovieCard.js
│   ├── style.css
│   └── index.js
├── package.json
└── README.md
```
## 📷 Screenshots

| Home View | Search Result |
|:---------:|:-------------:|
| ![Home Screenshot](https://moviestore-jsm.vercel.app/) | ![Search Screenshot](https://via.placeholder.com/400x300?text=Search) |

---

💡 Improvements for Future
--------------------------

*   Pagination or infinite scroll
    
*   Loading animations while fetching
    
*   Movie detail pages
    
*   Dark mode toggle
    
*   Better error UI/UX
    
*   Environment variables for API keys
