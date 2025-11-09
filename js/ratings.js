// Rating System with localStorage
(() => {
  const RATINGS_KEY = 'nitro5_ratings';

  // Get all ratings from localStorage
  const getRatings = () => {
    try {
      return JSON.parse(localStorage.getItem(RATINGS_KEY)) || {};
    } catch {
      return {};
    }
  };

  // Save ratings to localStorage
  const saveRatings = (ratings) => {
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  };

  // Save a rating for a specific game
  window.saveRating = (gameId, rating) => {
    if (!gameId || rating < 1 || rating > 5) {
      return { success: false, message: 'Invalid rating data' };
    }

    const ratings = getRatings();
    const user = window.getCurrentUserInfo ? window.getCurrentUserInfo() : null;
    
    if (!ratings[gameId]) {
      ratings[gameId] = [];
    }

    const ratingData = {
      rating,
      userId: user ? user.id : 'guest',
      userName: user ? user.name : 'Guest',
      timestamp: new Date().toISOString()
    };

    ratings[gameId].push(ratingData);
    saveRatings(ratings);

    return { success: true, message: 'Rating saved successfully', avgRating: getAverageRating(gameId) };
  };

  // Get average rating for a game
  window.getAverageRating = (gameId) => {
    const ratings = getRatings();
    const gameRatings = ratings[gameId];
    
    if (!gameRatings || gameRatings.length === 0) {
      return 0;
    }

    const sum = gameRatings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / gameRatings.length).toFixed(1);
  };

  // Get all ratings for a game
  window.getGameRatings = (gameId) => {
    const ratings = getRatings();
    return ratings[gameId] || [];
  };

  // Get rating count for a game
  window.getRatingCount = (gameId) => {
    const ratings = getRatings();
    return (ratings[gameId] || []).length;
  };

  // Display rating stars
  window.displayRatingStars = (container, gameId) => {
    if (!container) return;

    const avgRating = getAverageRating(gameId);
    const count = getRatingCount(gameId);

    container.innerHTML = `
      <div class="rating-display" data-game-id="${gameId}">
        <div class="stars-display">
          ${Array.from({ length: 5 }, (_, i) => {
            const starClass = i < Math.round(avgRating) ? 'star-filled' : 'star-empty';
            return `<span class="star ${starClass}">★</span>`;
          }).join('')}
        </div>
        <div class="rating-info">
          <span class="rating-value">${avgRating > 0 ? avgRating : 'No ratings'}</span>
          ${count > 0 ? `<span class="rating-count">(${count} ${count === 1 ? 'rating' : 'ratings'})</span>` : ''}
        </div>
      </div>
    `;
  };

  // Interactive rating widget
  window.createRatingWidget = (container, gameId, onRate) => {
    if (!container) return;

    container.innerHTML = `
      <div class="rating-widget" data-game-id="${gameId}">
        <div class="rating-stars">
          ${Array.from({ length: 5 }, (_, i) => 
            `<button class="rating-star" data-value="${i + 1}" aria-label="Rate ${i + 1} stars">★</button>`
          ).join('')}
        </div>
        <p class="rating-message">Click a star to rate</p>
      </div>
    `;

    const stars = container.querySelectorAll('.rating-star');
    const message = container.querySelector('.rating-message');

    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', () => {
        highlightStars(stars, index + 1);
      });

      star.addEventListener('mouseleave', () => {
        highlightStars(stars, 0);
      });

      star.addEventListener('click', () => {
        const rating = index + 1;
        const result = saveRating(gameId, rating);
        
        if (result.success) {
          message.textContent = `You rated: ${rating} stars! Average: ${result.avgRating}`;
          message.style.color = '#51cf66';
          highlightStars(stars, rating, true);
          
          if (onRate) {
            onRate(rating, result.avgRating);
          }
        }
      });
    });

    const highlightStars = (stars, count, permanent = false) => {
      stars.forEach((s, i) => {
        if (i < count) {
          s.style.color = '#ffd700';
        } else {
          s.style.color = permanent ? '#666' : 'var(--text-secondary)';
        }
      });
    };
  };

  // Initialize rating displays on page load
  document.addEventListener('DOMContentLoaded', () => {
    // Auto-initialize any rating displays
    document.querySelectorAll('[data-rating-display]').forEach(el => {
      const gameId = el.dataset.ratingDisplay;
      displayRatingStars(el, gameId);
    });

    // Auto-initialize any rating widgets
    document.querySelectorAll('[data-rating-widget]').forEach(el => {
      const gameId = el.dataset.ratingWidget;
      createRatingWidget(el, gameId);
    });
  });
})();
