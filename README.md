# 🐔 Peternakan Ayam Petelur - Website Manajemen
## Sistem Manajemen Terintegrasi untuk Peternakan Ayam Petelur

**Peternakan:** Muda Sejahtera Bersama  
**Lokasi:** Desa Kertarahayu  
**Jumlah Ayam:** 600 ekor  
**Tim:** 16 orang  
**Status:** 🚀 In Development

---

## 📋 Deskripsi Project

Website dan mobile app untuk manajemen operasional peternakan ayam petelur 600 ekor, dengan fitur:

- 📊 **Internal Management** - Tracking produksi, kesehatan, feeding, vaccination
- 🛒 **E-Commerce** - Sistem penjualan telur online (retail + wholesale)
- 📱 **Mobile First** - Aplikasi Android untuk field staff
- 🔄 **Offline Support** - Bisa input data tanpa internet, sync otomatis
- 📈 **Real-time Reports** - Dashboard & reporting untuk decision making
- 👥 **Role-based Access** - 4 level user (Supervisor, Manager, Officer, Operator)

---

## 🎯 Tujuan Project

✅ Digitalisasi manajemen operasional  
✅ Meningkatkan efisiensi (dari manual excel → digital)  
✅ Memfasilitasi penjualan telur online  
✅ Real-time reporting untuk insights  
✅ Koordinasi tim 16 staff yang lebih baik  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|----------|
| **Frontend** | React 18 + TypeScript |
| **Mobile** | React Native (Expo) + Android |
| **Backend** | Node.js + Express + TypeScript |
| **Database** | PostgreSQL (via Supabase) |
| **Offline** | Async Storage + Sync Engine |
| **Hosting** | Vercel (Frontend) + Railway (Backend) + Supabase (DB) |
| **Auth** | Supabase JWT |

---

## 📁 Folder Structure

```
peternakan-ayam-website/
├── docs/                       # Documentation
│   ├── 01-PROJECT-DEFINITION.md
│   ├── 02-TECH-STACK-SELECTION.md
│   ├── 03-DATABASE-DESIGN-ERD.md
│   └── 00-CHAT-SESSION-LOG.md
│
├── frontend/                   # React web app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                    # Node.js + Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── db/
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
│
├── mobile/                     # React Native app (Expo)
│   ├── app/
│   ├── screens/
│   ├── components/
│   ├── services/
│   └── app.json
│
├── database/                   # Database schemas & migrations
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
│
├── .github/
│   └── workflows/              # CI/CD pipelines
│
├── .env.example                # Environment variables template
├── .gitignore
├── README.md                   # This file
└── docker-compose.yml          # Local development setup
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm atau yarn
- Git
- Supabase account (free)
- Railway account (free)

### Setup Backend

```bash
# 1. Clone repository
git clone https://github.com/ariocode83/peternakan-ayam-website.git
cd peternakan-ayam-website

# 2. Setup backend
cd backend
npm install
cp .env.example .env
# Edit .env dengan Supabase credentials

# 3. Start backend (development)
npm run dev
# API running at http://localhost:3000
```

### Setup Frontend

```bash
# 1. Navigate ke frontend
cd ../frontend
npm install
cp .env.example .env
# Edit .env dengan backend URL

# 2. Start frontend (development)
npm run dev
# App running at http://localhost:5173
```

### Setup Mobile

```bash
# 1. Navigate ke mobile
cd ../mobile
npm install

