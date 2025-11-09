// Auth Modal Script - Universal for all pages
(() => {
  'use strict';

  // Wait for DOM to be ready
  const initAuthModal = () => {
    // Check if modal already exists
    if (document.getElementById('authModal')) {
      console.log('Auth modal already exists');
      return;
    }

    // Create modal HTML
    const modalHTML = `
    <div id="authModal" class="auth-modal" style="display: none;">
      <div class="auth-modal-content">
        <button class="auth-close" id="closeAuthModal">&times;</button>
        
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="login">Sign In</button>
          <button class="auth-tab" data-tab="register">Register</button>
        </div>

        <!-- Login Form -->
        <form id="loginForm" class="auth-form active">
          <h2>Welcome Back!</h2>
          <div class="form-group">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter password" required>
          </div>
          <button type="submit" class="auth-submit-btn">Sign In</button>
          <p class="auth-message" id="loginMessage"></p>
        </form>

        <!-- Register Form -->
        <form id="registerForm" class="auth-form">
          <h2>Create Account</h2>
          <div class="form-group">
            <label for="registerName">Full Name</label>
            <input type="text" id="registerName" placeholder="John Doe" required>
          </div>
          <div class="form-group">
            <label for="registerEmail">Email</label>
            <input type="email" id="registerEmail" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="registerPhone">Phone (optional)</label>
            <input type="tel" id="registerPhone" placeholder="+7 (777) 123-4567">
          </div>
          <div class="form-group">
            <label for="registerPassword">Password</label>
            <input type="password" id="registerPassword" placeholder="Min 8 chars, 1 upper, 1 number" required>
            <small>Must be at least 8 characters with uppercase, lowercase, and number</small>
          </div>
          <div class="form-group">
            <label for="registerPasswordConfirm">Confirm Password</label>
            <input type="password" id="registerPasswordConfirm" placeholder="Re-enter password" required>
          </div>
          <button type="submit" class="auth-submit-btn">Create Account</button>
          <p class="auth-message" id="registerMessage"></p>
        </form>
      </div>
    </div>`;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add styles if not already present
    if (!document.getElementById('authModalStyles')) {
      const styles = document.createElement('style');
      styles.id = 'authModalStyles';
      styles.textContent = `
        .auth-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .auth-modal-content {
          background: var(--bg-primary);
          border-radius: 24px;
          padding: 3rem;
          width: 90%;
          max-width: 480px;
          position: relative;
          border: 1px solid var(--border-primary);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .auth-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          background: var(--bg-secondary);
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .auth-close:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: rotate(90deg);
        }
        .auth-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--border-primary);
        }
        .auth-tab {
          flex: 1;
          padding: 1rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }
        .auth-tab.active {
          color: var(--accent-primary);
          border-bottom-color: var(--accent-primary);
        }
        .auth-form {
          display: none;
          animation: fadeIn 0.3s ease;
        }
        .auth-form.active {
          display: block;
        }
        .auth-form h2 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-size: 1.75rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .form-group input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(157, 148, 142, 0.1);
        }
        .form-group small {
          display: block;
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }
        .auth-submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--accent-primary), var(--contrast-accent));
          border: none;
          border-radius: 12px;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        .auth-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(157, 148, 142, 0.4);
        }
        .auth-message {
          margin-top: 1rem;
          padding: 0.75rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          display: none;
        }
        .auth-message.show {
          display: block;
        }
        .auth-message.success {
          background: rgba(81, 207, 102, 0.1);
          color: #51cf66;
          border: 1px solid rgba(81, 207, 102, 0.3);
        }
        .auth-message.error {
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border: 1px solid rgba(255, 107, 107, 0.3);
        }
        @media (max-width: 768px) {
          .auth-modal-content {
            padding: 2rem;
            width: 95%;
          }
        }
      `;
      document.head.appendChild(styles);
    }

    // Setup event listeners
    setupModalListeners();
  };

  // Setup modal event listeners
  const setupModalListeners = () => {
    const modal = document.getElementById('authModal');
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.getElementById('closeAuthModal');
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Open modal
    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Sign in button clicked');
        if (typeof window.isLoggedIn === 'function' && window.isLoggedIn()) {
          console.log('User already logged in, redirecting to profile');
          window.location.href = 'profile.html';
        } else {
          console.log('Opening auth modal');
          if (modal) {
            modal.style.display = 'flex';
          }
        }
      });
    }

    // Close modal
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    // Close on outside click
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Tab switching
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (targetTab === 'login') {
          loginForm.classList.add('active');
          registerForm.classList.remove('active');
        } else {
          loginForm.classList.remove('active');
          registerForm.classList.add('active');
        }
      });
    });

    // Login form submit
    loginForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const message = document.getElementById('loginMessage');

      if (typeof window.login !== 'function') {
        message.textContent = 'Authentication system not loaded';
        message.className = 'auth-message show error';
        return;
      }

      const result = window.login(email, password);
      
      message.textContent = result.message;
      message.className = 'auth-message show ' + (result.success ? 'success' : 'error');

      if (result.success) {
        setTimeout(() => {
          modal.style.display = 'none';
          window.location.reload();
        }, 1500);
      }
    });

    // Register form submit
    registerForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const phone = document.getElementById('registerPhone').value;
      const password = document.getElementById('registerPassword').value;
      const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
      const message = document.getElementById('registerMessage');

      if (password !== passwordConfirm) {
        message.textContent = 'Passwords do not match!';
        message.className = 'auth-message show error';
        return;
      }

      if (typeof window.register !== 'function') {
        message.textContent = 'Authentication system not loaded';
        message.className = 'auth-message show error';
        return;
      }

      const result = window.register(name, email, password, phone);
      
      message.textContent = result.message;
      message.className = 'auth-message show ' + (result.success ? 'success' : 'error');

      if (result.success) {
        setTimeout(() => {
          window.login(email, password);
          modal.style.display = 'none';
          window.location.reload();
        }, 1500);
      }
    });
  };

  // Global function to open auth modal
  window.openAuthModal = () => {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.style.display = 'flex';
    } else {
      console.error('Auth modal not found!');
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthModal);
  } else {
    initAuthModal();
  }

  console.log('✅ Auth Modal System loaded');
})();
