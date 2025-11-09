# 🚀 Nitro 5 Setup Guide

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/tmmanss/Game-Library.git
cd Game-Library
```

### 2. Get RAWG API Key (Optional but Recommended)

The project uses RAWG Video Games Database API to fetch real game data.

1. Visit https://rawg.io/apidocs
2. Create a free account
3. Go to your API settings
4. Copy your API key

### 3. Configure API Key

Open `js/api.js` and replace the placeholder:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual key
```

Example:
```javascript
const API_KEY = 'abc123def456ghi789'; // Your real API key
```

### 4. Run the Project

#### Option A: Using Live Server (Recommended)
1. Install Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option B: Using Python
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

#### Option C: Using Node.js
```bash
npx http-server
# Visit http://localhost:8080
```

#### Option D: Direct Browser
Simply open `index.html` in your browser (some features may not work due to CORS)

## 🎮 Testing Features

### Test Authentication
1. Click "Sign in" button
2. Switch to "Register" tab
3. Create account with:
   - Name: Test User
   - Email: test@example.com
   - Password: Test1234
4. Login with these credentials

### Test Ratings
1. Go to home page
2. Click on stars to rate platform
3. Rating is saved in localStorage

### Test Search
1. Go to Store page
2. Type game names in search
3. Search history is saved

### Test Themes
1. Click theme toggle button
2. Switch between light/dark
3. Preference is saved

### Test Language
1. Use language selector
2. Choose between EN/RU/KK
3. All text updates instantly

## 📱 Responsive Testing

Test on different screen sizes:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

Use browser DevTools (F12) → Toggle device toolbar

## 🐛 Troubleshooting

### API Not Working
- Check your API key is correctly added
- Check browser console for errors
- Verify internet connection
- Note: RAWG API has rate limits on free tier

### localStorage Not Saving
- Check if cookies/storage is enabled in browser
- Try in non-incognito mode
- Clear browser cache and reload

### Styles Not Loading
- Check all CSS files are in `/css` folder
- Verify file paths are correct
- Clear browser cache (Ctrl+F5)

### Scripts Not Running
- Check all JS files are in `/js` folder
- Open browser console (F12) for errors
- Verify all script tags have correct paths

## 📂 Project Structure Overview

```
Game-Library/
├── index.html           # Home page
├── profile.html         # User profile page  
├── store.html          # Game store with API
├── library.html        # User's game library
├── gallery.html        # Game gallery
├── about.html          # About page
│
├── css/
│   ├── style.css       # Main styles (themes, layout)
│   ├── index.css       # Home page styles
│   ├── store.css       # Store page styles
│   └── ...
│
├── js/
│   ├── theme.js        # Light/Dark mode
│   ├── auth.js         # Authentication system
│   ├── ratings.js      # Rating system
│   ├── search.js       # Search with history
│   ├── api.js          # RAWG API integration
│   ├── i18n.js         # Multi-language support
│   ├── app.js          # Main app logic
│   └── enhancements.js # Form validation
│
├── game-pages/         # Individual game detail pages
└── images/            # Game images and assets
```

## 🔑 Key Features to Test

- ✅ User Registration & Login
- ✅ Profile Page
- ✅ Theme Switching (Light/Dark)
- ✅ Language Switching (EN/RU/KK)
- ✅ Game Search with History
- ✅ Rating System
- ✅ Form Validation
- ✅ API Integration (Store page)
- ✅ Responsive Design
- ✅ localStorage Persistence

## 📝 Notes

- All user data is stored locally (localStorage)
- No backend server required
- API key is optional but recommended for full experience
- Project works best on modern browsers (Chrome, Firefox, Edge, Safari)

## 🎓 For Evaluation

This project demonstrates:
1. **Responsiveness**: Fully responsive across all devices
2. **Authentication**: Complete sign up/login system
3. **localStorage**: User data, theme, language, ratings, search history
4. **Validation**: Email, password, phone number validation
5. **API Integration**: RAWG Video Games Database
6. **Multi-language**: EN, RU, KK support
7. **Themes**: Light and Dark modes
8. **Design**: Professional, accessible, modern UI

---

**Made by SE-2409: Mansur Tasbolat & Eraly Zalel**  
**Astana IT University - Web Technologies Course**
