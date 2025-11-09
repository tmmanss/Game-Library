// Search History with localStorage
(() => {
  const SEARCH_HISTORY_KEY = 'nitro5_search_history';
  const MAX_HISTORY_ITEMS = 10;

  // Get search history from localStorage
  const getSearchHistory = () => {
    try {
      return JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];
    } catch {
      return [];
    }
  };

  // Save search history to localStorage
  const saveSearchHistory = (history) => {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
  };

  // Add search query to history
  window.addToSearchHistory = (query) => {
    if (!query || query.trim().length < 2) return;

    const history = getSearchHistory();
    const trimmedQuery = query.trim().toLowerCase();

    // Remove duplicate if exists
    const filtered = history.filter(item => item.query.toLowerCase() !== trimmedQuery);

    // Add new query at the beginning
    filtered.unshift({
      query: query.trim(),
      timestamp: new Date().toISOString()
    });

    // Keep only MAX_HISTORY_ITEMS
    const limited = filtered.slice(0, MAX_HISTORY_ITEMS);
    saveSearchHistory(limited);

    return limited;
  };

  // Get search history
  window.getSearchHistory = getSearchHistory;

  // Clear search history
  window.clearSearchHistory = () => {
    localStorage.removeItem(SEARCH_HISTORY_KEY);
    return { success: true, message: 'Search history cleared' };
  };

  // Display search history in suggestions
  window.displaySearchHistory = (container) => {
    if (!container) return;

    const history = getSearchHistory();

    if (history.length === 0) {
      container.innerHTML = '<li class="no-history">No search history</li>';
      return;
    }

    container.innerHTML = history.map(item => `
      <li class="history-item suggest-item" data-query="${item.query}">
        <span class="history-icon">🕒</span>
        <span class="history-text">${item.query}</span>
      </li>
    `).join('');
  };

  // Enhanced search with localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');

    if (searchInput && suggestions) {
      // Show history on focus
      searchInput.addEventListener('focus', () => {
        if (!searchInput.value.trim()) {
          displaySearchHistory(suggestions);
        }
      });

      // Handle search
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            addToSearchHistory(query);
            // Trigger search
            searchInput.dispatchEvent(new Event('input'));
          }
        }
      });
    }
  });
})();
