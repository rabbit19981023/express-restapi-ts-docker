import { Router } from 'express'
import { movieController } from '../controllers'

const router = Router()

/** '/api/v1' Routes **/
router.get('/movies', movieController.getAll)
router.post('/movies', movieController.addOne)

export default router