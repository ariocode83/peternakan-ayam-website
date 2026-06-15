import { Router } from 'express'

const router = Router()

// GET /api/production/logs
router.get('/logs', (req, res) => {
  res.json({ message: 'Get production logs - TODO' })
})

// POST /api/production/logs
router.post('/logs', (req, res) => {
  res.json({ message: 'Create production log - TODO' })
})

export default router
