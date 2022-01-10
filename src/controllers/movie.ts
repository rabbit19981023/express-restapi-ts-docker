import { Request, Response } from 'express'
import { MovieModel } from '../models'

export default {
  /** GET '/api/v1/movies' **/
  async getAll(req: Request, res: Response): Promise<void> {
    const allMovies = await MovieModel.getAll()
    res.json(allMovies)
  },

  /** POST '/api/v1/movies **/
  async addOne(req: Request, res: Response): Promise<void> {
    const movie = await MovieModel.addOne({
      name: req.body.name,
      director: req.body.director,
      language: req.body.language,
      duration: parseInt(req.body.duration)
    })

    res.json({
      status: 200,
      message: 'You have added a new movie successfully!',
      movie
    })
  }
}
