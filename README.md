# ZapShift Client

Frontend for ZapShift parcel delivery platform.

Live:
[https://zap-shift.taimur.dev/](https://zap-shift.taimur.dev/)

## Demo Access

Use this demo super admin account to explore admin-level dashboard features:

- Role: `Super Admin`
- Email: `super_admin_demo@gmail.com`
- Password: `superAMIN1234@`

## Overview

ZapShift helps users book parcels, pay online, track delivery flow, manage orders, and operate role-based dashboards for riders, admins, and super admins.

This repo contains client app built with React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, Firebase auth, and TanStack Query.

## Showcase Features

### Client Side

- Modern landing page with hero carousel, service highlights, brand slider, review carousel
- Coverage and about pages for service presentation
- Firebase authentication:
  - email/password sign up
  - email/password sign in
  - Google sign in
  - protected dashboard routes
- Role-based dashboard navigation for:
  - user
  - rider
  - admin
  - super admin
- Parcel booking flow:
  - create parcel order
  - view own orders
  - view parcel details
  - delete parcel before delivery completion
- Payment flow:
  - Stripe checkout redirect
  - payment success page
  - payment cancel page
  - payment history page
- Rider workflow UI:
  - view assigned deliveries
  - accept delivery request
  - reject assignment
  - mark parcel delivered
  - review completed deliveries
- Admin workflow UI:
  - review rider applications
  - approve rider request
  - assign rider to parcel
- Super admin workflow UI:
  - manage users
  - update user roles
- Shared loading states, boot loader, route protection, toast feedback
- Shared styling utilities for more consistent typography, cards, tables, and empty states

### Server Side

- Express API with MongoDB integration
- Firebase Admin token verification for protected API access
- Role-aware access checks for admin/super admin routes
- User management API:
  - create user
  - get users
  - check user role
  - update user role
- Parcel management API:
  - create parcel
  - get parcels by sender
  - get parcel details
  - delete parcel
  - assign rider to parcel
  - update parcel delivery status
  - update rider-linked parcel completion state
- Delivery workflow logic:
  - `pending-pickup`
  - `in_delivery`
  - `rider_arriving`
  - `delivered`
- Rider management API:
  - submit rider application
  - list rider applications
  - filter riders by status, division, working status
  - approve rider
  - delete rider request
- Automatic rider state handling:
  - set rider `workingStatus` to `in_delivery`
  - restore rider `workingStatus` to `available`
  - remove rider from parcel when assignment rejected
- Stripe payment session creation
- Payment success handling:
  - mark payment as paid
  - update parcel delivery state
  - generate tracking ID
  - store payment record
- Payment history API by authenticated customer
- Delivery status stats API for admin charts/analytics
- Tracking ID generation for paid parcels

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui + Base UI
- React Router
- TanStack Query
- Firebase Auth
- Axios
- Stripe checkout integration
- Swiper + React Responsive Carousel

## Project Structure

```text
client/
├─ src/
│  ├─ components/
│  │  ├─ Pages/
│  │  ├─ Shared/
│  │  └─ ui/
│  ├─ Context/
│  ├─ Firebase/
│  ├─ Hooks/
│  ├─ lib/
│  ├─ RootApp.tsx
│  ├─ main.tsx
│  └─ index.css
├─ public/
└─ package.json
```

## Getting Started

### 1. Install deps

```bash
npm install
```

### 2. Create env file

Create `client/.env.local` or `client/.env` with Firebase + API config used by app.

Example:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_sender_id
VITE_appId=your_firebase_app_id
VITE_API_URL=http://localhost:5000
```

Names may differ in your local Firebase config. Match whatever `firebase.init` reads.

### 3. Run dev server

```bash
npm run dev
```

### 4. Build production bundle

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` → start Vite dev server
- `npm run build` → type-check + production build
- `npm run lint` → run ESLint
- `npm run preview` → preview production build locally

## Full Stack Flow

1. User signs in with Firebase auth.
2. Client sends Firebase token to server.
3. Server verifies token with Firebase Admin.
4. User books parcel.
5. User completes Stripe checkout.
6. Server marks parcel paid, generates tracking ID, stores payment.
7. Admin assigns rider.
8. Rider accepts or rejects assignment.
9. Rider moves parcel through delivery states.
10. System updates parcel + rider working status across flow.

## Backend Dependency

Client communicates with ZapShift server for auth-protected business logic, parcel lifecycle, payment lifecycle, rider operations, user role management, and dashboard stats.

Backend stack:

- Node.js
- Express
- MongoDB
- Firebase Admin
- Stripe

## Notes

- Startup boot loader shows for ~2.2 seconds before app renders.
- Shared typography/card classes live in `src/index.css` for more consistent styling across pages.
- Protected dashboard routes depend on auth state and role checks.
- Payment and parcel workflow depend on server env + Stripe + MongoDB + Firebase Admin config.

## Status

Project active. UI and dashboard styling still evolving.
