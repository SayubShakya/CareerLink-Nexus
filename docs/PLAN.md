# PLAN: Elite CV Builder Implementation

## 🎯 Goal
Create a professional, real-time CV Builder with a 3-pane interface: Sidebar Nav, Input Form, and Live Preview.

## 🏗️ Technical Architecture
- **Global State**: A comprehensive `cvData` object in the Parent component.
- **Components**:
    - `CVNavigation`: Left-side vertical section tracker.
    - `CVFormSection`: Dynamic input renderer for About, Experience, etc.
    - `CVPreview`: High-fidelity SVG/HTML rendering engine for templates.
    - `TemplateGallery`: Top-bar selection with Premium badges.

## 🎨 Layout Specifications
- **Left (60px - 200px)**: Icon-based or Slim sidebar with active state tracking.
- **Middle (1fr)**: Large, comfortable input fields with "Continue to Next" flow.
- **Right (40% - 45%)**: Fixed-position A4-style container with real-time CSS/State binding.

## 📝 Task Breakdown

### Phase 1: Routing & Entry
- **File**: `client/src/routes/routes.js` & `JobseekerNavbar.jsx`
- **Actions**:
    - [ ] Create `CV_BUILDER` route.
    - [ ] Link "Create CV" in the Jobseeker Navbar.

### Phase 2: Core CV Builder Shell
- **File**: `client/src/pages/cv-builder/CVBuilder.jsx`
- **Actions**:
    - [ ] Implement the 3-pane grid.
    - [ ] Define the `cvData` initial state (About, Education[], Exp[], etc.).
    - [ ] Create the "Template Selection" top bar.

### Phase 3: Template Engine
- **Actions**:
    - [ ] Develop 5 free base styles (Minimal, Professional, Creative, Modern, Executive).
    - [ ] Define CSS-variable driven color themes.

## ✅ Verification Criteria
1. Real-time update: Typing in "Middle" reflects immediately in "Right".
2. Navigation: Clicking "Experience" on left scrolls middle to that section.
3. Responsive: Usable on desktops and tablets.
4. Professional: Matches the visual fidelity of SajiloCV.
