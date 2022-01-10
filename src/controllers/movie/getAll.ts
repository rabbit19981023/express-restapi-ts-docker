import { Request, Response } from 'express'
import { MovieModel } from '../../models'

/** GET '/api/v1/movies' **/
const getAll = async (req: Request, res: Response): Promise<void> => {
  const allMovies = await MovieModel.getAll()
  res.json(allMovies)
}

export default getAll
