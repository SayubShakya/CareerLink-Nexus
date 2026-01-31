# Backend Folder Structure

This document explains the organization of the `server/src` folder, following the **Service-Controller-Route** pattern for scalability.

## 📁 Proposed Folder Structure

```
server/
├── src/
│   ├── config/             # Configuration (DB, Environment variables)
│   │   ├── db.js          # Database connection pool
│   │   └── index.js       # Central config loader
│   │
│   ├── controllers/        # Request Handlers (Req/Res logic)
│   │   └── healthController.js
│   │
│   ├── routes/             # API Route Definitions
│   │   ├── index.js       # Main router (aggregates all routes)
│   │   └── healthRoutes.js
│   │
│   ├── middleware/         # Express Middleware
│   │   ├── errorHandler.js # Global error handling
│   │   └── corsOptions.js  # CORS configuration
│   │
│   ├── services/           # Business Logic & DB Queries (Reusable)
│   │   └── ...
│   │
│   ├── utils/              # Helper functions
│   │   └── AppError.js     # Custom error class
│   │
│   └── app.js              # Express App Setup (Middleware, Routes)
│
├── server.js               # Entry Point (Server startup)
├── .env                    # Secrets (Local only)
└── package.json
```

## 📖 Key Principles

1.  **Separation of Concerns:**
    - **Routes:** Only define URLs and HTTP methods.
    - **Controllers:** Handle HTTP requests (req/res), validation, and send responses.
    - **Services:** Handle business logic and database interactions. (Controller asks Service for data).

2.  **Clean Entry Point:** `server.js` should only care about starting the server (Port, Error handling for valid ports). `src/app.js` handles the Express configuration.

3.  **Centralized Config:** `src/config/db.js` manages the database connection, keeping credentials in one place.

## 🔄 Implementation Plan

1.  **Create Folders:** `mkdir -p src/{config,controllers,middleware,routes,services,utils}`.
2.  **Move Database Config:** Move `db.js` to `src/config/db.js`.
3.  **Create App Wrapper:** Move Express setup from `server.js` to `src/app.js`.
4.  **Extract Routes:** Move `/api/health` to `src/routes/healthRoutes.js`.
5.  **Create Controller:** Move logic to `src/controllers/healthController.js`.
6.  **Update Entry Point:** `server.js` imports `app`.

---

**Status:** ⏳ Proposal Ready
