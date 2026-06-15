# Backend Boilerplate - Express + TypeScript

**Framework:** Express.js v4.18+  
**Language:** TypeScript  
**Database:** PostgreSQL (Supabase)  
**Authentication:** JWT (Supabase Auth)

---

## Project Structure

```
backend/
├── src/
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── farm.ts
│   │   ├── production.ts
│   │   ├── health.ts
│   │   ├── inventory.ts
│   │   ├── sales.ts
│   │   ├── finance.ts
│   │   └── index.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── farmController.ts
│   │   ├── productionController.ts
│   │   └── ...
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── validation.ts
│   │   └── logger.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── farmService.ts
│   │   └── offlineSync.ts
│   ├── db/
│   │   ├── connection.ts
│   │   └── queries.ts
│   ├── types/
│   │   ├── auth.ts
│   │   ├── farm.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   └── errors.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
├── .env.example
└── Dockerfile
```

## Key Features

- ✅ JWT Authentication (Supabase)
- ✅ Role-based Access Control
- ✅ RESTful API endpoints
- ✅ Error handling middleware
- ✅ Request validation
- ✅ CORS enabled
- ✅ Request logging
- ✅ Offline sync support
- ✅ Database connection pooling
- ✅ Type-safe database queries

## API Endpoints (MVP)

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/refresh
- POST /api/auth/logout

### Farm Management
- GET /api/farm/flocks
- POST /api/farm/flocks
- PUT /api/farm/flocks/:id
- GET /api/farm/flocks/:id

### Production
- GET /api/production/logs
- POST /api/production/logs
- GET /api/production/summary (daily/weekly/monthly)

### Health
- GET /api/health/logs
- POST /api/health/logs
- GET /api/health/alerts

### Inventory
- GET /api/inventory/stock
- POST /api/inventory/logs
- GET /api/inventory/summary

### Sales
- GET /api/sales/orders
- POST /api/sales/orders
- PUT /api/sales/orders/:id
- GET /api/sales/customers
- POST /api/sales/customers

### Finance
- GET /api/finance/expenses
- POST /api/finance/expenses
- GET /api/finance/revenue
- POST /api/finance/revenue
- GET /api/finance/reports

### Offline Sync
- POST /api/sync/upload (push local data)
- GET /api/sync/download (pull remote data)
- POST /api/sync/resolve (conflict resolution)

## NPM Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.0.0",
    "@supabase/supabase-js": "^2.26.0",
    "jsonwebtoken": "^9.0.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "joi": "^17.9.0",
    "pg": "^8.10.0",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^20.0.0",
    "@types/morgan": "^1.9.5",
    "ts-node": "^10.9.0",
    "nodemon": "^2.0.20",
    "jest": "^29.5.0",
    "@types/jest": "^29.5.0",
    "ts-jest": "^29.1.0"
  }
}
```

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# 3. Run development server
npm run dev

# 4. Run tests
npm test

# 5. Build for production
npm run build

# 6. Start production server
npm start
```

## Environment Variables

```
DATABASE_URL=postgresql://user:password@db.supabase.co:5432/postgres
JWT_SECRET=your_jwt_secret_here
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_key_here
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

---

**Status:** Ready for development ✅
See `backend/README.md` for detailed documentation
