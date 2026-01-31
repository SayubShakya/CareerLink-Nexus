# CareerLink: Connecting Job Seekers and Employers
**University of Bedfordshire | CIS047-3 Agile Project Management | Team Nexus**

![Project Status](https://img.shields.io/badge/Status-Development-blue) ![Methodology](https://img.shields.io/badge/Methodology-XP-green) ![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📖 About the Project

**CareerLink** is a streamlined job portal designed to solve the "noise" and "ghosting" problems of modern recruitment platforms. Built by **Team Nexus**, this project serves as our final year submission, demonstrating the practical application of **Extreme Programming (XP)** and **Agile Project Management**.

### The Problem
*   **LinkedIn** is too cluttered with social media posts, distracting from the actual job search.
*   **Indeed/Upwork** suffer from "ghosting"—applicants never hear back from employers.
*   **Complexity:** Existing platforms are often too complex for students or first-time job seekers.

### The Solution: CareerLink
*   **Zero Clutter:** A 100% focus on jobs. No social feeds.
*   **Mandatory Feedback:** Employers must update application statuses (e.g., "Reviewing," "Rejected," "Hired").
*   **One-Click Apply:** Simplified profiles allow for instant applications.

---

## 👥 Team Nexus

| Name | Role | Responsibilities |
| :--- | :--- | :--- |
| **Nihariks Shakya** | Product Owner / Manager | Defines features, manages backlog, represents stakeholders. |
| **Sayub Shakya** | Scheduling Manager | Manages timelines, runs stand-ups, unblocks the team. |
| **Aayush Man Shakya** | Start-up Manager | Manages setup, deployment, and initial configuration. |
| **DipeshRaj Shrestha** | Quality Manager | Ensures code quality, manages testing (QA), and reviews PRs. |
| **Amogh Shakya** | Risk Manager | Identifies project risks and ensures mitigation strategies. |

---

## 🛠️ Tech Stack

We utilize a modern MERN-like stack to ensure performance and scalability:

*   **Frontend:** React.js (Vite) + Vanilla CSS / Tailwind (for simplified styling)
*   **Backend:** Node.js + Express.js
*   **Database:** PostgreSQL (Relational integrity for job/application data)
*   **Project Management:** GitHub Projects (Kanban Board)

---

## 🎯 MoSCoW Prioritisation

We strictly follow the MoSCoW method to ensure we deliver a working MVP by Week 10.

### ✅ Must Have (The MVP)
*   User Authentication (Seeker vs. Employer).
*   **The Job Feed:** Clean list of active jobs.
*   **Post a Job:** Simple form for employers.
*   **Apply:** One-click application for seekers.
*   **Dashboard:** View status of applications.

### ⚠️ Should Have (Important)
*   **Status Indicators:** Visual tags for "Applied," "Interviewing," "Rejected."
*   **Profile Skills:** Tagging system (e.g., "Python," "Design").
*   Search & Filter functionality.

### 🔮 Could Have (Nice-to-have)
*   Profile picture uploads.
*   Salary range filters.
*   "Saved Jobs" bookmarking.

### ❌ Won't Have (Out of Scope)
*   In-app messaging/Chat.
*   Payment processing.
*   AI-based job matching.

---

## 📅 Development Workflow (XP)

We adhere to **Extreme Programming (XP)** principles:
1.  **Weekly Sprints:** We plan and execute in 1-week cycles.
2.  **Pair Programming:** Critical features are built by pairs to reduce bugs.
3.  **TDD (Test Driven Development):** We write tests for core logic before implementation.
4.  **Stand-ups:** Every **Sunday at 7:00 PM** to sync progress and clear blockers.

---

## 🚀 How to Run Locally

*(Instructions for developers)*

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/StartUp-Manager/CareerLink-Nexus.git
    cd CareerLink-Nexus
    ```

2.  **Install Dependencies:**
    ```bash
    # Frontend
    cd client
    npm install
    
    # Backend
    cd ../server
    npm install
    ```

3.  **Setup Database:**
    *   Ensure PostgreSQL is running.
    *   Create a database named `careerlink`.
    *   Configure `.env` file (see `.env.example`).

4.  **Run the App:**
    ```bash
    # Run both (if concurrent script exists)
    npm run dev
    ```

---

## ⚠️ Risk Management (Assessment 1)

*   **Scope Creep:** Mitigated by strict adherence to the **"Must Have"** list.
*   **Time Constraints:** Mitigated by weekly **Stand-ups** and **GitHub Projects** tracking.
*   **Technical Debt:** Mitigated by **Clean Code** standards and **Peer Reviews**.

---

*Verified by Team Nexus | 2026*
