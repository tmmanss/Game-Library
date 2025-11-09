// User Actions Management System
// Stores user-specific actions like purchases, ratings, favorites, etc.

(() => {
  'use strict';

  // Get user-specific key for localStorage
  const getUserKey = (action) => {
    const user = window.getCurrentUserInfo?.();
    if (!user) return null;
    return `nitro5_${action}_${user.id}`;
  };

  // Get user data for specific action
  const getUserData = (action) => {
    const key = getUserKey(action);
    if (!key) return [];
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  };

  // Save user data for specific action
  const saveUserData = (action, data) => {
    const key = getUserKey(action);
    if (!key) return false;
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  };

  // === LIBRARY / PURCHASES ===
  window.addToLibrary = (gameId, gameName, gamePrice, gameImage) => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to add games to your library' };
    }

    const library = getUserData('library');
    
    if (library.find(g => g.id === gameId)) {
      return { success: false, message: 'Game already in your library' };
    }

    const game = {
      id: gameId,
      name: gameName,
      price: gamePrice,
      image: gameImage,
      purchasedAt: new Date().toISOString()
    };

    library.push(game);
    saveUserData('library', library);

    return { success: true, message: 'Game added to your library!' };
  };

  window.getLibrary = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('library');
  };

  window.removeFromLibrary = (gameId) => {
    if (!window.isLoggedIn?.()) return false;
    
    const library = getUserData('library');
    const filtered = library.filter(g => g.id !== gameId);
    saveUserData('library', filtered);
    
    return true;
  };

  // === FAVORITES ===
  window.addToFavorites = (gameId, gameName, gameImage) => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to add favorites' };
    }

    const favorites = getUserData('favorites');
    
    if (favorites.find(g => g.id === gameId)) {
      return { success: false, message: 'Already in favorites' };
    }

    const game = {
      id: gameId,
      name: gameName,
      image: gameImage,
      addedAt: new Date().toISOString()
    };

    favorites.push(game);
    saveUserData('favorites', favorites);

    return { success: true, message: 'Added to favorites!' };
  };

  window.removeFromFavorites = (gameId) => {
    if (!window.isLoggedIn?.()) return false;
    
    const favorites = getUserData('favorites');
    const filtered = favorites.filter(g => g.id !== gameId);
    saveUserData('favorites', filtered);
    
    return true;
  };

  window.getFavorites = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('favorites');
  };

  window.isFavorite = (gameId) => {
    if (!window.isLoggedIn?.()) return false;
    const favorites = getUserData('favorites');
    return favorites.some(g => g.id === gameId);
  };

  // === RATINGS ===
  window.rateGame = (gameId, rating, review = '') => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to rate games' };
    }

    if (rating < 1 || rating > 5) {
      return { success: false, message: 'Rating must be between 1 and 5' };
    }

    const ratings = getUserData('ratings');
    const existingIndex = ratings.findIndex(r => r.gameId === gameId);

    const ratingData = {
      gameId,
      rating,
      review,
      ratedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      ratings[existingIndex] = ratingData;
    } else {
      ratings.push(ratingData);
    }

    saveUserData('ratings', ratings);

    return { success: true, message: 'Rating saved!' };
  };

  window.getUserRating = (gameId) => {
    if (!window.isLoggedIn?.()) return null;
    const ratings = getUserData('ratings');
    return ratings.find(r => r.gameId === gameId);
  };

  window.getAllUserRatings = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('ratings');
  };

  // === CART ===
  window.addToCart = (gameId, gameName, gamePrice, gameImage) => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to add items to cart' };
    }

    const cart = getUserData('cart');
    
    if (cart.find(g => g.id === gameId)) {
      return { success: false, message: 'Game already in cart' };
    }

    const game = {
      id: gameId,
      name: gameName,
      price: gamePrice,
      image: gameImage,
      addedAt: new Date().toISOString()
    };

    cart.push(game);
    saveUserData('cart', cart);

    return { success: true, message: 'Added to cart!' };
  };

  window.removeFromCart = (gameId) => {
    if (!window.isLoggedIn?.()) return false;
    
    const cart = getUserData('cart');
    const filtered = cart.filter(g => g.id !== gameId);
    saveUserData('cart', filtered);
    
    return true;
  };

  window.getCart = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('cart');
  };

  window.clearCart = () => {
    if (!window.isLoggedIn?.()) return false;
    saveUserData('cart', []);
    return true;
  };

  // === REVIEWS ===
  window.addReview = (gameId, gameName, reviewText, rating) => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to write reviews' };
    }

    const user = window.getCurrentUserInfo();
    const reviews = getUserData('reviews');

    const review = {
      id: Date.now(),
      gameId,
      gameName,
      reviewText,
      rating,
      userName: user.name,
      userEmail: user.email,
      createdAt: new Date().toISOString()
    };

    reviews.push(review);
    saveUserData('reviews', reviews);

    return { success: true, message: 'Review published!' };
  };

  window.getUserReviews = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('reviews');
  };

  // === WISHLIST ===
  window.addToWishlist = (gameId, gameName, gamePrice, gameImage) => {
    if (!window.isLoggedIn?.()) {
      return { success: false, message: 'Please sign in to add to wishlist' };
    }

    const wishlist = getUserData('wishlist');
    
    if (wishlist.find(g => g.id === gameId)) {
      return { success: false, message: 'Already in wishlist' };
    }

    const game = {
      id: gameId,
      name: gameName,
      price: gamePrice,
      image: gameImage,
      addedAt: new Date().toISOString()
    };

    wishlist.push(game);
    saveUserData('wishlist', wishlist);

    return { success: true, message: 'Added to wishlist!' };
  };

  window.removeFromWishlist = (gameId) => {
    if (!window.isLoggedIn?.()) return false;
    
    const wishlist = getUserData('wishlist');
    const filtered = wishlist.filter(g => g.id !== gameId);
    saveUserData('wishlist', filtered);
    
    return true;
  };

  window.getWishlist = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('wishlist');
  };

  // === PLAY TIME TRACKING ===
  window.trackPlayTime = (gameId, minutes) => {
    if (!window.isLoggedIn?.()) return false;
    
    const playTime = getUserData('playtime');
    const existing = playTime.find(p => p.gameId === gameId);

    if (existing) {
      existing.totalMinutes += minutes;
      existing.lastPlayed = new Date().toISOString();
    } else {
      playTime.push({
        gameId,
        totalMinutes: minutes,
        lastPlayed: new Date().toISOString()
      });
    }

    saveUserData('playtime', playTime);
    return true;
  };

  window.getPlayTime = (gameId) => {
    if (!window.isLoggedIn?.()) return null;
    const playTime = getUserData('playtime');
    return playTime.find(p => p.gameId === gameId);
  };

  window.getAllPlayTime = () => {
    if (!window.isLoggedIn?.()) return [];
    return getUserData('playtime');
  };

  // === ACHIEVEMENTS ===
  window.unlockAchievement = (gameId, achievementId, achievementName) => {
    if (!window.isLoggedIn?.()) return false;
    
    const achievements = getUserData('achievements');
    const key = `${gameId}_${achievementId}`;
    
    if (!achievements.find(a => a.key === key)) {
      achievements.push({
        key,
        gameId,
        achievementId,
        achievementName,
        unlockedAt: new Date().toISOString()
      });
      saveUserData('achievements', achievements);
    }
    
    return true;
  };

  window.getUserAchievements = (gameId = null) => {
    if (!window.isLoggedIn?.()) return [];
    const achievements = getUserData('achievements');
    return gameId ? achievements.filter(a => a.gameId === gameId) : achievements;
  };

  console.log('✅ User Actions System loaded');
})();
