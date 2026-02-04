# CareerLink: The Nexus Master Guide
**University of Bedfordshire | CIS047-3 Agile Project Management | Team Nexus**

![Project Status](https://img.shields.io/badge/Status-Development-blue) ![Methodology](https://img.shields.io/badge/Methodology-Scrumban-orange) ![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🧐 1. Project Summary (What, How, When, Why)

### WHAT is CareerLink?
CareerLink is a **minimalist, feedback-first job portal** designed specifically for students and early-career seekers. 
- It removes the social media noise found on other sites.
- It provides a **One-Click Apply** system based on pre-vetted user profiles.
- It ensures employers provide mandatory feedback on every application.

### HOW do we build it?
We use the **Scrumban Methodology**, which gives us the discipline of Scrum and the speed of Kanban.
- **Workflow**: We use a Kanban board with **WIP limits** to ensure we finish what we start.
- **Lenses**: Every team member looks at the code through a specific Role Lens (Quality, Risk, etc.).
- **Tools**: Google Chat for daily sync, Google Meet for weekly stand-ups, and React/Node.js for the build.

### WHEN is it delivered? (The Roadmap)
- **Weeks 1-3 (Foundation)**: Setup, planning, and requirements. (Completed)
- **Weeks 4-6 (Core)**: Authentication, Job Feed, and Seeker Profile Builder. **(Current Phase)**
- **Weeks 7-8 (Advanced)**: One-Click application logic and Employer Dashboards.
- **Week 9-10 (Review)**: Final testing, bug fixing, and academic submission.

### WHY are we building it?
- **For Users**: To end the frustration of "applying into a void" and provide a distraction-free environment.
- **For the Assessment**: To demonstrate mastery of Agile roles (PM, Quality, Risk, etc.) in a real software lifecycle.

---

## 👥 2. Team Nexus (Agile Lenses)

| Name | Role | Core Responsibility |
| :--- | :--- | :--- |
| **Nihariks Shakya** | Product Owner / Manager | Feature vision, prioritization, stakeholder alignment. |
| **Sayub Shakya** | Scheduling Manager | Flow management, meeting planning, Kanban synchronization. |
| **Aayush Man Shakya** | Start-up Manager | Problem definition, user personas, tech configuration. |
| **DipeshRaj Shrestha** | Quality Manager | Acceptance criteria, testing, code review standards. |
| **Amogh Shakya** | Risk Manager | Threat identification, mitigation planning, safety audits. |

---

## ⚙️ 3. Development Workflow (Scrumban)

### The Kanban Board
- **Backlog**: Future ideas and requirements.
- **Ready**: Priority tasks for the current week.
- **In Progress**: Active work (Limit: 1-2 tasks per person).
- **Quality Review**: Code waiting for QA verification.
- **Done**: Fully tested and merged.

### Git & Branching Strategy
1. **Never push to `main`**: All features must start in a `feature/name` branch.
2. **Pull Requests (PR)**: Merging requires a review from the **Quality Manager** or **PM**.
3. **Daily Progress**: Use **Google Chat** for quick updates and pair programming requests.

### Definition of Done (DoD)
A task is NOT finished until:
- [ ] It meets the criteria in `REQUIREMENTS_JOB_SEEKER.md`.
- [ ] No console errors or UI bugs exist.
- [ ] It has been reviewed through our specialized "Lenses."
- [ ] It is merged into the `main` branch.

---

## 🤝 4. Collaboration & Communication
- **Sunday Stand-up**: Be on time at **9:00 PM** for the Google Meet sessions.
- **Google Chat**: Use our Nexus group (College Email) for day-to-day feedback and sharing ideas.
- **Classroom Sessions**: Use lab time for face-to-face brainstorming and teacher consultation.
- **Internal Demos**: We hold internal "show and tell" sessions to catch bugs early.

---

## 🛠️ 5. Tech Stack & Setup

### Stack
- **Frontend**: React.js (Vite) + Vanilla CSS
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL / Supabase

### Local Installation
1. **Clone**: `git clone [REPO_URL]`
2. **Install**: Run `npm install` in both `/client` and `/server`.
3. **Environment**: Setup `.env` files based on `.env.example`.
4. **Run**: Use `npm run dev` or the provided `run.sh` script.

---
**One Project. One Team. One Nexus.**
