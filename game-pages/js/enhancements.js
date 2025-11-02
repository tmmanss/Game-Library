(() => {
  // Scroll progress
  const bar = document.createElement('div');
  bar.className = 'progressbar';
  const badge = document.createElement('div');
  badge.className = 'progressbadge';
  badge.setAttribute('aria-hidden','true');
  const mount = () => { document.body.append(bar, badge); update(); };
  let ticking = false;
  function update(){
    const el = document.documentElement;
    const max = Math.max(0, el.scrollHeight - el.clientHeight);
    const pct = max ? (el.scrollTop / max) * 100 : 0;
    bar.style.backgroundSize = pct.toFixed(2) + '% 100%';
    badge.textContent = Math.round(pct) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking){ requestAnimationFrame(update); ticking=true; }}, {passive:true});
  window.addEventListener('resize', () => requestAnimationFrame(update));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();

  // Validation
  const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function errBox(input){
    const id = input.id || input.name || '';
    const form = input.closest('form');
    if (!form) return null;
    let el = id && form.querySelector(`[data-for="${id}"]`);
    if (!el){
      el = document.createElement('div');
      el.className = 'field-error';
      if (id) el.setAttribute('data-for', id);
      input.insertAdjacentElement('afterend', el);
    }
    return el;
  }
  function setError(input, msg){
    const box = errBox(input);
    if (box) box.textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid','true'); else input.removeAttribute('aria-invalid');
  }

  function requireDefaultRules(f){
    // Enforce sensible defaults if not provided
    f.querySelectorAll('input,textarea,select').forEach(el => {
      const id = el.id || '';
      // Always require email field
      if (el.type === 'email' || /email/i.test(id)) { el.required = true; el.setAttribute('required',''); }
      // Common fields
      if (/name/i.test(id) && el.tagName === 'INPUT') { el.required = true; el.setAttribute('required',''); }
      if (/message|msg|text/i.test(id) && el.tagName === 'TEXTAREA'){ el.required = true; el.setAttribute('required',''); if (!el.minLength) el.minLength = 5; }
      if (/agree|consent/i.test(id) && el.type === 'checkbox') { el.required = true; el.setAttribute('required',''); }
    });
  }

  function validateField(el){
    const val = (el.value || '').trim();
    if (el.type === 'checkbox'){
      if (el.required && !el.checked){ setError(el,'Подтвердите это поле.'); return false; }
      setError(el,''); return true;
    }
    if ((el.type === 'email' || /email/i.test(el.id)) && !val){ setError(el,'Это поле обязательно.'); return false; }
    if (el.required && !val){ setError(el,'Это поле обязательно.'); return false; }
    if (val && (el.type === 'email' || /email/i.test(el.id)) && !EMAIL_RE.test(val)){ setError(el,'Введите корректный e-mail.'); return false; }
    if (el.minLength > 0 && val.length < el.minLength){ setError(el,`Минимум ${el.minLength} символов.`); return false; }
    setError(el,''); return true;
  }

  function validateForm(form){
    requireDefaultRules(form);
    let ok = true;
    form.querySelectorAll('input,textarea,select').forEach(el => { ok = validateField(el) && ok; });
    return ok;
  }

  function statusBox(form){
    let box = form.querySelector('[data-form-status]');
    if (!box){
      box = document.createElement('div');
      box.className = 'form-status'; box.setAttribute('data-form-status','');
      box.setAttribute('role','status'); box.setAttribute('aria-live','polite');
      form.appendChild(box);
    }
    return box;
  }

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;

    const looksLike = form.matches('[data-validate]') || form.querySelector('input[type="email"]');
    if (!looksLike) return;

    e.preventDefault();
    const box = statusBox(form); box.textContent = ''; box.classList.remove('is-error');

    if (form.classList.contains('is-sending')) return;

    if (!validateForm(form)){
      if (e && typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
      box.textContent = (window.i18n && i18n.t && i18n.t('status.error')) || 'Проверьте поля формы.';
      box.classList.add('is-error'); return;
    }

    const action = form.getAttribute('action') || form.dataset.endpoint || '';
    const isReal = /^https?:/i.test(action) || action.startsWith('/api/');
    const btn = form.querySelector('[type="submit"]');
    form.classList.add('is-sending'); if (btn) btn.setAttribute('disabled','');

    const data = Object.fromEntries(new FormData(form).entries());
    const done = (ok, msg) => {
      form.classList.remove('is-sending'); if (btn) btn.removeAttribute('disabled');
      if (ok){ box.textContent = msg || 'Отправлено! Спасибо.'; box.classList.remove('is-error'); form.reset(); }
      else { box.textContent = msg || 'Не удалось отправить. Попробуйте позже.'; box.classList.add('is-error'); }
    };

    if (!isReal){ done(true, 'Данные валидны (демо).'); return; }

    fetch(action, {
      method: (form.getAttribute('method') || 'POST').toUpperCase(),
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(r => {
      if (!r.ok) throw new Error('HTTP '+r.status);
      return r.json().catch(() => ({}));
    }).then(() => done(true)).catch(err => done(false, 'Ошибка сервера: ' + (err && err.message ? err.message : 'неизвестно')));
  });

  document.addEventListener('blur', (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const f = t.closest('form'); if (!f) return;
    if (t.matches('input,textarea,select')) validateField(t);
  }, true);
})();