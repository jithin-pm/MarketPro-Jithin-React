# MarketPro React

A modern, responsive e-commerce front-end built with React and Vite. MarketPro features a fully componentized home page, product detail view, smooth animations, and a clean design powered by Tailwind CSS.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [React Router DOM v7](https://reactrouter.com/) | Client-side routing |


## Project Structure

```
marketpro-react/
│
├── public/                     # Static assets served as-is
│   └── images/
│       ├── bg/                 # Background images
│       ├── icon/               # Icon images 
│       ├── logo/               # Brand logos
│       └── thumbs/             # Product & UI thumbnail images
│
├── src/
│   ├── main.jsx                # App entry point — mounts React to DOM
│   ├── App.jsx                 # Root component — defines routes
│   ├── index.css               # Global styles & Tailwind imports
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx      # Shared page shell (Header + Footer + Outlet)
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Home page — assembles all home sections
│   │   └── ProductDetails.jsx  # Product detail page
│   │
│   └── components/
│       ├── Header.jsx          # Top navigation bar
│       ├── Footer.jsx          # Site footer
│       ├── Banner.jsx          # Hero banner slider
│       ├── FeatureSection.jsx  # Category feature grid
│       ├── PromotionalBanner.jsx # Promotional strip/banner
│       ├── FlashSales.jsx      # Flash sale countdown section
│       ├── RecommendedProducts.jsx # Personalized product grid
│       ├── HotDeals.jsx        # Hot deals tabbed section
│       ├── ShopByBrands.jsx    # Brand logo slider
│       ├── BestSellers.jsx     # Best-selling products section
│       ├── Newsletter.jsx      # Email subscription section
│       ├── ProductCard.jsx     # Reusable product card component
│       ├── Preloader.jsx       # Page loading animation
│       └── ScrollToTop.jsx     # Scroll-to-top button
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Project dependencies & scripts
```


## Architecture

### Component-Based Design
The UI is broken down into small, focused, reusable components. Each component owns its own markup, logic, and styles — keeping concerns isolated and the codebase easy to extend.

```
App
└── BrowserRouter
    └── Routes
        └── MainLayout          ← Shared shell (Header, Footer, Preloader)
            ├── Home            ← Composes all home section components
            │   ├── Banner
            │   ├── FeatureSection
            │   ├── FlashSales
            │   └── ... (more sections)
            └── ProductDetails  ← Standalone product detail page
```

### Layout Pattern
A single `MainLayout` component wraps all pages using React Router's `<Outlet />`. This ensures the `Header`, `Footer`, `Preloader`, and `ScrollToTop` are rendered consistently across every route without duplication.

### Routing
Routing is handled by **React Router DOM v7** using a declarative `<Routes>` + `<Route>` setup in `App.jsx`. Current routes:

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Main landing page |
| `/product/:id` | `ProductDetails` | Dynamic product detail page |

### Data Flow
Components manage their own local state using React's `useState` and `useEffect` hooks. Product data is defined as static arrays within each component — no external API or global state library is used.

### Styling
Styling uses **Tailwind CSS v4** utility classes directly in JSX. Global base styles and font imports live in `src/index.css`. Animations are handled by **Framer Motion** for entrance effects and transitions, and **Swiper** for carousel/slider interactions.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v16 or newer
- npm (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd marketpro-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

