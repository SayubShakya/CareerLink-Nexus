# Frontend Folder Structure

This document explains the organization of the `client/src` folder.

## 📁 Folder Structure

```
src/
├── assets/              # Static files (images, fonts, icons)
│   ├── images/         # PNG, JPG, SVG images
│   ├── icons/          # Icon files
│   └── fonts/          # Custom fonts (if any)
│
├── components/          # Reusable React components
│   ├── common/         # Generic components (Button, Input, Card, etc.)
│   └── layout/         # Layout components (Navbar, Footer, Sidebar)
│
├── pages/              # Page components (one per route)
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── Profile.jsx
│   └── ...
│
├── services/           # API calls and external services
│   ├── api.js          # Axios instance configuration
│   ├── jobService.js   # Job-related API calls
│   └── authService.js  # Authentication API calls
│
├── hooks/              # Custom React hooks
│   ├── useAuth.js
│   ├── useFetch.js
│   └── ...
│
├── utils/              # Helper functions
│   ├── formatDate.js
│   ├── validation.js
│   └── ...
│
├── constants/          # App-wide constants
│   ├── routes.js       # Route paths
│   ├── apiEndpoints.js # API endpoint URLs
│   └── config.js       # App configuration
│
├── styles/             # Global styles and themes
│   ├── variables.css   # CSS variables (colors, spacing)
│   └── global.css      # Global CSS rules
│
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Base styles
```

---

## 📖 Naming Conventions

### Files
- **Components:** PascalCase (e.g., `Button.jsx`, `JobCard.jsx`)
- **Pages:** PascalCase (e.g., `Home.jsx`, `JobDetails.jsx`)
- **Services:** camelCase (e.g., `jobService.js`, `authService.js`)
- **Utils:** camelCase (e.g., `formatDate.js`, `validation.js`)
- **Hooks:** camelCase with `use` prefix (e.g., `useAuth.js`, `useFetch.js`)

### Folders
- **Lowercase with hyphens** for multi-word folders (e.g., `job-details/`)
- **Singular names** for utility folders (e.g., `util/`, `hook/`)
- **Plural names** for collections (e.g., `components/`, `pages/`)

---

## 🗂️ Detailed Breakdown

### 1. `assets/`
**Purpose:** Store static files that don't change.

**Structure:**
```
assets/
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── default-avatar.png
├── icons/
│   └── (SVG icons if not using icon library)
└── fonts/
    └── CustomFont.woff2
```

**Usage:**
```jsx
import logo from '@/assets/images/logo.png';
```

---

### 2. `components/`
**Purpose:** Reusable UI components.

#### `components/common/`
Generic, reusable components used across the app.

**Examples:**
- `Button.jsx` - Custom button component
- `Input.jsx` - Form input component
- `Card.jsx` - Card wrapper
- `Modal.jsx` - Modal dialog
- `Spinner.jsx` - Loading spinner

**File structure:**
```
components/common/
├── Button.jsx
├── Input.jsx
├── Card.jsx
└── index.js  (optional: export all components)
```

**Example (`Button.jsx`):**
```jsx
export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
}
```

#### `components/layout/`
Layout-specific components.

**Examples:**
- `Navbar.jsx` - Top navigation bar
- `Footer.jsx` - Page footer
- `Sidebar.jsx` - Side navigation
- `Layout.jsx` - Main layout wrapper

**Example (`Navbar.jsx`):**
```jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CareerLink</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/jobs">Jobs</a></li>
      </ul>
    </nav>
  );
}
```

---

### 3. `pages/`
**Purpose:** One component per route/page.

**Structure:**
```
pages/
├── Home.jsx          # Landing page
├── Jobs.jsx          # Job listings
├── JobDetails.jsx    # Single job view
├── Profile.jsx       # User profile
└── NotFound.jsx      # 404 page
```

**Example (`Home.jsx`):**
```jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to CareerLink</h1>
      </main>
      <Footer />
    </div>
  );
}
```

---

### 4. `services/`
**Purpose:** API calls and external integrations.

**Structure:**
```
services/
├── api.js            # Axios instance
├── jobService.js     # Job-related APIs
├── authService.js    # Auth APIs
└── userService.js    # User APIs
```

**Example (`api.js`):**
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

export default api;
```

**Example (`jobService.js`):**
```javascript
import api from './api';

export const jobService = {
  getAll: () => api.get('/jobs'),
  getById: (id) => api.get(`/jobs/${id}`),
  create: (data) => api.post('/jobs', data),
  update: (id, data) => api.put(`/jobs/${id}`, data),
  delete: (id) => api.delete(`/jobs/${id}`),
};
```

---

### 5. `hooks/`
**Purpose:** Custom React hooks for reusable logic.

**Examples:**
- `useAuth.js` - Authentication state
- `useFetch.js` - Data fetching
- `useForm.js` - Form handling

**Example (`useFetch.js`):**
```javascript
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

---

### 6. `utils/`
**Purpose:** Helper functions (pure JavaScript, no React).

