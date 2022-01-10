import { Router } from 'express'
import apiRoute from './api'

const router = Router()

router.use('/api/v1', apiRoute)

export default router
