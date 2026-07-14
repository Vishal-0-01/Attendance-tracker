# Attendance Tracker

A dark-mode, personal attendance tracking website built with Next.js App Router, React, TypeScript, and Tailwind CSS. It stores raw lecture records in your browser and calculates all percentages dynamically.

## Features
- First-time setup wizard for semester, subjects, and weekly timetable.
- Dashboard with overall attendance, advisor metrics, today's classes, subject cards, and pending days.
- Click-to-cycle statuses: Pending → Present → Absent → Cancelled.
- Editable weekly timetable, monthly calendar, complete history, one-time extra/moved/cancelled lectures, and semester settings.
- No auth, accounts, backend, or database required.

## Install
```bash
npm install
```

## Run locally
```bash
npm run dev
```
Open http://localhost:3000.

## Quality checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel
1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

Data is saved to `localStorage` on the device/browser you use.
