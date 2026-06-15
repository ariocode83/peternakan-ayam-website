# 🗄️ DATABASE DESIGN & SCHEMA
## Sistem Manajemen Peternakan Ayam Petelur

**Version:** 1.0  
**Date:** 15 Juni 2026  
**Database:** PostgreSQL + Supabase

---

## 🎯 ENTITY RELATIONSHIP DIAGRAM (ERD)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DATABASE SCHEMA                             │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────┐
│    users     │ (Authentication & Authorization)
├──────────────┤
│ id (PK)      │
│ email        │ ← UNIQUE
│ password     │ ← hashed
│ full_name    │
│ role         │ ← ENUM: 'supervisor', 'manager', 'officer', 'operator'
│ phone        │
│ is_active    │
│ created_at   │
│ updated_at   │
└──────────────┘
      │
      ├─────────────────┐
      │                 │
      ▼                 ▼
┌──────────────┐  ┌──────────────┐
│   flocks     │  │  employees   │
├──────────────┤  ├──────────────┤
│ id (PK)      │  │ id (PK)      │
│ name         │  │ user_id (FK) │
│ location     │  │ designation  │
│ breed        │  │ hired_date   │
│ bird_count   │  │ phone        │
│ created_at   │  │ created_at   │
└──────────────┘  └──────────────┘
      │
      │ 1:N
      ▼
┌──────────────────────┐
│  production_logs     │
├──────────────────────┤
│ id (PK)              │\n│ flock_id (FK)        │  ├──→ 1:N relationship\n│ date                 │  │    (1 flock = many logs)\n│ total_eggs           │  │\n│ grade_a_count        │  │\n│ grade_b_count        │  │\n│ grade_c_count        │  │\n│ broken_eggs          │  │\n│ notes                │  │\n│ recorded_by (FK)     │  │\n│ created_at           │  │\n└──────────────────────┘  │\n       │                  │\n       │ 1:N              │\n       └──────────────────┘\n\n┌──────────────────────┐\n│  health_logs         │\n├──────────────────────┤\n│ id (PK)              │\n│ flock_id (FK)        │ ← 1:N\n│ date                 │\n│ status               │ ← ENUM: 'normal', 'sick', 'alert'\n│ symptoms             │\n│ medication_given     │\n│ mortality_count      │\n│ notes                │\n│ recorded_by (FK)     │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  vaccination_logs    │\n├──────────────────────┤\n│ id (PK)              │\n│ flock_id (FK)        │ ← 1:N\n│ vaccine_name         │\n│ date_given           │\n│ next_due_date        │\n│ recorded_by (FK)     │\n│ notes                │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  feeding_logs        │\n├──────────────────────┤\n│ id (PK)              │\n│ flock_id (FK)        │ ← 1:N\n│ date                 │\n│ feed_type            │\n│ quantity_kg          │\n│ cost                 │\n│ notes                │\n│ recorded_by (FK)     │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  inventory_logs      │\n├──────────────────────┤\n│ id (PK)              │\n│ date                 │\n│ grade_a              │\n│ grade_b              │\n│ grade_c              │\n│ total_stock          │\n│ movement_type        │ ← ENUM: 'in', 'out', 'adjust'\n│ notes                │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  customers           │\n├──────────────────────┤\n│ id (PK)              │\n│ name                 │\n│ phone                │\n│ email                │\n│ address              │\n│ type                 │ ← ENUM: 'retail', 'wholesale'\n│ balance              │ ← Piutang\n│ created_at           │\n└──────────────────────┘\n       │\n       │ 1:N\n       ▼\n┌──────────────────────┐\n│  orders              │\n├──────────────────────┤\n│ id (PK)              │\n│ customer_id (FK)     │\n│ order_date           │\n│ delivery_date        │\n│ total_eggs           │\n│ total_price          │\n│ status               │ ← ENUM: 'pending', 'packed', 'delivered'\n│ payment_status       │ ← ENUM: 'unpaid', 'partial', 'paid'\n│ payment_method       │ ← ENUM: 'cash', 'transfer', 'credit'\n│ notes                │\n│ created_by (FK)      │\n│ created_at           │\n└──────────────────────┘\n       │\n       │ 1:N\n       ▼\n┌──────────────────────┐\n│  order_items         │\n├──────────────────────┤\n│ id (PK)              │\n│ order_id (FK)        │\n│ grade                │ ← A/B/C\n│ quantity             │\n│ unit_price           │\n│ subtotal             │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  expenses            │\n├──────────────────────┤\n│ id (PK)              │\n│ date                 │\n│ category             │ ← ENUM: 'feed', 'medicine', 'supplies', 'labor', 'utilities', 'other'\n│ description          │\n│ amount               │\n│ paid_by (FK)         │\n│ notes                │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  revenue             │\n├──────────────────────┤\n│ id (PK)              │\n│ source               │ ← 'sales', 'other'\n│ amount               │\n│ date                 │\n│ created_at           │\n└──────────────────────┘\n\n┌──────────────────────┐\n│  audit_logs          │\n├──────────────────────┤\n│ id (PK)              │\n│ user_id (FK)         │\n│ action               │ ← CREATE, UPDATE, DELETE\n│ table_name           ���\n│ record_id            │\n│ old_values           │ ← JSON\n│ new_values           │ ← JSON\n│ created_at           │\n└──────────────────────┘\n```

---

## 📊 TABLE DETAILS

### 1. **users** - User authentication & authorization

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL, -- bcrypt hashed
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'operator', -- supervisor, manager, officer, operator
  phone VARCHAR(20),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_active ON users(is_active);
```