**Examples:**
- `formatDate.js` - Date formatting
- `validation.js` - Form validation
- `storage.js` - LocalStorage helpers

**Example (`formatDate.js`):**
```javascript
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

---

### 7. `constants/`
**Purpose:** App-wide constants and configuration.

**Structure:**
```
constants/
├── routes.js         # Route paths
├── apiEndpoints.js   # API URLs
└── config.js         # App config
```

**Example (`routes.js`):**
```javascript
export const ROUTES = {
  HOME: '/',
  JOBS: '/jobs',
  JOB_DETAILS: '/jobs/:id',
  PROFILE: '/profile',
};
```

---

### 8. `styles/`
**Purpose:** Global styles and CSS variables.

**Structure:**
```
styles/
├── variables.css     # CSS custom properties
└── global.css        # Global styles
```

**Example (`variables.css`):**
```css
:root {
  --color-primary: #1877f2;
  --color-secondary: #42b72a;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}
```

---

## 🔄 Import Aliases (Recommended)

Configure `vite.config.js` for cleaner imports:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
});
```

**Usage:**
```jsx
// Instead of: import Button from '../../components/common/Button';
import Button from '@components/common/Button';
```

---

## 🎯 Best Practices

### 1. **One Component Per File**
```
✅ Button.jsx (exports Button)
❌ Components.jsx (exports Button, Input, Card)
```

### 2. **Index Files for Barrel Exports**
```javascript
// components/common/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';

// Usage:
import { Button, Input, Card } from '@components/common';
```

### 3. **Co-locate Styles (Optional)**
```
components/common/
├── Button.jsx
├── Button.module.css  (if using CSS Modules)
└── index.js
```

### 4. **Separate Business Logic from UI**
```jsx
// ❌ Bad: Logic in component
function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('/api/jobs').then(res => res.json()).then(setJobs);
  }, []);
  return <div>{jobs.map(job => <JobCard key={job.id} job={job} />)}</div>;
}

// ✅ Good: Logic in hook
function JobList() {
  const { jobs, loading } = useFetch('/api/jobs');
  if (loading) return <Spinner />;
  return <div>{jobs.map(job => <JobCard key={job.id} job={job} />)}</div>;
}
```

---

## ✅ Initial Implementation Status

1.  **Folder Structure:** All core directories (`components`, `pages`, `services`, etc.) created.
2.  **Path Aliases:** Configured in `vite.config.js` for cleaner imports using the `@` prefix.
3.  **Sample Components:** Prototype `Button`, `Navbar`, and `Footer` components implemented.
4.  **Routing:** React Router basic setup completed in `App.jsx`.
5.  **API Service:** Axios instance initialized with basic interceptors in `src/services/api.js`.
6.  **Design Tokens:** Initial CSS variables defined in `variables.css`.

---

## 🎯 Next Development Steps

1.  **Build Core Pages:** Finalize the design for the Jobs Listing and Home pages.
2.  **Component Library Expansion:** Build more reusable components like `Input`, `Card`, and `JobDetails`.
3.  **Authentication Flow:** Implement the login/sign-up state management and UI.
4.  **Backend Integration:** Connect existing frontend components to the live Node.js API endpoints.

---

## 🆘 Common Questions

### Q: Where do I put a component used only on one page?
**A:** Create a subfolder in `pages/`:
```
pages/
├── Home/
│   ├── Home.jsx
│   ├── HeroSection.jsx  (only used in Home)
│   └── FeaturedJobs.jsx (only used in Home)
└── Jobs.jsx
```

### Q: Should I use CSS Modules or global CSS?
**A:** Team decision. Options:
- **Global CSS:** Simpler, good for small projects
- **CSS Modules:** Scoped styles, prevents conflicts
- **Tailwind CSS:** Utility-first, fastest development

### Q: Where do I put context providers?
**A:** Create `src/contexts/`:
```
contexts/
├── AuthContext.jsx
└── ThemeContext.jsx
```

---

## 📝 Summary

| Folder | Purpose | Example Files |
|--------|---------|---------------|
| `assets/` | Static files | `logo.png`, `hero-bg.jpg` |
| `components/common/` | Reusable UI | `Button.jsx`, `Input.jsx` |
| `components/layout/` | Layout | `Navbar.jsx`, `Footer.jsx` |
| `pages/` | Routes | `Home.jsx`, `Jobs.jsx` |
| `services/` | API calls | `jobService.js`, `api.js` |
| `hooks/` | Custom hooks | `useFetch.js`, `useAuth.js` |
| `utils/` | Helpers | `formatDate.js`, `validation.js` |
| `constants/` | Config | `routes.js`, `config.js` |
| `styles/` | Global CSS | `variables.css`, `global.css` |

---

**Next Steps:**
1. Review this structure with Team Nexus
2. Decide on CSS strategy (Global/Modules/Tailwind)
3. Set up import aliases in `vite.config.js`
4. Start building components!
