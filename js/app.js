document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    const fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "medium" });
    const tick = () => (clockEl.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 1000);
  }

  const starsContainer = document.getElementById("stars");
  const rateMsg = document.getElementById("rateMsg");
  if (starsContainer && rateMsg) {
    const stars = starsContainer.querySelectorAll(".star");
    let currentRating = 0;
    
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        currentRating = index + 1;
        stars.forEach((s, i) => {
          if (i < currentRating) {
            s.style.color = "#ffd700";
            s.setAttribute("aria-checked", "true");
          } else {
            s.style.color = "#666";
            s.setAttribute("aria-checked", "false");
          }
        });
        const messages = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
        rateMsg.textContent = `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''} - ${messages[index]}`;
        rateMsg.style.color = "#ffd700";
      });
    });
  }

  const readMoreBtn = document.getElementById("readMoreBtn");
  const aboutMore = document.getElementById("aboutMore");
  if (readMoreBtn && aboutMore) {
    readMoreBtn.addEventListener("click", () => {
      const isHidden = aboutMore.hasAttribute("hidden");
      if (isHidden) {
        aboutMore.removeAttribute("hidden");
        readMoreBtn.textContent = "Read less";
      } else {
        aboutMore.setAttribute("hidden", "true");
        readMoreBtn.textContent = "Read more";
      }
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const body = document.body;
      const isDark = body.classList.contains("light-theme");
      
      if (isDark) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeToggle.textContent = "Light";
      } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeToggle.textContent = "Dark";
      }
    });
  }

  const showTimeBtn = document.getElementById("showTimeBtn");
  const timeBox = document.getElementById("timeBox");
  if (showTimeBtn && timeBox) {
    showTimeBtn.addEventListener("click", () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const dateString = now.toLocaleDateString();
      timeBox.innerHTML = `<strong>Current Time:</strong> ${timeString}<br><strong>Date:</strong> ${dateString}`;
      timeBox.style.backgroundColor = "#2c3142";
      timeBox.style.padding = "10px";
      timeBox.style.borderRadius = "5px";
      timeBox.style.marginTop = "5px";
    });
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const gameGrid = document.querySelector(".game-grid");
      if (gameGrid) {
        const newGames = [
          { title: "Cyberpunk 2077", price: "$59.99", image: "images/cs2.jpg" },
          { title: "Elden Ring", price: "$49.99", image: "images/detroit.jpg" },
          { title: "God of War", price: "$39.99", image: "images/RDR2.jpg" }
        ];
        
        newGames.forEach(game => {
          const gameCard = document.createElement("div");
          gameCard.className = "game-card";
          gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="card-body">
              <h3>${game.title}</h3>
              <p>Price: ${game.price}</p>
              <button>Buy</button>
            </div>
          `;
          gameGrid.appendChild(gameCard);
        });
        
        loadMoreBtn.textContent = "Loaded!";
        loadMoreBtn.disabled = true;
      }
    });
  }

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const selectedLang = langSelect.value;
      const greetings = {
        en: "Welcome to Nitro 5 Gaming Platform!",
        kk: "Nitro 5 Ойын платформасына қош келдіңіз!",
        ru: "Добро пожаловать на игровую платформу Nitro 5!"
      };
      
      const pageTitle = document.querySelector("h1");
      if (pageTitle) {
        pageTitle.textContent = greetings[selectedLang];
      }
    });
  }

  const gameLibrary = {
    games: [
      { id: 1, title: "Counter-Strike 2", price: 19.99, category: "FPS", rating: 4.5 },
      { id: 2, title: "Detroit: Become Human", price: 29.99, category: "Adventure", rating: 4.3 },
      { id: 3, title: "Red Dead Redemption 2", price: 49.99, category: "Action", rating: 4.8 },
      { id: 4, title: "The Last of Us", price: 39.99, category: "Survival", rating: 4.6 }
    ],
    
    filterByCategory: function(category) {
      return this.games.filter(game => game.category === category);
    },
    
    getHighRatedGames: function(minRating = 4.5) {
      return this.games.filter(game => game.rating >= minRating);
    },
    
    updatePrices: function(discount = 0.1) {
      this.games = this.games.map(game => ({
        ...game,
        price: game.price * (1 - discount)
      }));
    },
    
    getTotalValue: function() {
      return this.games.reduce((total, game) => total + game.price, 0);
    }
  };

  const clickSound = document.getElementById("clickSound");
  let audioEnabled = false;
  
  const playSound = (soundFile) => {
    if (clickSound && soundFile && audioEnabled) {
      clickSound.currentTime = 0;
      
      const playPromise = clickSound.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Sound played successfully");
        }).catch(error => {
          console.log("Audio play failed:", error);
        });
      }
    } else if (!audioEnabled) {
      console.log("Audio not yet enabled - user interaction required");
    } else {
      console.log("Audio element not found or no sound file specified");
    }
  };

  const addHoverAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "scale(1.05)";
      element.style.transition = "transform 0.3s ease";
      playSound("images/sounds/minecraft_click.mp3");
    });
    
    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)";
    });
  };

  document.querySelectorAll(".game-card").forEach(card => {
    addHoverAnimation(card);
  });

  const enableAudio = () => {
    if (!audioEnabled && clickSound) {
      audioEnabled = true;
      clickSound.volume = 0.3;
      console.log("🔊 Audio enabled for sound effects");
      
      const audioIndicator = document.createElement("div");
      audioIndicator.textContent = "🔊 Sound enabled!";
      audioIndicator.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      `;
      document.body.appendChild(audioIndicator);
      
      setTimeout(() => {
        if (audioIndicator.parentNode) {
          audioIndicator.parentNode.removeChild(audioIndicator);
        }
      }, 3000);
    }
  };

  document.addEventListener("click", enableAudio, { once: true });
  document.addEventListener("keydown", enableAudio, { once: true });

  const palette = ["#13c219", "#505cc2", "#c52820", "#4d3240", "#d95454", "#b1b73a"];
  let bgIdx = 0;
  let originalBackground = "";
  let originalBackgroundSize = "";
  let originalAnimation = "";

  const storeOriginalStyles = () => {
    originalBackground = document.body.style.background || getComputedStyle(document.body).background;
    originalBackgroundSize = document.body.style.backgroundSize || getComputedStyle(document.body).backgroundSize;
    originalAnimation = document.body.style.animation || getComputedStyle(document.body).animation;
  };

  const resetBackground = () => {
    document.documentElement.style.removeProperty("background");
    document.body.style.removeProperty("background");
    document.body.style.removeProperty("background-size");
    document.body.style.removeProperty("animation");
    document.documentElement.style.removeProperty("--primary-color");
    document.documentElement.style.removeProperty("--secondary-color");
    document.documentElement.style.removeProperty("--gradient-bg");
  };

  const lighten = (hex, p = 0.08) => {
    const n = hex.replace("#", "");
    const num = parseInt(n, 16);
    const r = Math.min(255, ((num >> 16) & 255) + Math.round(255 * p));
    const g = Math.min(255, ((num >> 8) & 255) + Math.round(255 * p));
    const b = Math.min(255, (num & 255) + Math.round(255 * p));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
  };

  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    storeOriginalStyles();
    bgBtn.addEventListener("click", () => {
      bgIdx = (bgIdx + 1) % (palette.length + 1);
      if (bgIdx === 0) {
        resetBackground();
        return;
      }
      const color = palette[bgIdx - 1];
      const secondary = lighten(color, 0.06);

      document.documentElement.style.setProperty("background", color, "important");
      document.body.style.setProperty("background", color, "important");
      document.body.style.setProperty("background-size", "auto", "important");
      document.body.style.setProperty("animation", "none", "important");

      document.documentElement.style.setProperty("--primary-color", color);
      document.documentElement.style.setProperty("--secondary-color", secondary);
      document.documentElement.style.setProperty("--gradient-bg", color);
    });
  }

  const overlay = document.getElementById("modalOverlay");
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");

  const openModal = () => {
    if (!overlay) return;
    overlay.hidden = false;
    overlay.style.display = "grid";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!overlay) return;
    overlay.hidden = true;
    overlay.style.display = "none";
    document.body.style.overflow = "";
  };

  if (openPopup && overlay) openPopup.addEventListener("click", openModal);
  if (closePopup && overlay) closePopup.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && !overlay.hidden) closeModal();
    
    const gameCards = document.querySelectorAll(".game-card");
    const currentFocus = document.activeElement;
    
    if (gameCards.length > 0) {
      let currentIndex = Array.from(gameCards).indexOf(currentFocus);
      
      switch(e.key) {
        case "ArrowRight":
          e.preventDefault();
          currentIndex = (currentIndex + 1) % gameCards.length;
          gameCards[currentIndex].focus();
          break;
        case "ArrowLeft":
          e.preventDefault();
          currentIndex = currentIndex <= 0 ? gameCards.length - 1 : currentIndex - 1;
          gameCards[currentIndex].focus();
          break;
        case "Enter":
          if (currentFocus && currentFocus.classList.contains("game-card")) {
            e.preventDefault();
            const buyButton = currentFocus.querySelector("button");
            if (buyButton) {
              buyButton.click();
              playSound("images/sounds/minecraft_click.mp3");
            }
          }
          break;
      }
    }
  });

  const filterGamesByCategory = (category) => {
    const gameCards = document.querySelectorAll(".game-card");
    let filteredGames;
    
    switch(category) {
      case "all":
        filteredGames = gameLibrary.games;
        break;
      case "fps":
        filteredGames = gameLibrary.filterByCategory("FPS");
        break;
      case "adventure":
        filteredGames = gameLibrary.filterByCategory("Adventure");
        break;
      case "action":
        filteredGames = gameLibrary.filterByCategory("Action");
        break;
      case "survival":
        filteredGames = gameLibrary.filterByCategory("Survival");
        break;
      default:
        filteredGames = gameLibrary.games;
    }
    
    return filteredGames;
  };

  const submitContactForm = async (formData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const handleSuccess = (data) => {
        console.log("Form submitted successfully:", data);
        alert("Thank you for your message! We'll get back to you soon.");
      };
      
      const handleError = (error) => {
        console.error("Form submission failed:", error);
        alert("Sorry, there was an error submitting your message. Please try again.");
      };
      
      handleSuccess(formData);
      
    } catch (error) {
      handleError(error);
    }
  };

  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Submitting...";
      submitBtn.disabled = true;
      
      await submitContactForm(data);
      
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      const modal = form.closest(".overlay");
      if (modal) {
        modal.hidden = true;
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });

  document.querySelectorAll(".accordion-header").forEach((btn) => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      if (!isOpen) {
        panel.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0";
        panel.classList.remove("open");
      }
    });
  });

  const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  function setError(name, msg, scope) {
    const root = scope || document;
    const el = root.querySelector(`.error[data-for="${name}"]`);
    if (el) el.textContent = msg || "";
    el.style.color="white";
  }

  function validateForm(form) {
    let ok = true;
    const requiredInputs = form.querySelectorAll("[required]");
    requiredInputs.forEach((inp) => {
      const name = inp.getAttribute("name") || inp.id;
      setError(name, "", form);
      const val = inp.type === "checkbox" ? inp.checked : (inp.value || "").trim();
      if (!val) {
        setError(name, "This field is required.", form);
        ok = false;
        return;
      }
      if (inp.type === "email" && !emailRE.test(String(inp.value).trim())) {
        setError(name, "Enter a valid email.", form);
        ok = false;
      }
      const min = inp.getAttribute("minlength");
      if (min && String(inp.value).length < Number(min)) {
        setError(name, `Min length is ${min} characters.`, form);
        ok = false;
      }
      const matchSel = inp.getAttribute("data-match");
      if (matchSel) {
        const other = form.querySelector(matchSel);
        if (other && other.value !== inp.value) {
          setError(name, "Values do not match.", form);
          ok = false;
        }
      }
    });
    return ok;
  }

  const quotes = [
    "Gaming is not a crime!",
    "The best games are yet to be played.",
    "In games, we find our true selves.",
    "Press start to begin your adventure.",
    "Game over? Try again!"
  ];
  
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const quoteButtons = document.querySelectorAll("[data-quote]");
  quoteButtons.forEach(button => {
    button.addEventListener("click", () => {
      const quote = generateRandomQuote();
      button.textContent = quote;
      button.style.backgroundColor = "#ff9800";
      playSound("images/sounds/minecraft_click.mp3");
    });
  });

  document.querySelectorAll(".game-card button").forEach(button => {
    button.addEventListener("click", () => {
      playSound("images/sounds/minecraft_click.mp3");
      button.textContent = "Added to Cart!";
      button.style.backgroundColor = "#4CAF50";
      
      setTimeout(() => {
        button.textContent = "Buy";
        button.style.backgroundColor = "";
      }, 2000);
    });
  });

  document.querySelectorAll(".btn-buy").forEach(button => {
    button.addEventListener("click", () => {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
      
      playSound("images/sounds/minecraft_click.mp3");
    });
  });

  console.log("Game Library Object:", gameLibrary);
  console.log("High-rated games:", gameLibrary.getHighRatedGames());
  console.log("Total library value:", gameLibrary.getTotalValue());
  
  window.gameLibrary = gameLibrary;
});
