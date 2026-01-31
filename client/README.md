# Frontend Folder Structure

## 📁 Current Structure

```
client/src/
├── assets/              # Static files (images, fonts, icons)
├── components/          # Reusable React components
│   ├── common/         # Generic components (Button, Input, Card)
│   │   ├── Button.jsx
│   │   └── index.js
│   └── layout/         # Layout components (Navbar, Footer)
│       ├── Navbar.jsx
│       └── Footer.jsx
├── pages/              # Page components (one per route)
│   └── Home.jsx
├── services/           # API calls and external services
│   └── api.js          # Axios instance
├── hooks/              # Custom React hooks (empty for now)
├── utils/              # Helper functions
│   └── formatDate.js
├── constants/          # App-wide constants
│   └── routes.js
├── styles/             # Global styles
│   └── variables.css
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Base styles
```

## ✅ What's Been Set Up

1. **Folder Structure** - All directories created
2. **Path Aliases** - Configured in `vite.config.js`
3. **Sample Components** - Button, Navbar, Footer
4. **Routing** - React Router setup in App.jsx
5. **API Service** - Axios instance with interceptors
6. **CSS Variables** - Design system tokens
7. **Utils** - Date formatting helpers

## 🚀 How to Use

### Import with Aliases

```jsx
// Instead of: import Button from '../../components/common/Button';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';
import api from '@/services/api';
```

### Add New Components

```bash
# Create new component
touch src/components/common/Input.jsx

# Export it in index.js
# components/common/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';  // Add this
```

### Add New Pages

```bash
# Create new page
touch src/pages/Jobs.jsx

# Add route in App.jsx
import Jobs from '@/pages/Jobs';
<Route path={ROUTES.JOBS} element={<Jobs />} />
```

## 📖 Full Documentation

See `docs/FRONTEND_STRUCTURE.md` for:
- Detailed folder explanations
- Naming conventions
- Best practices
- Code examples
- Team guidelines

## 🎯 Next Steps

1. Review structure with team
2. Start building actual pages (Jobs, Profile, etc.)
3. Add more reusable components as needed
4. Implement authentication
5. Connect to backend APIs
