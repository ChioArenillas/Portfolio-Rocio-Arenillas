# Portfolio — Rocío Arenillas

## 🧩 Description

Personal portfolio website built to showcase frontend development and UX/UI design projects, technical skills, CV downloads, and contact information. Supports instant bilingual switching (English / Spanish) with language persistence and accessible navigation.

## 🚀 Live Demo

https://portfolio-rocio-arenillas.vercel.app/

## 🛠️ Tech Stack

* **React 19** + **Vite 7**
* **CSS Modules** + CSS custom properties
* **Context API** for EN/ES internationalization
* **ESLint 9** (flat config + React Hooks & Refresh rules)
* **Vercel** & **@vercel/analytics**

## 🎯 Features

* Bilingual UI (English / Spanish) with `localStorage` persistence and synchronized `<html lang>`
* Responsive project gallery with adaptive pagination
* Interactive skills marquee with hover pause, drag support, and `prefers-reduced-motion` support
* Contact form with async submission feedback (FormSubmit AJAX)
* Accessible landmarks, keyboard navigation, and Open Graph / SEO metadata

## 📦 Getting Started

```bash
git clone https://github.com/ChioArenillas/Portfolio-Rocio-Arenillas.git
cd Portfolio-Rocio-Arenillas/portfolio
npm install
npm run dev
```

### Available Scripts

* `npm run dev` — Start local development server
* `npm run build` — Build production bundle
* `npm run preview` — Preview production build locally
* `npm run lint` — Run ESLint checks
