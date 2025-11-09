// Authentication System with localStorage
(() => {
  const AUTH_KEY = 'nitro5_users';
  const CURRENT_USER_KEY = 'nitro5_current_user';

  // Get all users from localStorage
  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
    } catch {
      return [];
    }
  };

  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
  };

  // Get current logged-in user
  const getCurrentUser = () => {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    } catch {
      return null;
    }
  };

  // Set current user
  const setCurrentUser = (user) => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  };

  // Email validation
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Password validation (min 8 chars, at least 1 uppercase, 1 lowercase, 1 number)
  const isValidPassword = (password) => {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password);
  };

  // Phone validation (basic format)
  const isValidPhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
  };

  // Register new user
  window.register = (name, email, password, phone = '') => {
    if (!name || !email || !password) {
      return { success: false, message: 'All fields are required' };
    }

    if (!isValidEmail(email)) {
      return { success: false, message: 'Invalid email format' };
    }

    if (!isValidPassword(password)) {
      return { success: false, message: 'Password must be at least 8 characters with uppercase, lowercase, and number' };
    }

    if (phone && !isValidPhone(phone)) {
      return { success: false, message: 'Invalid phone number format' };
    }

    const users = getUsers();
    
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // In production, this should be hashed
      phone,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, message: 'Registration successful!', user: newUser };
  };

  // Login user
  window.login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Don't store password in current user
    const { password: _, ...userWithoutPassword } = user;
    setCurrentUser(userWithoutPassword);

    return { success: true, message: 'Login successful!', user: userWithoutPassword };
  };

  // Logout user
  window.logout = () => {
    setCurrentUser(null);
    return { success: true, message: 'Logged out successfully' };
  };

  // Check if user is logged in
  window.isLoggedIn = () => {
    return getCurrentUser() !== null;
  };

  // Get current user info
  window.getCurrentUserInfo = () => {
    return getCurrentUser();
  };

  // Update UI based on auth state
  const updateAuthUI = () => {
    const user = getCurrentUser();
    const signInBtn = document.getElementById('openPopup');
    
    if (signInBtn) {
      if (user) {
        signInBtn.textContent = user.name.split(' ')[0];
        signInBtn.title = 'View profile';
        signInBtn.onclick = () => {
          window.location.href = 'profile.html';
        };
      } else {
        signInBtn.textContent = 'Sign in';
        signInBtn.title = 'Sign in';
        signInBtn.onclick = null; // Let default modal handler work
      }
    }
  };

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', updateAuthUI);

  // Export for use in other scripts
  window.authSystem = {
    register,
    login,
    logout,
    isLoggedIn,
    getCurrentUserInfo,
    updateAuthUI
  };
})();
