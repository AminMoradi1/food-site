# 🍽️ Food Ordering Website - Next.js

This is a food ordering web application built with **Next.js**, implementing dynamic and static routing along with data-fetching techniques such as **SSG (Static Site Generation)**, **SSR (Server Side Rendering)**, and **ISR (Incremental Static Regeneration)**.

---

## 🚀 Features

- ✅ **Dynamic Routing** for individual food detail pages and categories
- ✅ **SSG, SSR & ISR** used in different parts of the site for optimal performance
- ✅ **Clean and modular file structure** using best practices
- ✅ **Reusable React components** and clear data separation
- ✅ Responsive design for mobile & desktop
- ✅ Deployed on **Vercel** 🚀

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router or Pages Router)
- **Styling:**  CSS
- **Data Source:** Local JSON / API with fetch
- **Deployment:** Vercel
- **Hosting:** GitHub + Vercel

---

## 📂 Pages & Routing

| Route | Type | Description |
|-------|------|-------------|
| `/` | SSG | Homepage with featured items |
| `/foods/[id]` | SSR | Server-rendered food detail page |
| `/categories/[category]` | ISR | Category pages regenerated on demand |

---

## 🧪 How to run locally

```bash
git clone https://github.com/AminMoradi1/food-site.git
cd food-site
npm install
npm run dev
