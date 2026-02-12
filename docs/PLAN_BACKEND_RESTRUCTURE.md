# Backend Restructuring Plan: CareerLink Nexus

## 1. Objective
Refactor `careerlink-nexus/server` to strictly follow MVC architecture, referencing `pcps2025L5_MAD`, ensuring scalability, maintainability, and production readiness.

## 2. Architecture: MVC (Model-View-Controller)
- **Models (`src/models`)**: Sequelize definitions matching `SCHEMA.md`.
- **Controllers (`src/controllers`)**: Business logic, request/response handling.
- **Routes (`src/routes`)**: API endpoint definitions mapping to controllers.
- **Middleware (`src/middleware`)**: Auth, validation, error handling.
- **Config (`src/config`)**: Database, Swagger, Env variables.
- **Utils (`src/utils`)**: Helper functions (AppError, catchAsync).

## 3. Implementation Steps

### Phase 1: Foundation & cleanup
- [ ] Verify `server.js` / `app.js` entry point separation.
- [ ] Standardize `src/config` (DB, Swagger).
- [ ] ensuring `src/middleware` exists and contains `errorHandler.js`.

### Phase 2: Core MVC Standardization (Iterative)
- [ ] **Roles Module**:
    - [ ] Model: `src/models/Role.js` (Already done, verify standard).
    - [ ] Controller: `src/controllers/roleController.js` (Already done, verify standard).
    - [ ] Route: `src/routes/roleRoutes.js` (Already done, verify standard).

- [ ] **Auth Module (New)**:
    - [ ] Model: `User` (JobSeeker/Employer split or unified?). *Ref: SCHEMA.md uses separate tables + Roles.*
    - [ ] Controller: `authController.js` (Login/Register/Logout).
    - [ ] Route: `authRoutes.js`.
    - [ ] Middleware: `authMiddleware.js` (JWT verification).

- [ ] **Job Seeker Module (New)**:
    - [ ] Model: `JobSeeker` (Profile, Education, Experience).
    - [ ] Controller: `jobSeekerController.js`.
    - [ ] Routes: `jobSeekerRoutes.js`.

### Phase 3: Quality & Security
- [ ] implementations of `AppError` class for consistent error handling.
- [ ] `catchAsync` utility to avoid `try-catch` block clutter in controllers.
- [ ] Security headers (Helmet), Rate limiting (express-rate-limit).

## 4. Reference Standards (@pcps2025L5_MAD)
- Use standard HTTP status codes.
- Return consistent JSON: `{ status: 'success', data: { ... } }` or `{ status: 'error', message: '...' }`.
- Keep logic out of routes.

## 5. Verification
- [ ] Server starts without errors.
- [ ] Swagger Docs updated.
- [ ] Endpoints testable via Postman/Swagger.
