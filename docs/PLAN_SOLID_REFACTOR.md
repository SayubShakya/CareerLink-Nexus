# PLAN: SOLID Refactoring — API Integration Layer

> **Goal:** Apply Single Responsibility Principle (SRP) and SOLID design to separate API integration into dedicated service layers on both client and server.

---

## Problem Analysis

### Current Violations

**Client Side:**
- Page components (`Login.jsx`, `JobseekerSignup.jsx`, `EmployerSignup.jsx`) directly call `api.post(...)` inside `handleSubmit`
- API URL paths, request body mapping, and localStorage logic are mixed with UI code
- Adding a new auth endpoint means editing a page component (violates **Open/Closed Principle**)

**Server Side:**
- Controllers directly query models (`JobSeeker.findOne(...)`, `Role.findOne(...)`)
- Business logic (password validation, role lookup) lives inside controllers
- `authController.js` has 3 responsibilities: HTTP handling + business logic + data access (violates **SRP**)

---

## Target Architecture

### Client — Before vs After

```
BEFORE:                          AFTER:
─────────────────                ─────────────────
Login.jsx                        Login.jsx
  └─ api.post('/auth/login')       └─ authService.login(email, pw)
  └─ localStorage.setItem(...)

JobseekerSignup.jsx              services/
  └─ api.post('/auth/register')    ├── api.js           (Axios instance — unchanged)
  └─ field mapping logic           └── authService.js   (All auth API calls + token storage)
```

### Server — Before vs After

```
BEFORE:                          AFTER:
─────────────────                ─────────────────
authController.js                authController.js
  └─ Role.findOne(...)             └─ calls authService methods
  └─ JobSeeker.create(...)         └─ sends HTTP response only
  └─ bcrypt compare
  └─ JWT + response              services/
                                   └─ authService.js
                                       └─ findUserByEmail()
                                       └─ createJobSeeker()
                                       └─ createEmployer()
                                       └─ validatePassword()
```

---

## Task Breakdown

### Phase 1: Server — Extract Service Layer (4 files)

| # | Task | File | Action |
|---|------|------|--------|
| 1.1 | Create `authService.js` | `server/src/services/authService.js` | **NEW** — Extract all business logic from authController |
| 1.2 | Refactor `authController.js` | `server/src/controllers/authController.js` | **EDIT** — Keep only req/res handling, delegate to service |
| 1.3 | Create `roleService.js` | `server/src/services/roleService.js` | **NEW** — Extract role CRUD logic |
| 1.4 | Refactor `roleController.js` | `server/src/controllers/roleController.js` | **EDIT** — Delegate to roleService |

### Phase 2: Client — Create Service Layer (2 files)

| # | Task | File | Action |
|---|------|------|--------|
| 2.1 | Create `authService.js` | `client/src/services/authService.js` | **NEW** — Centralize all auth API calls + token management |
| 2.2 | Refactor `Login.jsx` | `client/src/pages/login/Login.jsx` | **EDIT** — Replace inline API calls with service |
| 2.3 | Refactor `JobseekerSignup.jsx` | `client/src/pages/signup/JobseekerSignup.jsx` | **EDIT** — Same |
| 2.4 | Refactor `EmployerSignup.jsx` | `client/src/pages/signup/EmployerSignup.jsx` | **EDIT** — Same |

### Phase 3: Verification

| # | Task |
|---|------|
| 3.1 | Test all 3 endpoints via browser (register + login) |
| 3.2 | Verify no direct model access in controllers |
| 3.3 | Verify no direct `api.post()` in page components |

---

## Detailed Design

### Server: `services/authService.js`

```javascript
// Single Responsibility: Business logic ONLY — no req/res objects
class AuthService {
  async findUserByEmail(email)         // Checks both tables
  async createJobSeeker(data)          // Role lookup + creation
  async createEmployer(data)           // Role lookup + creation
  async validatePassword(user, password) // bcrypt compare
}
```

### Server: `services/roleService.js`

```javascript
// Single Responsibility: Role CRUD business logic
class RoleService {
  async findAll()
  async findById(id)
  async create(data)
  async update(id, data)
  async delete(id)
}
```

### Client: `services/authService.js`

```javascript
// Single Responsibility: All auth API calls + token management
const authService = {
  login(email, password)          // POST /auth/login + store token
  registerJobSeeker(data)         // POST /auth/register/job-seeker + store token
  registerEmployer(data)          // POST /auth/register/employer + store token
  logout()                        // Clear localStorage
  getToken()                      // Read token
  getUser()                       // Read user
  isAuthenticated()               // Check if logged in
}
```

---

## SOLID Principles Applied

| Principle | How |
|-----------|-----|
| **S** — Single Responsibility | Each layer has ONE job: Controller=HTTP, Service=Logic, Model=Data |
| **O** — Open/Closed | Adding a new auth method = new service method, page just calls it |
| **L** — Liskov Substitution | Services use consistent return types |
| **I** — Interface Segregation | `authService` only exposes auth methods, not generic API |
| **D** — Dependency Inversion | Controllers depend on service abstraction, not model details |

---

## Files Changed Summary

| Type | File | Action |
|------|------|--------|
| 🆕 | `server/src/services/authService.js` | New |
| 🆕 | `server/src/services/roleService.js` | New |
| ✏️ | `server/src/controllers/authController.js` | Refactor |
| ✏️ | `server/src/controllers/roleController.js` | Refactor |
| 🆕 | `client/src/services/authService.js` | New |
| ✏️ | `client/src/pages/login/Login.jsx` | Refactor |
| ✏️ | `client/src/pages/signup/JobseekerSignup.jsx` | Refactor |
| ✏️ | `client/src/pages/signup/EmployerSignup.jsx` | Refactor |

**Risk:** LOW — This is a pure refactoring. No new features, no DB changes. Same API contracts.
