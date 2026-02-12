# 🧾 Create CV Page — Live Preview & Functionality

This document explains how the **Create CV** page works, especially the **Right Side Live Preview**, based on the reference from the SajiloCV builder (https://app.sajilocv.com/cv-builder).

---

## 📌 Overview

When a job seeker clicks **“Create CV”**, they are taken to the **CV Builder page**.  
The page is divided into three main parts:

1. **Left Side** – Navigation sidebar  
2. **Middle** – Form inputs  
3. **Right Side** – Live Preview of the CV

---

## 🔹 1. Left Side — Navigation Sidebar

The left sidebar contains the sections of the CV:

- About
- Education
- Experience
- Skills
- Achievements
- Trainings
- Awards
- Language
- Reference
- Share CV

Each section is clickable. When a user selects a section, it becomes active and the corresponding form fields display in the middle.

---

## ✍️ 2. Middle Section — User Input Form

In the middle area, users enter their information for the selected section.  
Typical fields include:

- Personal Details (name, email, phone, address)
- Summary / Career Objective
- Education entries
- Work Experience details
- Skills
- Achievements
- Trainings & Certifications
- Awards
- Languages
- References
- Social links

As the user types into each field, the data is automatically reflected in the preview panel on the right.

---

## 👀 3. Right Side — Live Preview Panel

This area shows a **real-time preview of the resume**.

### How it works:
✔ When the user enters or edits data in the middle form, the preview updates instantly without reloading the page.  
✔ The preview mirrors the selected CV template and shows the final formatted resume.  
✔ Users can see exactly how their resume will look before downloading.

---

## 🎨 Template Selection

At the top of the page, users can select a resume template.

**Template Options:**
- 5 default templates (free)
- Additional templates (premium)

When a user selects a different template:
✔ The right side preview updates instantly  
✔ The visual style of the resume changes according to the template

This allows users to choose the most suitable design for their CV.

---

## 🛠 What Powers the Live Preview

The live preview is powered by **client-side JavaScript**:

- JavaScript listens for changes in the input fields
- When data changes, the right preview panel updates dynamically
- No full page refresh is needed
- This creates a smooth, responsive user experience

Although it is not publicly documented what framework SajiloCV uses, similar live editors are typically built using:

- **React**
- **Vue**
- Or plain vanilla JavaScript with DOM manipulation

Regardless of the framework, the key concept is:

> **User input → instant update → live visual preview**

---

## 📄 PDF Download

Once the user finishes editing the CV:

1. They select a template
2. Review the live preview
3. Click **Download Resume**
4. The system converts the preview into a downloadable PDF

PDF generation is usually done using:

- JavaScript libraries like **html2pdf.js** or **jsPDF**
- Or server-side rendering

---

## 🟡 Summary

- The **Left Sidebar** navigates CV sections
- The **Middle Form** captures user data
- The **Right Preview** updates live as data changes
- A template dropdown lets users pick between 5 free and additional premium templates
- The user can **download a formatted PDF** of the CV

---

## 📌 Key Benefits

✔ Real-time feedback for users  
✔ Easy section navigation  
✔ Multiple templates for customization  
✔ No page reloads — smooth UI  
✔ Consistent final resume format

---

If needed, we can extend this document with diagrams, UI mockups, or a step-by-step flow chart.

