import { Request, Response } from 'express'
import { movieModel, MovieDoc } from '../models'

export default {
    /** GET '/v1/api/movies' **/
    getAll: async function (req: Request, res: Response) {
        const allMovies: MovieDoc[] = await movieModel.getAll()
        res.json(allMovies)
    }
}
