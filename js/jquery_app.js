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
  $("form").on("submit", function(e) {
    e.preventDefault();
    let btn = $(this).find("button[type='submit']");
    let original = btn.text();
    btn.prop("disabled", true).html('<span class="spinner"></span> Please wait…');
    setTimeout(() => {
      btn.prop("disabled", false).text(original);
      showToast("Form submitted successfully!");
    }, 1500);
  });

  // ==== Task 7 — Notification Toast ====
  function showToast(msg) {
    $("#toast").remove();
    $("body").append(`<div id='toast'>${msg}</div>`);
    $("#toast").fadeIn(400).delay(1500).fadeOut(600, function() { $(this).remove(); });
  }

  // ==== Task 8 — Copy to Clipboard Button ====
  // Копирование контактной информации для всех кнопок .copy-btn
  $(document).on('click', '.copy-btn', function () {
    const $btn  = $(this);
    const $root = $btn.closest('.contact-item');                 // текущая строка контакта
    const text  = ($root.find('.copy-text').text() || '').trim(); // что копируем

    if (!text) return;

    const original = $btn.html(); // запомним иконку/надпись

    const done = () => {
      $btn.addClass('copied').text('Copied');                    // показать "Copied"
      if (typeof showToast === 'function') showToast('Copied to clipboard!');
      setTimeout(() => { $btn.removeClass('copied').html(original); }, 1200);
    };

    // Clipboard API + фолбэк
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        const ta = $('<textarea>').val(text).appendTo('body');
        ta[0].select(); document.execCommand('copy'); ta.remove(); done();
      });
    } else {
      const ta = $('<textarea>').val(text).appendTo('body');
      ta[0].select(); document.execCommand('copy'); ta.remove(); done();
    }
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