---

### 2. **employees** - Staff information

```sql
CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  designation VARCHAR(100) NOT NULL, -- Job title
  hired_date DATE NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_employees_user_id ON employees(user_id);
```

---

### 3. **flocks** - Ayam grouping

```sql
CREATE TABLE flocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL, -- e.g., "Flock A - Kandang 1"
  location VARCHAR(255),
  breed VARCHAR(100), -- e.g., "Lohmann Brown"
  bird_count INTEGER DEFAULT 0,
  age_weeks INTEGER,
  status VARCHAR(50) DEFAULT 'active', -- active, retired, culled
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_flocks_status ON flocks(status);
```

---

### 4. **production_logs** - Daily egg production

```sql
CREATE TABLE production_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flock_id UUID NOT NULL REFERENCES flocks(id),
  date DATE NOT NULL,
  total_eggs INTEGER DEFAULT 0,
  grade_a_count INTEGER DEFAULT 0,
  grade_b_count INTEGER DEFAULT 0,
  grade_c_count INTEGER DEFAULT 0,
  broken_eggs INTEGER DEFAULT 0,
  notes TEXT,
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(flock_id, date) -- One entry per flock per day
);

CREATE INDEX idx_production_flock_date ON production_logs(flock_id, date);
CREATE INDEX idx_production_date ON production_logs(date);
```

---

### 5. **health_logs** - Health status tracking

```sql
CREATE TABLE health_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flock_id UUID NOT NULL REFERENCES flocks(id),
  date DATE NOT NULL,
  status VARCHAR(50) NOT NULL, -- 'normal', 'sick', 'alert'
  symptoms TEXT,
  medication_given VARCHAR(255),
  mortality_count INTEGER DEFAULT 0,
  notes TEXT,
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(flock_id, date)
);

CREATE INDEX idx_health_flock_date ON health_logs(flock_id, date);
CREATE INDEX idx_health_status ON health_logs(status);
```

---

### 6. **vaccination_logs** - Vaccination records

```sql
CREATE TABLE vaccination_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flock_id UUID NOT NULL REFERENCES flocks(id),
  vaccine_name VARCHAR(255) NOT NULL,
  date_given DATE NOT NULL,
  next_due_date DATE,
  batch_number VARCHAR(100),
  recorded_by UUID REFERENCES users(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_vaccination_flock ON vaccination_logs(flock_id);
CREATE INDEX idx_vaccination_next_due ON vaccination_logs(next_due_date);
```

---

### 7. **feeding_logs** - Feed consumption tracking

```sql
CREATE TABLE feeding_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flock_id UUID NOT NULL REFERENCES flocks(id),
  date DATE NOT NULL,
  feed_type VARCHAR(100) NOT NULL, -- e.g., "Layer Feed Premium"
  quantity_kg DECIMAL(10, 2) NOT NULL,
  cost DECIMAL(10, 2),
  supplier VARCHAR(255),
  notes TEXT,
  recorded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(flock_id, date)
);

CREATE INDEX idx_feeding_flock_date ON feeding_logs(flock_id, date);
CREATE INDEX idx_feeding_date ON feeding_logs(date);
```

---

### 8. **inventory_logs** - Egg inventory tracking

```sql
CREATE TABLE inventory_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  grade_a INTEGER DEFAULT 0,
  grade_b INTEGER DEFAULT 0,
  grade_c INTEGER DEFAULT 0,
  total_stock INTEGER DEFAULT 0,
  movement_type VARCHAR(50), -- 'in' (production), 'out' (sales), 'adjust' (correction)
  reference_type VARCHAR(50), -- 'production_log', 'order', 'adjustment'
  reference_id UUID,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, reference_type, reference_id)
);

CREATE INDEX idx_inventory_date ON inventory_logs(date);
CREATE INDEX idx_inventory_movement ON inventory_logs(movement_type);
```

