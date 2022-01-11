import mongoose, { Schema, Model, Document } from 'mongoose'

interface Movie {
  name: string,
  director: string,
  language: string,
  duration: number
}

const schema = new mongoose.Schema<Movie>({
  name: String,
  director: String,
  language: String,
  duration: Number
})

const model = mongoose.model<Movie>('movie', schema)

/** MovieModel APIs **/
const getAll = async (): Promise<Movie[]> => {
  try {
    const allMovies = await model.find({})
    return Promise.resolve(allMovies)
  }
  catch (err) {
    return Promise.reject(err)
  }
}

const addOne = async (movie: Movie): Promise<Movie> => {
  try {
    const movieDoc = await new model(movie).save()
    return Promise.resolve(movieDoc)
  }
  catch (err) {
    return Promise.reject(err)
  }
}

const MovieModel = {
  getAll,
  addOne
}

export { Movie, MovieModel }
