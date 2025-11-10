# Nitro 5 Gaming Platform 🎮

A modern, responsive gaming platform built with HTML, CSS, and JavaScript featuring user authentication, game ratings, external API integration, and more.

## 📋 Project Overview

Nitro 5 is a comprehensive gaming platform that provides:
- Game browsing and purchasing
- Personal game library management
- User authentication system
- Game ratings and reviews
- Search functionality with history
- Integration with RAWG Video Games Database API
- Multi-language support (English, Russian, Kazakh)
- Light and Dark themes

## 🎯 Features

### ✅ Responsiveness
- Fully responsive design for desktop, tablet, and mobile devices
- Optimized layouts using CSS Grid and Flexbox
- Mobile-first approach with progressive enhancement

### 🔐 Authentication System
- User registration with validation
- Secure login/logout functionality
- User profile page showing account details
- Data persistence using localStorage

### 🎨 Light & Dark Modes
- Seamless theme switching
- Theme preference saved in localStorage
- Consistent styling across all pages
- Optimized color contrast for accessibility

### ⭐ Rating System
- Rate games and the platform
- Average ratings calculation
- Rating history stored in localStorage
- Visual star rating interface

### 🔍 Search & Filtration
- Real-time game search
- Search history saved in localStorage
- Auto-complete suggestions
- Keyword highlighting in results

### 🌐 External API Integration
- Integration with RAWG Video Games Database API
- Fetch trending games
- Get detailed game information
- Display game screenshots
- API response caching for performance

### 🌍 Multi-language Support
- English, Russian, and Kazakh languages
- Easy language switching
- Preference saved in localStorage
- Complete UI translation

### ✅ Form Validation
- Email format validation
- Password strength requirements (min 8 chars, uppercase, lowercase, number)
- Phone number format validation
- Required field validation
- Real-time validation feedback

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Animations, Custom Properties
- **JavaScript (ES6+)**: Modules, localStorage, Fetch API
- **jQuery**: DOM manipulation and AJAX
- **RAWG API**: Game data integration

## 📁 Project Structure

```
Game-Library/
├── index.html              # Home page
├── about.html              # About page
├── store.html              # Game store
├── library.html            # User's game library
├── gallery.html            # Game gallery
├── profile.html            # User profile
├── css/
│   ├── style.css          # Main styles
│   ├── index.css          # Home page styles
│   ├── store.css          # Store page styles
│   ├── library.css        # Library page styles
│   ├── gallery.css        # Gallery page styles
│   └── about.css          # About page styles
├── js/
│   ├── app.js             # Main application logic
│   ├── theme.js           # Theme management
│   ├── auth.js            # Authentication system
│   ├── ratings.js         # Rating system
│   ├── search.js          # Search functionality
│   ├── api.js             # RAWG API integration
│   ├── i18n.js            # Internationalization
│   ├── enhancements.js    # Form validation
│   └── jquery_app.js      # jQuery features
├── images/                 # Image assets
└── game-pages/            # Individual game detail pages
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API features
- RAWG API key (get one at https://rawg.io/apidocs)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tmmanss/Game-Library.git
```

2. Navigate to the project directory:
```bash
cd Game-Library
```

3. Add your RAWG API key:
   - Open `js/api.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

4. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

5. Visit `http://localhost:8000` in your browser

## 📖 Usage Guide

### User Registration
1. Click the "Sign in" button in the header
2. Switch to the "Register" tab
3. Fill in your details (name, email, phone, password)
4. Password must be at least 8 characters with uppercase, lowercase, and numbers
5. Click "Register" to create your account

### Browsing Games
1. Visit the "Store" page to see available games
2. Use the search bar to find specific games
3. View trending games from the RAWG API
4. Click on any game to see more details

### Rating Games
1. Navigate to any game or the home page
2. Click on the star rating widget
3. Select your rating (1-5 stars)
4. Your rating is saved in localStorage

### Changing Theme
1. Click the theme toggle button in the header
2. Choose between light and dark modes
3. Your preference is automatically saved

### Changing Language
1. Use the language selector in the header
2. Choose between English, Russian, or Kazakh
3. The entire UI will update instantly

## 🎨 Design Highlights

- **Color Scheme**: Professional dark theme with orange accents
- **Typography**: Inter and Roboto fonts for excellent readability
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **Performance**: Lazy loading, API caching, optimized assets

## 👥 Team

**Group SE-2409**
- **Mansur Tasbolat** - Developer
- **Eraly Zalel** - Developer

**Institution**: Astana IT University  
**Course**: Web Technologies - Front-End Development  

## 📄 License

This project is created for educational purposes as part of the Web Technologies course at Astana IT University.

## 🙏 Acknowledgments

- RAWG Video Games Database for the API
- Font Awesome for icons
- Google Fonts for typography
- Astana IT University for the opportunity


## 🔄 Version History

### Version 1.0.0 (November 2024)
- Initial release
- Full responsive design
- Authentication system
- Light/Dark themes
- Multi-language support
- RAWG API integration
- Rating system
- Search functionality

---

**Made with ❤️ by SE-2409**