---

### 9. **customers** - Customer management

```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  type VARCHAR(50) NOT NULL, -- 'retail', 'wholesale'
  balance DECIMAL(12, 2) DEFAULT 0, -- Piutang (negative = kami hutang)
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_customers_type ON customers(type);
CREATE INDEX idx_customers_active ON customers(is_active);
```

---

### 10. **orders** - Sales orders

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(50) UNIQUE NOT NULL, -- AUTO GENERATED: ORD-20260615-001
  customer_id UUID NOT NULL REFERENCES customers(id),
  order_date DATE NOT NULL,
  delivery_date DATE,
  total_eggs INTEGER DEFAULT 0,
  total_price DECIMAL(12, 2) DEFAULT 0,
  status VARCHAR(50) DEFAULT 'pending', -- pending, packed, delivered, cancelled
  payment_status VARCHAR(50) DEFAULT 'unpaid', -- unpaid, partial, paid
  payment_method VARCHAR(50), -- cash, transfer, credit
  payment_date DATE,
  amount_paid DECIMAL(12, 2) DEFAULT 0,
  notes TEXT,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
```

---

### 11. **order_items** - Order line items

```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  grade VARCHAR(10) NOT NULL, -- 'A', 'B', 'C'
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(12, 2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_items_order ON order_items(order_id);
```

---

### 12. **expenses** - Expense tracking

```sql
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  category VARCHAR(50) NOT NULL, -- feed, medicine, supplies, labor, utilities, other
  description TEXT NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  paid_by UUID REFERENCES users(id),
  receipt_file_path VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_expenses_date ON expenses(date);
CREATE INDEX idx_expenses_category ON expenses(category);
```

---

### 13. **revenue** - Revenue tracking

```sql
CREATE TABLE revenue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source VARCHAR(50) NOT NULL, -- 'sales', 'other'
  amount DECIMAL(12, 2) NOT NULL,
  date DATE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_revenue_date ON revenue(date);
CREATE INDEX idx_revenue_source ON revenue(source);
```

---

### 14. **audit_logs** - Activity logging for compliance

```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  action VARCHAR(50) NOT NULL, -- CREATE, UPDATE, DELETE, LOGIN
  table_name VARCHAR(100),
  record_id VARCHAR(100),
  old_values JSONB,
  new_values JSONB,
  ip_address VARCHAR(50),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_table ON audit_logs(table_name);
CREATE INDEX idx_audit_date ON audit_logs(created_at);
```

---

## 🔒 ROW LEVEL SECURITY (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE flocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE production_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE vaccination_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE feeding_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Example RLS Policy: Users can only see their own data
CREATE POLICY users_own_data ON users
  FOR SELECT USING (auth.uid() = id);

-- Example RLS Policy: Supervisor can see all, others see limited
CREATE POLICY production_logs_access ON production_logs
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'supervisor'
    OR auth.uid() = recorded_by
  );
```

---

## 📈 DATA TYPES & CONSTRAINTS

| Type | Purpose |
|------|---------|
| UUID | Primary keys (distributed, scalable) |
| VARCHAR(n) | Text fields with length limits |
| TEXT | Long text (unlimited) |
| DATE | Date without time |
| TIMESTAMP | Date with time |
| INTEGER | Whole numbers |
| DECIMAL(12,2) | Money (2 decimal places) |
| BOOLEAN | True/False |
| JSONB | JSON data (flexible structure) |
| ENUM | Fixed set of values |

---

## 🔄 DATA RELATIONSHIPS

### One-to-Many (1:N)
- 1 User → Many Production Logs
- 1 Flock → Many Production Logs
- 1 Customer → Many Orders
- 1 Order → Many Order Items

### One-to-One (1:1)
- 1 User → 1 Employee

### Many-to-Many (via junction table)
- Users ← audit_logs → Any Table

---

## 📝 MIGRATION SCRIPTS

```sql
-- Migration 001: Create all tables
-- Date: 15 Juni 2026
-- Description: Initial schema for peternakan app

BEGIN;

-- Users table
CREATE TABLE users (...);

-- Employees table
CREATE TABLE employees (...);

-- ... all other tables ...

COMMIT;
```

---

## ✅ VERIFICATION CHECKLIST

- [ ] All tables created
- [ ] All indexes created
- [ ] All foreign keys working
- [ ] RLS policies applied
- [ ] Test data inserted
- [ ] Queries tested
- [ ] Performance verified

---

**STATUS:** Ready for implementation in Supabase ✅

