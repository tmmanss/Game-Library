# Web Technologies Assignment 4
## Media Queries + Bootstrap Grid

**Team name:** GameMasters  
**Members:** Eraly Zalel, Zhanna, Aliya  
**Group:** SE-2409

---

## Task Documentation

### Task 1: Responsive Typography
**Files modified:** `css/style.css` (lines 308-334)

**Description:** Added 3 media queries for font sizes across different breakpoints:
- Desktop (>992px): Large fonts (h1: 2.8rem, h2: 2.2rem, h3: 1.8rem, p: 1.1rem)
- Tablet (768-992px): Medium fonts (h1: 2.2rem, h2: 1.8rem, h3: 1.5rem, p: 1rem)
- Mobile (<768px): Small fonts (h1: 1.8rem, h2: 1.5rem, h3: 1.3rem, p: 0.9rem)

**Result:** Typography scales smoothly across all device sizes for better readability.

---

### Task 2: Card Group (Custom CSS)
**Files modified:** `css/style.css` (lines 336-371), `index.html` (lines 75-92)

**Description:** Created custom CSS card group without Bootstrap:
- Desktop: 3 cards side by side (33.333% width each)
- Tablet: 2 cards (50% width each)
- Mobile: 1 card stacked (100% width)
- Uses flexbox with media queries for responsive layout

**Result:** Pure CSS responsive card layout that adapts to screen size without Bootstrap dependency.

---

### Task 3: Bootstrap Grid Layout
**Files modified:** `media.html` (lines 40-47, 84-115)

**Description:** Implemented Bootstrap grid system:
- 2-column layout: `col-lg-6 col-md-6 col-sm-12` for update sections
- 3-column layout: `col-lg-4 col-md-6 col-sm-12` for card sections
- Uses `container` class for proper Bootstrap structure

**Result:** Responsive grid layouts that work seamlessly across all screen sizes.

---

### Task 4: Bootstrap Spacing Utilities
**Files modified:** `media.html` (lines 31, 34, 40, 41, 44, 50, 84, 85, 95, 105, 118, 127, 129, 133, 143)

**Description:** Replaced manual spacing with Bootstrap utility classes:
- `my-5`: Margin top and bottom
- `mb-5`: Margin bottom
- `mb-3`: Margin bottom
- `p-3`: Padding all around
- `py-3`: Padding top and bottom

**Result:** Consistent spacing throughout the page using Bootstrap's utility system.

---

### Task 5: Bootstrap Navigation Bar
**Files modified:** `media.html` (lines 12-29)

**Description:** Added functional Bootstrap navbar with:
- 4 navigation links: Home, About, Contact, Categories
- `navbar-toggler` for mobile collapse functionality
- `navbar-expand-lg` for responsive behavior
- `navbar-nav ms-auto` for proper alignment

**Result:** Fully responsive navigation that collapses on small screens.

---

### Task 6: Bootstrap Buttons
**Files modified:** `media.html` (lines 91, 101, 111, 119-123, 137)

**Description:** Implemented Bootstrap button system:
- Various button styles: `btn-primary`, `btn-secondary`, `btn-outline-primary`, `btn-success`
- Button group with `btn-group` class containing 3 buttons
- Proper button sizing with `btn-sm` class

**Result:** Consistent button styling with hover effects and proper grouping.

---

### Task 7: Bootstrap Carousel
**Files modified:** `media.html` (lines 50-81)

**Description:** Created Bootstrap carousel with:
- 9 carousel items with images
- Carousel indicators (buttons for each slide)
- Previous/Next control buttons
- `data-bs-ride="carousel"` for automatic sliding

**Result:** Interactive image carousel with 9+ images and full Bootstrap functionality.

---

### Task 8: Bootstrap Cards
**Files modified:** `media.html` (lines 84-115)

**Description:** Implemented Bootstrap cards:
- 3 cards with `card` class
- Card images with `card-img-top`
- Card body with `card-body`
- Card titles and text content
- Responsive layout using Bootstrap grid

**Result:** Professional card components with images, titles, and descriptions.

---

### Task 9: Responsive Form Design
**Files modified:** `media.html` (lines 127-139)

**Description:** Created responsive form using Bootstrap:
- `form-control` class for input styling
- `form-label` for proper label association
- `form-check` for checkbox styling
- `mb-3` for consistent spacing
- Email input with placeholder text

**Result:** Well-styled, accessible form that works on all device sizes.

---

### Task 10: Accessibility
**Files modified:** `media.html` (throughout)

**Description:** Implemented semantic HTML structure:
- `<nav>` for navigation
- `<button>` for interactive elements
- `<main>` for main content
- `<header>` and `<footer>` for page structure
- Proper alt attributes for images
- Good contrast with Bootstrap's dark theme

**Result:** Accessible website with proper semantic structure and contrast ratios.

---

## New Bootstrap Page
**File added:** `bootstrap-page.html`

**Description:** Added a new fully Bootstrap-based page using grid and form components. The page demonstrates Bootstrap cards in a responsive grid and a subscription form using `form-control`, `input-group`, `form-select`, and `form-check`.

**Navigation:** Unified Bootstrap navbar added across all pages for consistent structure and working links (Home, About, Contact, Categories).

**Files modified:** `index.html` (navbar section), `about.html` (navbar section), `store.html` (navbar section), `gallery.html` (navbar section), `library.html` (navbar section), `media.html` (navbar links)

**Lines updated:** approx. lines 5–40 and footer area in each HTML file

**Result:** All pages now share the same Bootstrap navigation and footer; new page is accessible via the navbar.

---

### Task 11: Deployment
**Files modified:** `media.html` (line 144)

**Description:** Added footer with team information:
- Team name: GameMasters
- Member names: Eraly Zalel, Zhanna, Aliya
- Group information: SE-2409

**Result:** Project is ready for deployment with proper attribution.

---

## Final Section

**Project Status:** ✅ **COMPLETED**

All requirements have been successfully implemented:
- ✅ Responsive typography with 3 breakpoints
- ✅ Custom CSS card group (3/2/1 layout)
- ✅ Bootstrap grid system (2 and 3 columns)
- ✅ Bootstrap spacing utilities
- ✅ Bootstrap navigation bar with 4 links
- ✅ Bootstrap buttons and button group
- ✅ Bootstrap carousel with 9+ images
- ✅ Bootstrap cards with images and content
- ✅ Responsive Bootstrap form
- ✅ Semantic HTML and accessibility features
- ✅ Footer with team information

The project demonstrates proficiency in both custom CSS media queries and Bootstrap's responsive grid system, providing a solid foundation for modern web development.
