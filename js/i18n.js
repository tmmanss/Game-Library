// Multi-language support (i18n)
(() => {
  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.store': 'Store',
      'nav.about': 'About',
      'nav.library': 'Library',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.ratings': 'Ratings',
      'nav.platform': 'Platform',
      
      // UI Elements
      'ui.language': 'Language:',
      'ui.theme': 'Theme',
      'ui.signin': 'Sign in',
      
      // Reviews Page
      'page.reviews.title': 'User Reviews - Nitro 5',
      'reviews.title': 'User Reviews',
      'reviews.subtitle': 'See what gamers are saying about Nitro 5',
      'reviews.write': 'Write a Review',
      'reviews.form.name': 'Your Name',
      'reviews.form.game': 'Game',
      'reviews.form.review': 'Your Review',
      'reviews.form.submit': 'Submit Review',
      'reviews.sample1': '"CS2 is amazing! The graphics are insane!"',
      'reviews.sample2': '"RDR2 story mode kept me hooked for hours."',
      'reviews.sample3': '"Detroit offers an incredible narrative experience."',
      
      // Ratings Page
      'page.ratings.title': 'Rate Nitro 5 - Gaming Platform',
      'ratings.title': 'Rate Nitro 5 Platform',
      'ratings.subtitle': 'Share your experience with our gaming platform',
      'ratings.yourRating': 'Your Rating',
      'ratings.noRatings': 'No ratings yet',
      'ratings.breakdown': 'Rating Breakdown',
      
      // News
      'news.title': 'Latest Gaming News',
      'news.item1.title': 'CS2 Major Update Released',
      'news.item1.text': 'New maps, skins, and gameplay improvements are now live!',
      'news.item2.title': 'RDR2 Anniversary Sale',
      'news.item2.text': 'Celebrate with 40% off this weekend only!',
      'news.item3.title': 'New Games Coming Soon',
      'news.item3.text': 'Stay tuned for exciting new titles arriving this month!',
      
      // Platform Page
      'platform.title': 'Platform Info - Nitro 5',
      'platform.rateTitle': 'Rate Nitro 5 Platform',
      'platform.rateSubtitle': 'Share your experience with our gaming platform',
      'platform.clickStar': 'Click a star to rate',
      'platform.aboutTitle': 'About Nitro 5',
      'platform.aboutText': 'Nitro 5 is a modern gaming platform designed for passionate gamers.',
      'platform.readMore': 'Read more',
      'platform.newsTitle': 'Latest News',
      'platform.news1Title': 'CS2 Update Released!',
      'platform.news1Text': 'Check out the new maps and skins added in the latest CS2 update.',
      'platform.news2Title': 'RDR2 Sale',
      'platform.news2Text': 'Red Dead Redemption 2 is now 30% off for a limited time!',
      'platform.news3Title': 'New Features Coming Soon',
      'platform.news3Text': 'Stay tuned for exciting new features including cloud saves and achievements!',
      'platform.loadMore': 'Load more news',
      'platform.reviewsTitle': 'User Reviews',
      'platform.review1Text': '"CS2 is amazing! The graphics are insane!"',
      'platform.review2Text': '"RDR2 story mode kept me hooked for hours."',
      'platform.review3Text': '"Great platform with an amazing game collection!"',
      'platform.loadMoreGames': 'Load more games',
      'platform.getQuote': 'Get Random Quote'
    },
    ru: {
      // Навигация
      'nav.home': 'Главная',
      'nav.store': 'Магазин',
      'nav.about': 'О нас',
      'nav.library': 'Библиотека',
      'nav.gallery': 'Галерея',
      'nav.reviews': 'Отзывы',
      'nav.ratings': 'Рейтинги',
      'nav.platform': 'Платформа',
      
      // UI Элементы
      'ui.language': 'Язык:',
      'ui.theme': 'Тема',
      'ui.signin': 'Войти',
      
      // Страница отзывов
      'page.reviews.title': 'Отзывы пользователей - Nitro 5',
      'reviews.title': 'Отзывы пользователей',
      'reviews.subtitle': 'Узнайте, что геймеры говорят о Nitro 5',
      'reviews.write': 'Написать отзыв',
      'reviews.form.name': 'Ваше имя',
      'reviews.form.game': 'Игра',
      'reviews.form.review': 'Ваш отзыв',
      'reviews.form.submit': 'Отправить отзыв',
      'reviews.sample1': '"CS2 просто потрясающая! Графика невероятная!"',
      'reviews.sample2': '"Сюжетный режим RDR2 держал меня в напряжении часами."',
      'reviews.sample3': '"Detroit предлагает невероятный нарративный опыт."',
      
      // Страница рейтингов
      'page.ratings.title': 'Оцените Nitro 5 - Игровая платформа',
      'ratings.title': 'Оцените платформу Nitro 5',
      'ratings.subtitle': 'Поделитесь своим опытом использования нашей игровой платформы',
      'ratings.yourRating': 'Ваша оценка',
      'ratings.noRatings': 'Пока нет оценок',
      'ratings.breakdown': 'Распределение оценок',
      
      // Новости
      'news.title': 'Последние игровые новости',
      'news.item1.title': 'Выпущено крупное обновление CS2',
      'news.item1.text': 'Новые карты, скины и улучшения геймплея уже доступны!',
      'news.item2.title': 'Юбилейная распродажа RDR2',
      'news.item2.text': 'Празднуйте со скидкой 40% только в эти выходные!',
      'news.item3.title': 'Скоро новые игры',
      'news.item3.text': 'Следите за новыми захватывающими играми в этом месяце!',
      
      // Страница платформы
      'platform.title': 'Информация о платформе - Nitro 5',
      'platform.rateTitle': 'Оцените платформу Nitro 5',
      'platform.rateSubtitle': 'Поделитесь своим опытом использования нашей игровой платформы',
      'platform.clickStar': 'Нажмите на звезду для оценки',
      'platform.aboutTitle': 'О Nitro 5',
      'platform.aboutText': 'Nitro 5 — современная игровая платформа, созданная для увлечённых геймеров.',
      'platform.readMore': 'Читать далее',
      'platform.newsTitle': 'Последние новости',
      'platform.news1Title': 'Выпущено обновление CS2!',
      'platform.news1Text': 'Ознакомьтесь с новыми картами и скинами в последнем обновлении CS2.',
      'platform.news2Title': 'Распродажа RDR2',
      'platform.news2Text': 'Red Dead Redemption 2 теперь со скидкой 30% на ограниченное время!',
      'platform.news3Title': 'Скоро новые функции',
      'platform.news3Text': 'Следите за новыми функциями, включая облачные сохранения и достижения!',
      'platform.loadMore': 'Загрузить ещё новости',
      'platform.reviewsTitle': 'Отзывы пользователей',
      'platform.review1Text': '"CS2 потрясающая! Графика невероятная!"',
      'platform.review2Text': '"Сюжетный режим RDR2 держал меня в напряжении часами."',
      'platform.review3Text': '"Отличная платформа с потрясающей коллекцией игр!"',
      'platform.loadMoreGames': 'Загрузить больше игр',
      'platform.getQuote': 'Получить случайную цитату'
    },
    kk: {
      // Навигация
      'nav.home': 'Басты бет',
      'nav.store': 'Дүкен',
      'nav.about': 'Біз туралы',
      'nav.library': 'Кітапхана',
      'nav.gallery': 'Галерея',
      'nav.reviews': 'Пікірлер',
      'nav.ratings': 'Рейтингтер',
      'nav.platform': 'Платформа',
      'nav.gallery': 'Галерея',
      'nav.reviews': 'Пікірлер',
      'nav.ratings': 'Рейтингтер',
      
      // UI элементтері
      'ui.language': 'Тіл:',
      'ui.theme': 'Тақырып',
      'ui.signin': 'Кіру',
      
      // Пікірлер беті
      'page.reviews.title': 'Пайдаланушы пікірлері - Nitro 5',
      'reviews.title': 'Пайдаланушы пікірлері',
      'reviews.subtitle': 'Геймерлер Nitro 5 туралы не айтады',
      'reviews.write': 'Пікір жазу',
      'reviews.form.name': 'Сіздің атыңыз',
      'reviews.form.game': 'Ойын',
      'reviews.form.review': 'Сіздің пікіріңіз',
      'reviews.form.submit': 'Пікір жіберу',
      'reviews.sample1': '"CS2 керемет! Графика таңқаларлық!"',
      'reviews.sample2': '"RDR2 сюжеттік режимі мені сағаттар бойы қызықтырды."',
      'reviews.sample3': '"Detroit керемет баяндау тәжірибесін ұсынады."',
      
      // Рейтингтер беті
      'page.ratings.title': 'Nitro 5 бағалау - Ойын платформасы',
      'ratings.title': 'Nitro 5 платформасын бағалаңыз',
      'ratings.subtitle': 'Біздің ойын платформасы туралы тәжірибеңізбен бөлісіңіз',
      'ratings.yourRating': 'Сіздің бағаңыз',
      'ratings.noRatings': 'Әзірге бағалар жоқ',
      'ratings.breakdown': 'Бағалардың бөлінуі',
      
      // Жаңалықтар
      'news.title': 'Соңғы ойын жаңалықтары',
      'news.item1.title': 'CS2 үлкен жаңарту шықты',
      'news.item1.text': 'Жаңа карталар, скиндер және ойын жетілдірулері қазір қол жетімді!',
      'news.item2.title': 'RDR2 мерейтой жәрмеңкесі',
      'news.item2.text': 'Тек осы демалыс күндері 40% жеңілдікпен атап өтіңіз!',
      'news.item3.title': 'Жақын арада жаңа ойындар',
      'news.item3.text': 'Осы айда келетін қызықты жаңа ойындарды қадағалаңыз!',
      
      // Платформа беті
      'platform.title': 'Платформа туралы - Nitro 5',
      'platform.rateTitle': 'Nitro 5 платформасын бағалаңыз',
      'platform.rateSubtitle': 'Біздің ойын платформасын пайдалану тәжірибеңізбен бөлісіңіз',
      'platform.clickStar': 'Баға беру үшін жұлдызды басыңыз',
      'platform.aboutTitle': 'Nitro 5 туралы',
      'platform.aboutText': 'Nitro 5 — құмар геймерлер үшін жасалған заманауи ойын платформасы.',
      'platform.readMore': 'Толығырақ оқу',
      'platform.newsTitle': 'Соңғы жаңалықтар',
      'platform.news1Title': 'CS2 жаңарту шықты!',
      'platform.news1Text': 'CS2 соңғы жаңартуындағы жаңа карталар мен скиндерді көріңіз.',
      'platform.news2Title': 'RDR2 жәрмеңкесі',
      'platform.news2Text': 'Red Dead Redemption 2 қазір шектеулі уақытта 30% жеңілдікпен!',
      'platform.news3Title': 'Жақында жаңа мүмкіндіктер',
      'platform.news3Text': 'Бұлтты сақтау және жетістіктерді қоса алғанда, жаңа мүмкіндіктерді қадағалаңыз!',
      'platform.loadMore': 'Көбірек жаңалықтарды жүктеу',
      'platform.reviewsTitle': 'Пайдаланушы пікірлері',
      'platform.review1Text': '"CS2 керемет! Графика таңқаларлық!"',
      'platform.review2Text': '"RDR2 сюжеттік режимі мені сағаттар бойы қызықтырды."',
      'platform.review3Text': '"Ойындардың керемет жинағы бар тамаша платформа!"',
      'platform.loadMoreGames': 'Көбірек ойындарды жүктеу',
      'platform.getQuote': 'Кездейсоқ дәйексөз алу'
    }
  };

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.en;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update page title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      if (dict[key]) titleEl.textContent = dict[key];
    }

    // Update document language
    document.documentElement.setAttribute('lang', lang);
    
    // Save preference
    localStorage.setItem('nitro5_language', lang);
    
    // Update select value
    const langSelect = document.getElementById('langSelect');
    if (langSelect && langSelect.value !== lang) {
      langSelect.value = lang;
    }
  };

  // Initialize language on page load
  const savedLang = localStorage.getItem('nitro5_language');
  const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'en');
  
  // Apply immediately
  applyLanguage(initialLang);

  // Setup event listener
  document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = initialLang;
      langSelect.addEventListener('change', (e) => {
        applyLanguage(e.target.value);
      });
    }
  });

  // Export for use in other scripts
  window.i18n = { applyLanguage, translations };
})();