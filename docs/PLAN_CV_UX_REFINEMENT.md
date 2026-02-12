# PLAN: CV Builder UX Refinement & Premium Polish

## 🎯 Goal
Transform the CV Builder into a premium, professional tool by enabling personalized renaming and implementing high-end UI/UX improvements (Live Preview, Smooth Editing, and intuitive navigation).

## 🛠 Tech Stack
- **Frontend**: React, Lucide Icons, HSL Color Palette, Framer Motion (for smooth transitions).
- **Backend**: Express/Node.js, Sequelize (PostgreSQL).

## 📋 Phase 1: Foundation (Backend & State)
1. **API Update**: Implement `updateCV` in `cvController.js` and add the `PATCH /api/cvs/:id` route.
2. **Title State**: Bind the CV title in the builder to a persistent field that allows immediate renaming.
3. **Auto-Save Mechanism**: (Optional/Bonus) Implement a debounce save to ensure no data is lost during the "high-quality" editing process.

## 📋 Phase 2: Premium UI Transformation
1. **Typography & Spacing**: Switch to a curated font (e.g., 'Inter' or 'Outfit') and use consistent padding/margins based on a 4px grid.
2. **HSL Color System**: Use harmonious HSL colors for subtle borders and backgrounds (avoiding harsh greys).
3. **Smooth Refinements**:
   - Add hover micro-animations to form fields.
   - Use `framer-motion` for section transitions.
   - Improve the "Right Side Preview" to match a professional A4 layout with high-end formatting.

## 📋 Phase 3: Actionable UX Improvements
1. **Editable Title**: Transform the "Untitled CV" placeholder into a focal editable heading.
2. **Drag-and-Drop Hinting**: (Visual implementation) Make lists (Skills, Experience) look like they are rearrangeable even if simple CRUD is used for now.
3. **Live Sync**: Ensure typing in ANY field creates Zero-Latency updates in the preview.
4. **Action Bar Refinement**: Floating bottom bar or sticky top bar with clear "Save", "Download", and "Preview" actions.

## ✅ Verification Criteria
- [ ] Users can click and rename the CV title directly in the builder.
- [ ] The updated title is reflected in the dashboard immediately after saving.
- [ ] UI feels "Premium" with smooth transitions and professional spacing.
- [ ] Save/Download actions are prominently visible and intuitive.
- [ ] Live preview reflects all 9+ sections with professional styling.
