# Contributing to CareerLink

## 👋 Welcome Team Nexus!
This document explains our **XP (Extreme Programming)** workflow. Follow these rules to keep our project organized and moving fast.

---

## 📋 The Board (GitHub Projects)
We use a **Kanban Board** to track work.
*   **Backlog:** Future work. Do not touch unless assigned.
*   **Ready / This Week:** Tasks we MUST finish this week. Pick from here.
*   **In Progress:** What you are working on *right now*.
*   **Done:** Work that is coded, tested, and pushed.

### 🏃‍♂️ How to start a task:
1.  Go to the **"This Week"** column.
2.  **Assign yourself** to a card (click your face icon).
3.  Drag the card to **"In Progress"**.
4.  Start coding!

---

## 🌿 Branching Strategy (Git)
Never push directly to `main`.
1.  **Create a branch** for your feature:
    ```bash
    git checkout -b feature/login-page
    ```
    *( naming convention: `feature/name-of-task` )*
2.  **Code & Commit:**
    ```bash
    git add .
    git commit -m "Added login form UI"
    ```
3.  **Push:**
    ```bash
    git push origin feature/login-page
    ```
4.  **Create Pull Request (PR):**
    *   Go to GitHub, click "Compare & pull request".
    *   Ask **DipeshRaj (Quality Manager)** or **Sayub** to review it.
    *   Once approved, merge it to `main`.

---

## ✅ Definition of Done
Before you move a card to **"Done"**, you must check:
- [ ] Code runs locally without crashing.
- [ ] No errors in the browser console.
- [ ] Unused code/comments removed.
- [ ] Pushed to GitHub and merged to `main`.

---

## 🆘 Stuck?
If you are stuck for more than **30 minutes**:
1.  Stop struggling alone.
2.  Ask in the group.
3.  Or ask **Any Team Member** for a "Pair Programming" session.

---
*Happy Coding!*
