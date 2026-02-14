# Job Application Flow & CV Integration Plan

## 1. Overview
This plan defines the end-to-end workflow for a Job Seeker to apply for a job ("Montessori Teacher"), integrating CV management (Storage, Builder) and the Application Modal.

## 2. User User Journey
1. **Dashboard/Navigation**: User sees "CV Storage" and "Build CV" in the navigation.
2. **Find Jobs**: User searches/browses and clicks "Montessori Teacher".
3. **Job Description**: User views details and clicks "Apply Now".
4. **Application Modal**:
    *   **Option A**: Select existing CV (Platform/Uploaded).
    *   **Option B**: Upload new CV file.
    *   **Option C**: Create new CV (Redirect to Builder).
5. **Submission**: User submits application and receives feedback.

## 3. Implementation & Verification Tasks

### Phase 1: Frontend - Navigation & UI (frontend-specialist)
- [ ] **Navbar Verification**: Ensure `JobSeekerLayout` includes links to:
    - `CV Storage` -> `/jobseeker/my-cvs`
    - `Build CV` -> `/jobseeker/cv-builder`
- [ ] **Job Description Page**:
    - Verify `JobDescription.jsx` renders correctly.
    - Verify "Apply Now" button state (Logged In vs Guest).
- [ ] **Application Modal**:
    - Verify 3 options are present.
    - Verify "Create with CV Builder" redirects correctly.
    - Verify Mock Data/API integration for listing CVs.

### Phase 2: Backend/Service Layer (backend-specialist)
- [ ] **CV Service**: Verify `client/src/services/cvService.js` has methods:
    - `getAllCVs()`
    - `uploadCV()`
    - `applyForJob()` (or equivalent mock).

### Phase 3: End-to-End Verification (test-engineer)
- [ ] **Manual Walkthrough**:
    1. Login as Job Seeker.
    2. Click "Find Jobs".
    3. Click "Montessori Teacher".
    4. Click "Apply Now".
    5. Check validation (must select CV).
    6. Select a CV and Submit.
    7. Verify Success Message.

## 4. Current Status
- **Job Description**: Implemented with dynamic layout.
- **Apply Modal**: Implemented with 3 options.
- **Find Jobs**: Navigation fixed.
- **Service**: `cvService` exists but needs verification of `apply` method.

## 5. Next Steps
1. Verify Navbar links in `JobSeekerLayout` / `FindJobs` header.
2. Verify `cvService` capabilities.
3. Perform final code review of the flow.
