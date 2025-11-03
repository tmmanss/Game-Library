(() => {
  const dict = {
    en: {
      'nav.home': 'Home','nav.gallery': 'Gallery','nav.library': 'Library','nav.store': 'Store','nav.about': 'About',
      'form.name': 'Name *','form.email': 'Email *','form.message': 'Message *',
      'btn.submit': 'Send','btn.reset': 'Reset','btn.subscribe': 'Subscribe',
      'status.valid': 'Data is valid (demo).','status.error': 'Check the form fields.',
      'status.sent': 'Sent! Thank you.','status.fail': 'Failed to send. Try later.',
      'ui.language': 'Language:'
    },
    ru: {
      'nav.home': 'Главная','nav.gallery': 'Галерея','nav.library': 'Библиотека','nav.store': 'Магазин','nav.about': 'О нас',
      'form.name': 'Имя *','form.email': 'E-mail *','form.message': 'Сообщение *',
      'btn.submit': 'Отправить','btn.reset': 'Сбросить','btn.subscribe': 'Подписаться',
      'status.valid': 'Данные валидны (демо).','status.error': 'Проверьте поля формы.',
      'status.sent': 'Отправлено! Спасибо.','status.fail': 'Не удалось отправить. Попробуйте позже.',
      'ui.language': 'Язык:'
    },
    kk: {
      'nav.home': 'Басты бет','nav.gallery': 'Галерея','nav.library': 'Кітапхана','nav.store': 'Дүкен','nav.about': 'Біз туралы',
      'form.name': 'Аты-жөні *','form.email': 'E-mail *','form.message': 'Хабарлама *',
      'btn.submit': 'Жіберу','btn.reset': 'Тазалау','btn.subscribe': 'Жазылу',
      'status.valid': 'Деректер дұрыс (демо).','status.error': 'Өрістерді тексеріңіз.',
      'status.sent': 'Жіберілді! Рахмет.','status.fail': 'Жіберу сәтсіз. Кейінірек қайталап көріңіз.',
      'ui.language': 'Тіл:'
    }
  };
  const apply = (lang) => {
    const t = dict[lang] || dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    const sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
  };
  const current = localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2).toLowerCase();
  apply(current === 'ru' ? 'ru' : (current === 'kk' ? 'kk' : 'en'));
  document.addEventListener('change', (e) => {
    const sel = e.target.closest('#langSelect');
    if (!sel) return;
    apply(sel.value);
  });
})();