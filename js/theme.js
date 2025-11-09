// Theme Management System - Works across all pages
(function() {
  'use strict';

  const THEME_KEY = 'nitro5_theme';
  const root = document.documentElement;

  // Get saved theme or detect system preference
  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'dark'; // Default to dark theme
  }

  // Update toggle button icon and text
  function updateToggleButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    if (theme === 'dark') {
      themeToggle.innerHTML = '☀️';
      themeToggle.title = 'Switch to Light Mode';
    } else {
      themeToggle.innerHTML = '🌙';
      themeToggle.title = 'Switch to Dark Mode';
    }
  }

  // Apply theme by setting data-theme attribute
  function applyTheme(theme) {
    const normalized = theme === 'dark' ? 'dark' : 'light';
    root.setAttribute('data-theme', normalized);
    updateToggleButton(normalized);
  }

  // Save theme to localStorage
  function persistTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }

  // Toggle between dark and light themes
  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    persistTheme(next);
  }

  // Initialize theme system
  function initTheme() {
    const initialTheme = root.getAttribute('data-theme') || getPreferredTheme();
    applyTheme(initialTheme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  }

  // Apply theme immediately to prevent flash
  const savedTheme = getPreferredTheme();
  root.setAttribute('data-theme', savedTheme);

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Export for external use
  window.themeManager = { applyTheme, toggleTheme, getPreferredTheme };
})();