# 2. Start Expo development
npm start
# Scan QR code dengan Expo Go app
```

---

## 📚 Documentation

- **[Project Definition](docs/01-PROJECT-DEFINITION.md)** - Scope, objectives, user personas
- **[Tech Stack](docs/02-TECH-STACK-SELECTION.md)** - Technology decisions & architecture
- **[Database Design](docs/03-DATABASE-DESIGN-ERD.md)** - ERD, schema, relationships
- **[Chat Session Log](docs/00-CHAT-SESSION-LOG.md)** - Project planning discussion

---

## 🎯 Key Features (MVP)

### Internal Management
- ✅ Dashboard production tracking
- ✅ Daily data input (production, health, feeding)
- ✅ Flock management
- ✅ Health monitoring & vaccination tracking
- ✅ Inventory management
- ✅ Expense & revenue tracking
- ✅ Staff scheduling
- ✅ Notifications & alerts

### E-Commerce
- ✅ Customer management
- ✅ Order creation & tracking
- ✅ Invoice generation
- ✅ Payment tracking (cash + transfer)
- ✅ Delivery coordination
- ✅ Sales reports

### Reports & Analytics
- ✅ Daily production summary
- ✅ Weekly/monthly reports
- ✅ Financial reports (P&L)
- ✅ Health analysis
- ✅ Sales analytics
- ✅ Export to PDF/Excel

### Technical
- ✅ Role-based access control (4 levels)
- ✅ Offline functionality
- ✅ Real-time sync
- ✅ Mobile app (Android)
- ✅ Data backup & recovery
- ✅ Activity logging

---

## 📅 Timeline

| Phase | Duration | Target |
|-------|----------|--------|
| Setup & Init | 1 week | End June 2026 |
| Backend Development | 2-3 weeks | Mid July 2026 |
| Frontend Development | 2-3 weeks | Mid July 2026 |
| Mobile App | 2-3 weeks | Aug 2026 |
| Integration & Testing | 2-3 weeks | Aug-Sep 2026 |
| Deployment & Training | 1-2 weeks | Sep 2026 |
| **Launch (MVP)** | **4-5 months** | **Jan 2027** |

---

## 💰 Cost

| Item | Cost |
|------|------|
| Development | Rp 2B (budgeted) |
| Hosting (monthly) | ~$5-10 |
| Domain | ~$12/year |
| **Total Year 1** | ~$120-150 |

---

## 👥 Team & Contacts

**Project Owner:** Aris Siswanto  
**Email:** arissiswanto83@gmail.com  
**Phone:** 0878 8802 1481  
**Organization:** Muda Sejahtera Bersama  
**Location:** Desa Kertarahayu  

---

## 📋 User Roles

1. **Pengawas (Supervisor)** - Admin, full access
2. **Ketua (Head)** - Manager, operations access
3. **Sekretaris (Secretary)** - Officer, admin tasks
4. **Bendahara (Treasurer)** - Finance, financial data
5. **Anggota (Members)** - Operators, field staff, limited access

---

## 🔄 Development Workflow

### Git Workflow
```
main (production)
  ↑
develop (staging)
  ↑
feature/* (features)
  ↑
bugfix/* (bug fixes)
```

### Commit Message Format
```
type(scope): subject

[body]

[footer]
```

Examples:
- `feat(auth): add login functionality`
- `fix(production): fix data sync bug`
- `docs(readme): update setup instructions`

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

---

## 📦 Deployment

### Frontend (Vercel)
```bash
npm run build
# Auto-deploy on git push to main
```

### Backend (Railway)
```bash
# Connect GitHub repo to Railway
# Auto-deploy on git push
```

### Database (Supabase)
```bash
# Migrations auto-apply
npm run db:migrate
```

---

## 🐛 Issues & Support

- **Report bugs:** Create GitHub Issue
- **Feature requests:** Create GitHub Discussion
- **Contact:** Email aris.siswanto@gmail.com

---

## 📞 Getting Help

1. Check documentation in `/docs` folder
2. Check existing issues/discussions
3. Ask in team chat
4. Contact project owner

---

## 📄 License

Private repository for internal use only

---

## 🎓 Changelog

### v0.1.0 (In Development)
- Project initialization
- Tech stack selection
- Database design
- Backend setup
- Frontend setup
- Mobile app setup

---

**Status:** 🚀 In Active Development  
**Last Updated:** 14 Juni 2026  
**Next Milestone:** Backend API v1

---

**Project: Sistem Manajemen Peternakan Ayam Petelur**  
**Start Date:** 14 Juni 2026  
**Target Launch:** Tahun 2027