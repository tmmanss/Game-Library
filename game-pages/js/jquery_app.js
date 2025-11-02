$(document).ready(function() {
  console.log("✅ jQuery is ready!");

  // ==== Task 1 — Real-time Search / Filter ====
  $("#searchInput").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $("#gameList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().includes(value));
    });
  });

  // ==== Task 2 — Autocomplete Suggestions ====
const games = [
  "Counter-Strike 2",
  "Detroit: Become Human",
  "Red Dead Redemption 2",
  "The Last of Us",
  "World War Z",
  "Mortal Kombat 1",
  "Valorant",
  "Cyberpunk 2077",
  "GTA VI",
  "Elden Ring",
  "Minecraft",
  "Dota 2",
  "Assassin's Creed Mirage",
  "Call of Duty: Modern Warfare 3",
  "Fortnite",
  "PUBG: Battlegrounds",
  "Overwatch 2",
  "Apex Legends",
  "Battlefield 2042",
  "Hogwarts Legacy",
  "Spider-Man 2",
  "God of War Ragnarok",
  "Baldur’s Gate 3",
  "Ghost of Tsushima",
  "Resident Evil 4 Remake",
  "Starfield",
  "Alan Wake 2"
];
  $("#searchInput").on("input", function() {
    let input = $(this).val().toLowerCase();
    $("#suggestions").empty();
    if (input.length > 0) {
      const filtered = games.filter(g => g.toLowerCase().startsWith(input));
      filtered.forEach(g => $("#suggestions").append(`<li class='suggest-item'>${g}</li>`));
    }
  });
  $(document).on("click", ".suggest-item", function() {
    $("#searchInput").val($(this).text());
    $("#suggestions").empty();
  });

  // ==== Task 3 — Search Highlighting (FAQ) ====
  $("#searchInput").on("input", function() {
    let keyword = $(this).val();
    $(".accordion-panel p").each(function() {
      let text = $(this).text();
      if (keyword.length > 0) {
        let regex = new RegExp(`(${keyword})`, "gi");
        $(this).html(text.replace(regex, "<span class='highlight'>$1</span>"));
      } else {
        $(this).text(text);
      }
    });
  });

  // ==== Task 4 — Scroll Progress Bar ====
  $(window).on("scroll", function() {
    let scroll = $(window).scrollTop();
    let height = $(document).height() - $(window).height();
    let scrolled = (scroll / height) * 100;
    $("#scrollBar").css("width", scrolled + "%");
  });

  // ==== Task 5 — Animated Number Counter ====
  $(".num").each(function() {
    let $this = $(this);
    let val = parseInt($this.attr("data-val"));
    $({count:0}).animate({count:val}, {
      duration: 2000,
      easing: "swing",
      step: function(now) { $this.text(Math.floor(now)); }
    });
  });

  // ==== Task 6 — Loading Spinner on Submit ====
  
  // ==== Task 6 — Loading Spinner on Submit (safe) ====
  const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  $("form").on("submit", function(e) {
    const form = this;
    const $form = $(form);
    const btn = $form.find("button[type='submit']");
    const original = btn.text();
    const emailInputs = $form.find("input[type='email'], input[id*='email' i]");

    // Basic validation using Constraint API + email regex
    const requiredOk = typeof form.checkValidity === "function" ? form.checkValidity() : true;
    const emailOk = emailInputs.toArray().every(el => {
      const v = (el.value || "").trim();
      return v.length > 0 && EMAIL_RE.test(v);
    });

    if (!requiredOk || !emailOk) {
      e.preventDefault();
      showToast((window.i18n && i18n.t && i18n.t('status.error')) || 'Please check the form fields.', 'error');
      return;
    }

    // valid -- let enhancements.js handle async submit.
    // Just add a small spinner effect while enhancements.js works.
    btn.prop("disabled", true).html('<span class="spinner"></span> Please wait…');

    // We do NOT show success toast here; enhancements.js will set status on completion.
    setTimeout(() => {
      btn.prop("disabled", false).text(original);
    }, 1200);
  });
// ==== Task 7 — Notification Toast ====
  
  function showToast(msg, type) {
    $("#toast").remove();
    const bg = type === 'error' ? '#d03333' : '#16a34a';
    const el = $(`<div id='toast' style="
      position:fixed; top:16px; right:16px; z-index:20000;
      background:${bg}; color:#fff; padding:10px 14px; border-radius:10px;
      box-shadow:0 6px 20px rgba(0,0,0,.25); font-weight:600; font-size:14px;
    ">${msg}</div>`);
    $("body").append(el);
    el.fadeIn(250).delay(1500).fadeOut(600, function() { $(this).remove(); });
  }
</div>`);
    $("#toast").fadeIn(400).delay(1500).fadeOut(600, function() { $(this).remove(); });
  }

  // ==== Task 8 — Copy to Clipboard Button ====
  $("#copyBtn").on("click", function() {
    let text = $("#copyText").text();
    navigator.clipboard.writeText(text);
    $(this).text("✔ Copied!");
    setTimeout(() => $(this).text("Copy"), 1500);
    showToast("Copied to clipboard!");
  });

  // ==== Task 9 — Lazy Image Loading ====
  $(window).on("scroll", function() {
    $(".lazy").each(function() {
      let top = $(this).offset().top;
      let winTop = $(window).scrollTop();
      let winHeight = $(window).height();
      if (top < winTop + winHeight) {
        let src = $(this).attr("data-src");
        $(this).attr("src", src).removeClass("lazy");
      }
    });
  });
});
