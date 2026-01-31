# 🚀 CareerLink-Nexus: Project Overview

This document explains the current state of the project for the team. We have built a **"Walking Skeleton"**—a fully functional foundation that connects a modern frontend to a professional backend.

---

## 🏗️ 1. Project Structure
The project is split into two main parts:
*   **/client**: The React frontend (built with Vite).
*   **/server**: The Node.js/Express backend.
*   **run.sh**: A single script to launch everything at once.

---

## 🎨 2. Frontend (The User Interface)
We have implemented a **Premium, Minimalist Design**.
*   **Modern Branding**: Uses a sophisticated "Midnight & Electric Indigo" color palette.
*   **High-End Typography**: Uses *Bodoni Moda* (for a luxury feel) and *Poppins* (for clarity).
*   **Key Components**:
    *   **Fixed Navbar**: A "Glassmorphism" header that becomes a blurred panel when you scroll.
    *   **Hero Section**: Featured entrance animations and a custom **Image Slider** showing modern workspaces.
    *   **Job Cards**: Professional layout for job listings with hover effects.
    *   **Boutique Footer**: Includes a Newsletter section and modern social media icons.
*   **Accessibility & SEO**: Every page includes proper titles, Meta tags for social sharing, and ARIA labels for screen readers.

---

## ⚙️ 3. Backend (The Architecture)
The backend is built using the **Service-Controller-Route (SCR)** pattern. This makes the code very organized and easy to scale.
*   **SCR Pattern**:
    *   **Routes**: Define the API paths (e.g., `/api/health`).
    *   **Controllers**: Handle the logic for those paths.
    *   **Middleware**: Global error handling and security (CORS).
*   **Standardized Responses**: Every API response follows a consistent format (`Success`, `Message`, `Data`) so the frontend always knows what to expect.
*   **Reliability**: The server has "Graceful Shutdown" logic. This means it won't crash or lose data if it's interrupted—it finishes its tasks before closing.

---

## 🗄️ 4. Database
*   **PostgreSQL**: The system is configured to work with a Postgres database.
*   **init.sql**: A setup file is ready to create the initial tables.
*   **Models**: The structure for "Models" (how we talk to the database) has been discussed and is ready to be implemented when we start saving users and jobs.

---

## 🚀 5. How to Run
To start the entire project, just run this command in your terminal:
```bash
bash run.sh
```
This will:
1. Install any missing packages.
2. Clear the ports (3000 and 5000).
3. Start the Frontend (http://localhost:3000).
4. Start the Backend (http://localhost:5000).

---

## 📝 6. Current Status
The **Foundation** is finished and "Perfected." We are now ready to start building features like User Authentication (Login), Profile Management, and the Job Board.
