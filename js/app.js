document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    const fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "medium" });
    const tick = () => (clockEl.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 1000);
  }

  const palette = ["#1e1f29", "#2c2f48", "#211F30", "#32384D", "#2c3142", "#1b1c27"];
  let bgIdx = 0;
  const bgBtn = document.getElementById("bgBtn");
  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      bgIdx = (bgIdx + 1) % palette.length;
      document.documentElement.style.background = palette[bgIdx];
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
        panel.style.maxHeight = panel.scrollHeight + "px";
        requestAnimationFrame(() => {
          panel.classList.remove("open");
          panel.style.maxHeight = "0";
        });
      }
    });
  });

  const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  function setError(name, msg, scope) {
    const root = scope || document;
    const el = root.querySelector(`.error[data-for="${name}"]`);
    if (el) el.textContent = msg || "";
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

  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;
      alert("Form is valid! ✔");
      form.reset();
      const modal = form.closest(".overlay");
      if (modal) {
        modal.hidden = true;
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });
});
