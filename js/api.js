// RAWG API Integration
// API Key: You need to get your own key from https://rawg.io/apidocs
// For demo purposes, we'll use a public key (rate limited)

(() => {
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual RAWG API key
  const BASE_URL = 'https://api.rawg.io/api';
  const CACHE_KEY = 'nitro5_api_cache';
  const CACHE_DURATION = 3600000; // 1 hour in milliseconds

  // Get cached data
  const getCache = (key) => {
    try {
      const cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
      const item = cache[key];
      
      if (!item) return null;
      
      const now = Date.now();
      if (now - item.timestamp > CACHE_DURATION) {
        delete cache[key];
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        return null;
      }
      
      return item.data;
    } catch {
      return null;
    }
  };

  // Set cache data
  const setCache = (key, data) => {
    try {
      const cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
      cache[key] = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (error) {
      console.error('Cache error:', error);
    }
  };

  // Fetch from RAWG API with caching
  const fetchFromAPI = async (endpoint, params = {}) => {
    const queryParams = new URLSearchParams({
      key: API_KEY,
      ...params
    });

    const url = `${BASE_URL}${endpoint}?${queryParams}`;
    const cacheKey = `api_${endpoint}_${queryParams.toString()}`;

    // Check cache first
    const cached = getCache(cacheKey);
    if (cached) {
      console.log('Returning cached data for:', endpoint);
      return cached;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  };

  // Search games
  window.searchGamesAPI = async (query, page = 1, pageSize = 10) => {
    try {
      const data = await fetchFromAPI('/games', {
        search: query,
        page,
        page_size: pageSize
      });

      return {
        success: true,
        games: data.results || [],
        count: data.count || 0,
        next: data.next,
        previous: data.previous
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        games: []
      };
    }
  };

  // Get game details
  window.getGameDetailsAPI = async (gameId) => {
    try {
      const data = await fetchFromAPI(`/games/${gameId}`);
      
      return {
        success: true,
        game: data
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  };

  // Get game screenshots
  window.getGameScreenshotsAPI = async (gameId) => {
    try {
      const data = await fetchFromAPI(`/games/${gameId}/screenshots`);
      
      return {
        success: true,
        screenshots: data.results || []
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        screenshots: []
      };
    }
  };

  // Get trending games
  window.getTrendingGamesAPI = async (pageSize = 10) => {
    try {
      const data = await fetchFromAPI('/games', {
        ordering: '-added',
        page_size: pageSize
      });

      return {
        success: true,
        games: data.results || []
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        games: []
      };
    }
  };

  // Display game card from API data
  window.displayAPIGameCard = (game, container) => {
    if (!game || !container) return;

    const card = document.createElement('article');
    card.className = 'game-card api-game-card';
    card.innerHTML = `
      <img src="${game.background_image || 'images/placeholder.jpg'}" alt="${game.name}">
      <div class="card-body">
        <h3>${game.name}</h3>
        <p class="genre">${game.genres?.map(g => g.name).join(', ') || 'Various'}</p>
        <p class="rating">⭐ ${game.rating || 'N/A'} / 5</p>
        <p class="released">Released: ${game.released || 'TBA'}</p>
        <button class="btn-buy" data-game-id="${game.id}">View Details</button>
      </div>
    `;

    container.appendChild(card);
  };

  // Demo: Load trending games on store page
  document.addEventListener('DOMContentLoaded', async () => {
    const apiSection = document.getElementById('api-games-section');
    
    if (apiSection) {
      const loadingMsg = document.createElement('p');
      loadingMsg.textContent = 'Loading trending games...';
      loadingMsg.style.textAlign = 'center';
      apiSection.appendChild(loadingMsg);

      try {
        const result = await getTrendingGamesAPI(6);
        
        if (result.success && result.games.length > 0) {
          loadingMsg.remove();
          
          const grid = document.createElement('div');
          grid.className = 'game-grid';
          
          result.games.forEach(game => displayAPIGameCard(game, grid));
          apiSection.appendChild(grid);
        } else {
          loadingMsg.textContent = 'Failed to load games from API. Please check your API key.';
          loadingMsg.style.color = '#ff6b6b';
        }
      } catch (error) {
        loadingMsg.textContent = 'Error loading games. ' + error.message;
        loadingMsg.style.color = '#ff6b6b';
      }
    }
  });

  console.log('📡 RAWG API Integration loaded. Remember to add your API key!');
})();
