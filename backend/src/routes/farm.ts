import { Router } from 'express'

const router = Router()

// GET /api/farm/flocks
router.get('/flocks', (req, res) => {
  res.json({ message: 'Get flocks - TODO' })
})

// POST /api/farm/flocks
router.post('/flocks', (req, res) => {
  res.json({ message: 'Create flock - TODO' })
})

export default router
