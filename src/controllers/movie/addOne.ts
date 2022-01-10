import { Request, Response } from 'express'
import { MovieModel } from '../../models'

/** POST '/api/v1/movies **/
const addOne = async (req: Request, res: Response): Promise<void> => {
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

export default addOne
