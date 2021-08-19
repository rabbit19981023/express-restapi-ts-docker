import { Router } from 'express'
import { movieController } from '../controllers'

const router: Router = Router()

/** '/v1/api' Routes **/
router.get('/movies', movieController.getAll)
router.post('/movies', movieController.addOne)

export default router
