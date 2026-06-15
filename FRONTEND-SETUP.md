# Frontend Boilerplate - React + TypeScript

**Framework:** React 18  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Build Tool:** Vite  

---

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Production.tsx
│   │   ├── Health.tsx
│   │   ├── Inventory.tsx
│   │   └── ...
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useOfflineSync.ts
│   │   └── ...
│   ├── services/
│   │   ├── authService.ts
│   │   ├── api.ts
│   │   └── ...
│   ├── types/
│   │   ├── auth.ts
│   │   ├── farm.ts
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.example
```

## Key Features

- ✅ React 18 with TypeScript
- ✅ Vite (fast build tool)
- ✅ React Router for navigation
- ✅ Zustand for state management
- ✅ Tailwind CSS for styling
- ✅ React Hook Form for forms
- ✅ React Query for API data
- ✅ Offline support (async storage)
- ✅ Mobile responsive

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env
# Edit .env with Supabase credentials

# 3. Run development server
npm run dev

# 4. Open browser
# http://localhost:5173

# 5. Build for production
npm run build
```

## Environment Variables

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=http://localhost:3000
```

---

**Status:** Ready for development ✅
