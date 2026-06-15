# 🚀 Getting Started - Peternakan Ayam Website

## Quick Setup (5 menit)

### 1. Clone Repository
```bash
git clone https://github.com/ariocode83/peternakan-ayam-website.git
cd peternakan-ayam-website
```

### 2. Setup Supabase (Free)
- Go to https://supabase.com
- Sign up (free tier)
- Create new project
- Copy URL & Anon Key

### 3. Setup Backend
```bash
cd backend
npm install
cp .env.example .env

# Edit .env with Supabase credentials:
# SUPABASE_URL=your_url
# SUPABASE_KEY=your_key
# JWT_SECRET=any_random_secret

npm run dev
# Backend running at http://localhost:3000
```

### 4. Setup Frontend
```bash
cd ../frontend
npm install
cp .env.example .env

# Edit .env:
# VITE_SUPABASE_URL=your_url
# VITE_SUPABASE_ANON_KEY=your_key
# VITE_API_URL=http://localhost:3000

npm run dev
# Frontend running at http://localhost:5173
```

### 5. Open Browser
- Visit http://localhost:5173
- Login (credentials TBD)
- Start using!

---

## Next Steps

1. Setup Supabase database schema (run migrations)
2. Implement authentication
3. Add production tracking features
4. Add sales/orders features
5. Build mobile app with React Native

---

## Troubleshooting

**Port already in use:**
```bash
# Change port in .env or config
PORT=3001 npm run dev
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS error:**
- Check CORS_ORIGIN in backend .env
- Make sure it matches frontend URL

---

**Need help?** Check docs/ folder for detailed documentation
