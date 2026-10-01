# NextGen-CSE-Funnel 🚀

> **High-Converting, Production-Ready Student Admission Landing Page** for a Work-Integrated B.Tech in Computer Science & Engineering (Kalvium Model) — 2027 Batch.

![NextGen CSE Banner](public/colleges/hero.jpg)

---

## 🌟 Key Highlights & Features

- **Built for 2027 Admissions:** Tailored specifically for Class 12th PCM students & parents seeking practical, industry-first engineering education over traditional rote-learning degrees.
- **Modern Dark Tech Aesthetic:** Sleek deep-space background (`#060610`), custom dot-grid overlay, mesh radial glows (indigo, emerald, blue), and floating tech badges.
- **High Visual Impact Hero Section:**
  - 3 concentric orbital spinning rings
  - Dynamic animated stat counters (100% Practical, ₹40K+ Stipend, 50+ Partners, 4 Yrs XP)
  - SVG hand-drawn underline effect on "Day 1"
  - Primary pulse-glow CTA with shimmer animation
- **Side-by-Side Comparison:** Traditional engineering colleges (outdated syllabus, paper exams, ₹3–4 LPA) vs. Work-Integrated B.Tech (Next.js, AI workflows, paid internships).
- **4-Year Curriculum Roadmap:** Interactive timeline from Year 1 Foundations to Year 4 Degree conferral with stipend callouts (₹15K–₹40K/month).
- **Kalvium-Affiliated Partner Campuses Section:**
  - Complete list of **9 UGC-recognized universities** across 6 states
  - Filter by region (**All**, **North India**, **South India**)
  - High-resolution campus photography for each university
  - Click-to-expand details with instant "Apply for This Campus" CTA
  - 3-step KNET entrance test roadmap explainer
- **Student Results & Social Proof:** Testimonials with stipend badges and partner hiring network (Razorpay, Swiggy, Zepto, CRED, etc.).
- **Frictionless Lead Capture Form:**
  - Built with **React Hook Form** + strict **Zod validation**
  - Indian WhatsApp number validation (`+91` prefix)
  - Radio card selection for preferred counseling time slots
  - Animated ping success confirmation with direct WhatsApp counselor connect button
- **Direct Google Sheets Integration:** Automatically forwards incoming leads to your Google Apps Script Web App endpoint with zero extra infrastructure needed.
- **Accessible Accordion FAQ:** Categorized with color-coded tags covering UGC approvals, internships, eligibility, fees, and parent attendance.

---

## 🏛️ Affiliated University Campuses (2027 Batch)

| Campus | Location | Region | Accreditation |
|---|---|---|---|
| **AMET University** | Chennai, Tamil Nadu | South India | UGC Recognized • AICTE Approved |
| **JECRC University** | Jaipur, Rajasthan | North India | UGC Recognized • NAAC Accredited |
| **Kalasalingam Academy (KARE)** | Krishnankoil, Tamil Nadu | South India | UGC Recognized • NAAC A++ |
| **Lovely Professional University (LPU)** | Phagwara, Punjab | North India | UGC Recognized • NAAC A+ |
| **SGT University** | Gurugram, Haryana | North India | UGC Recognized • AICTE Approved |
| **SRM University – AP** | Amaravati, Andhra Pradesh | South India | UGC Recognized • NAAC A+ |
| **St. Joseph University** | Chennai, Tamil Nadu | South India | UGC Recognized • AICTE Approved |
| **Yenepoya University** | Bengaluru, Karnataka | South India | UGC Recognized • NAAC Accredited |
| **Yenepoya University** | Mangaluru, Karnataka | South India | UGC Recognized • NAAC Accredited |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Library:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Glassmorphism, CSS keyframe animations
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Notifications:** Sonner Toast
- **Backend / Database:** Next.js Route Handler (`/api/leads`) connected to Google Apps Script (Google Sheets)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Gauravg5o/NextGen-CSE-Funnel.git
cd NextGen-CSE-Funnel
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Google Apps Script Web App URL:
```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/your-script-id/exec
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm run start
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
