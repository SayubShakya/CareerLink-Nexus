# PLAN: CareerLink Walking Skeleton

> **Objective:** Initialize the "CareerLink" project repository with a complete MERN stack "Walking Skeleton" structure, ready for immediate execution.

## 1. Project Overview
- **Stack:** MERN (MongoDB (replaced by Postgres per request), Express, React, Node.js)
  - *Note: User requested PostgreSQL specifically.*
- **Goal:** Connect Frontend to Backend via Health Check API.
- **Output:** Running application on Port 3000 (Client) and 5000 (Server).

## 2. Architecture & Structure
```text
/ (Root)
├── client/          # Frontend (Vite + React)
├── server/          # Backend (Express + Node.js)
├── docs/            # Documentation
├── run.sh           # One-click startup script
└── README.md        # Project entry point
```

## 3. Implementation Steps

### Phase 1: Structure & Configuration
- [ ] Create root directories: `/client`, `/server`, `/docs`.
- [ ] Initialize `docs/PLAN.md` (Done).

### Phase 2: Frontend (Client)
- **Agent:** `frontend-specialist`
- [ ] Initialize React app with Vite (JavaScript).
- [ ] Install dependencies: `axios`, `react-router-dom`.
- [ ] **Clean Code:** Remove Vite boilerplates (logos, counters).
- [ ] **Feature:** Create `LandingPage` component ("CareerLink: Job Portal - System Status: Online").
- [ ] **Config:** Set server proxy or CORS handling for communication.
- [ ] **Port:** Ensure app runs on `3000`.

### Phase 3: Backend (Server)
- **Agent:** `backend-specialist`
- [ ] Initialize Node.js Express app.
- [ ] Install dependencies: `express`, `cors`, `dotenv`, `pg`.
- [ ] **API:** Create `GET /api/health` returning `{ status: "OK", timestamp: ... }`.
- [ ] **Database:** Configure `db.js` for PostgreSQL connection (`careerlink` DB).
- [ ] **Security:** Configure CORS to allow `localhost:3000`.
- [ ] **Environment:** Setup `.env` and `.env.example`.

### Phase 4: Database
- **Agent:** `database-architect`
- [ ] Create `init.sql` script to provision the `careerlink` database and initial schema if needed.

### Phase 5: DevOps & Automation
- **Agent:** `devops-engineer`
- [ ] Create `run.sh` to install dependencies and run both services in parallel.
- [ ] Ensure "One-Click" experience.

## 4. Verification Plan
- [ ] **Frontend:** Page loads on `http://localhost:3000` showing "System Status: Online".
- [ ] **Backend:** `http://localhost:5000/api/health` returns 200 OK.
- [x] **Integration:** Frontend successfully fetches data from Backend.
- [x] **Database:** Connection established without errors.

### Phase 6: Backend Reorganization (Current)
- **Agent:** `backend-specialist`
- [ ] Create folder structure (`src/config`, `src/routes`, `src/controllers`, etc.).
- [ ] Refactor `db.js` into `src/config`.
- [ ] Refactor `server.js` into `src/app.js` (App) and `server.js` (Entry).
- [ ] Extract Health API into Route/Controller pattern.
- [ ] Verify standard middleware (CORS, Error Handling).

---

**Status:** ⏳ In Progress (Waiting for Plan Approval)
