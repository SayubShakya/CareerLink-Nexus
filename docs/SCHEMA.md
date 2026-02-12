# CareerLink Database Schema

This document defines the PostgreSQL database structure for the CareerLink Nexus project.

## 1. Roles Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY | |
| name | VARCHAR(50) | NOT NULL | 'job_seeker' or 'employeer' |
| created_at | TIMESTAMP | DEFAULT NOW() | |
| updated_at | TIMESTAMP | DEFAULT NOW() | |

## 2. Job Seeker Users Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY | |
| email | VARCHAR(255) | UNIQUE, NOT NULL | |
| password_hash| TEXT | NOT NULL | |
| first_name | VARCHAR(100) | NOT NULL | |
| last_name | VARCHAR(100) | NOT NULL | |
| role_id | UUID | FOREIGN KEY (roles.id) | |
| created_at | TIMESTAMP | DEFAULT NOW() | |

## 3. Employeer Users Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY | |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Official Company Email |
| password_hash | TEXT | NOT NULL | |
| organization_name | VARCHAR(255) | NOT NULL | |
| company_website | VARCHAR(255) | NOT NULL | |
| is_verified | BOOLEAN | DEFAULT FALSE | |
| role_id | UUID | FOREIGN KEY (roles.id) | |

---

## 🏗️ The "Hybrid CV" System

### PATH A: Profile Builder (Structured CV)

### 4. Profiles Table (Base)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY | |
| user_id | UUID | FOREIGN KEY (job_seeker_user.id) | |
| headline | VARCHAR(255) | | |
| bio | TEXT | | |
| phone | VARCHAR(20) | | |
| location | VARCHAR(100) | | |

### 5. Experience Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| company_name | VARCHAR(100) | | |
| job_title | VARCHAR(100) | | |

### 6. Education Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| institution | VARCHAR(255) | | |
| degree | VARCHAR(100) | | |

### 7. Skills Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| skill_name | VARCHAR(100) | | |
| skill_type | VARCHAR(20) | | |

### 8. Projects Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| project_title | VARCHAR(255) | | |
| description | TEXT | | |

### 9. Trainings Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| title | VARCHAR(255) | | |
| provider | VARCHAR(255) | | |

### 10. Social & Portfolio Links Table (NEW)
Stores external professional presence (LinkedIn, GitHub, Behance, etc.).

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| platform_name | VARCHAR(50) | | e.g. 'LinkedIn', 'GitHub' |
| link_url | TEXT | NOT NULL | |
| created_at | TIMESTAMP | DEFAULT NOW() | |

---

### PATH B: Ready-Made CV (Uploaded PDF)

### 11. Resumes Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| profile_id | UUID | FOREIGN KEY (profiles.id) | |
| resume_url | TEXT | NOT NULL | |
| is_default | BOOLEAN | DEFAULT TRUE | |

---

## 📢 Job Management & Applications

### 12. Job Listings Table
Stores detailed job vacancies posted by employers.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | UUID | PRIMARY KEY | |
| company_id | UUID | FOREIGN KEY (employeer_user.id) ON DELETE CASCADE | |
| title | VARCHAR(255) | NOT NULL | e.g. "Chartered Accountant" |
| location | VARCHAR(100) | | e.g. "Tahachal" |
| job_type | VARCHAR(50) | | e.g. "Full Time" |
| career_level | VARCHAR(50) | | e.g. "Senior Level" |
| vacancy_count | INT | DEFAULT 1 | |
| experience_req | VARCHAR(100) | | e.g. "2-5 Years" |
| salary | VARCHAR(100) | | e.g. "Negotiable" |
| gender_pref | VARCHAR(20) | | Both, Male, Female |
| driving_license| BOOLEAN | DEFAULT FALSE | |
| education_pref | TEXT | | |
| skills_required| TEXT | | Comma-separated or JSON array |
| job_description| TEXT | NOT NULL | Core duties |
| requirements | TEXT | | Knowledge, Skills, and Abilities |
| competencies | TEXT | | Preferred competencies |
| benefits | TEXT | | Company perks |
| apply_instr | TEXT | | Special instructions for applying |
| contact_email | VARCHAR(255) | | |
| contact_phone | VARCHAR(255) | | |
| contact_whatsapp| VARCHAR(255) | | |
| views | INT | DEFAULT 0 | Tracking popularity |
| deadline | DATE | | |
| status | VARCHAR(20) | DEFAULT 'open' | 'open', 'closed' |
| created_at | TIMESTAMP | DEFAULT NOW() | |
| updated_at | TIMESTAMP | DEFAULT NOW() | |

### 13. Job Applications Table
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| id | SERIAL | PRIMARY KEY | |
| job_id | UUID | FOREIGN KEY (job_listings.id) | |
| job_seeker_id | UUID | FOREIGN KEY (job_seeker_user.id) | |
| application_method| VARCHAR(20) | | 'platform_cv', 'pdf_resume', or 'both' |
| resume_id | INT | FOREIGN KEY (resumes.id) | |
| status | VARCHAR(50) | DEFAULT 'applied' | applied, reviewed, shortlisted, interview_scheduled, rejected |

---

## 🏛️ Unified Views

### `14. job_seeker_full_profile_view` (The CV Dynamic Builder)
This is a **Virtual Table (SQL VIEW)** that aggregates all seeker data for the "Profile Preview" and "Employer Review" screens. It avoids the need for multiple backend queries.

| Column | Source Table | Description |
| :--- | :--- | :--- |
| profile_data | Profiles | Core info (Bio, Headline, Location, Picture) |
| user_info | Job Seeker Users | Identity (Name, Email) |
| experiences | Experience | JSON Array of all work history |
| education | Education | JSON Array of all academic history |
| skills | Skills | JSON Array of technical/core skills |
| projects | Projects | JSON Array of portfolio projects |
| training | Trainings | JSON Array of certifications |
| social_links | Social Links | JSON Array of professional links (LinkedIn/GitHub) |

*Note: This view allows the platform to fetch a 100% complete CV in milliseconds.*
