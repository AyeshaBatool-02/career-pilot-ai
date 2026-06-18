# CareerPilot AI 🚀

A clean, production-style internship & job application tracker — built with Next.js, TypeScript, Tailwind, and Supabase.

This is the **MVP version**: real auth, real database, real CRUD. No fake data, no mockups.

---

## ✅ What's included

- Email/password signup & login (Supabase Auth)
- Protected dashboard routes (middleware redirects logged-out users)
- Add / view / update status / delete job applications
- Dashboard with stat cards + pipeline bar chart
- Profile page (name + resume link)
- Empty states, loading skeletons, toast notifications
- Light & dark mode design tokens (dark mode CSS is ready — see "Optional" below to add a toggle)
- Fully responsive (mobile bottom nav, desktop sidebar)

---

## 🛠 Step 1 — Install dependencies

Open this folder in your terminal (VS Code terminal works fine):

```bash
npm install
```

---

## 🛠 Step 2 — Create your Supabase project (free, ~3 minutes)

1. Go to **[supabase.com](https://supabase.com)** → Sign up / log in (you can use GitHub login)
2. Click **"New Project"**
3. Fill in:
   - Name: `career-pilot-ai` (or anything)
   - Database Password: choose any strong password (save it somewhere)
   - Region: pick the closest to you
4. Wait ~2 minutes for the project to finish setting up

---

## 🛠 Step 3 — Get your API keys

1. In your Supabase project, go to **Settings (gear icon) → API**
2. You'll see two values you need:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public key** (a long string starting with `eyJ...`)

---

## 🛠 Step 4 — Create your `.env.local` file

In the project root, create a new file called exactly `.env.local` (copy `.env.local.example` and rename it), then paste your keys:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-long-key-here
```

⚠️ Never commit this file to GitHub — it's already in `.gitignore`.

---

## 🛠 Step 5 — Set up the database table

1. In Supabase, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Open the file `supabase-setup.sql` from this project, copy ALL of it
4. Paste into the SQL editor and click **Run**

This creates the `applications` table and locks it down so each user can only see their own data (Row Level Security).

---

## 🛠 Step 6 — Turn off email confirmation (optional, for faster testing)

By default, Supabase requires email confirmation before login. For quick local testing:

1. Go to **Authentication → Providers → Email**
2. Toggle off **"Confirm email"**

(Turn this back on before a real public launch.)

---

## 🚀 Step 7 — Run it

```bash
npm run dev
```

Open **http://localhost:3000** — sign up, log in, and start adding applications.

---

## 📦 Deploying to Vercel (free)

1. Push this project to a GitHub repo
2. Go to **[vercel.com](https://vercel.com)** → New Project → Import your repo
3. In the **Environment Variables** section, add the same two keys from your `.env.local`
4. Click **Deploy**

That's it — live in ~1 minute.

---

## 📂 Project Structure

```
app/
  (auth)/login, (auth)/signup       → auth pages
  (dashboard)/dashboard             → stats + chart
  (dashboard)/applications          → CRUD list
  (dashboard)/profile               → user profile
components/
  ui/                                → button, input, card, dialog, badge, toast, skeleton
  applications/                     → ApplicationCard, ApplicationForm, ApplicationList, StatusBadge
  dashboard/                        → StatsCard, StatusChart
  layout/                           → Sidebar, MobileNav
  profile/                          → ProfileForm
lib/
  supabase/                         → client.ts (browser), server.ts (server components)
  types.ts                          → shared TypeScript types
store/
  useApplicationStore.ts            → Zustand store for applications
middleware.ts                       → protects dashboard routes, redirects logged-in users away from auth pages
supabase-setup.sql                  → run once in Supabase SQL editor
```

---

## 🧭 What to build next (Phase 2 ideas — for your resume/README roadmap)

- Search & filter applications by company/status
- Framer Motion page transitions + micro-interactions
- Skills tracker page
- Resume version manager
- Forgot password + OTP flow
- Public landing pages (pricing, about, features)

Listing these as a "Roadmap" section in your GitHub README shows recruiters you think in product terms, not just "I built one feature and stopped."

---

## 💼 For your resume

> Built CareerPilot AI, a full-stack internship tracking app (Next.js, TypeScript, Supabase) with authenticated CRUD operations, row-level security, and a real-time analytics dashboard — deployed on Vercel.
