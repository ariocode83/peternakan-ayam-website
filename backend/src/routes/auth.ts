import { Router } from 'express'

const router = Router()

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - TODO' })
})

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - TODO' })
})

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout endpoint - TODO' })
})

export default router
