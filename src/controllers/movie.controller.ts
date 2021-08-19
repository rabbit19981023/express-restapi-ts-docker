import { Request, Response } from 'express'
import { movieModel, Movie, MovieDoc } from '../models'

export default {
    /** GET '/v1/api/movies' **/
    getAll: async function (req: Request, res: Response) {
        const allMovies: MovieDoc[] = await movieModel.getAll()
        res.json(allMovies)
    },

    /** POST '/v1/api/movies **/
    addOne: async function (req: Request, res: Response) {
        const movie: Movie = {
            name: req.body.name,
            director: req.body.director,
            language: req.body.language,
            duration: parseInt(req.body.duration)
        }

        const addedMovie: MovieDoc = await movieModel.addOne(movie)
        res.json({
            status: 200,
            message: 'You have added a new movie successfully!',
            added_movie: addedMovie
        })
    }
}
