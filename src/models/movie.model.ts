import mongoose, { Schema, Model, Document } from 'mongoose'

export interface Movie {
    name: string,
    director: string,
    language: string,
    duration: number
}

export interface MovieDoc extends Document {
    name: string,
    director: string,
    language: string,
    duration: number
}

const schema: Schema = new mongoose.Schema({
    name: String,
    director: String,
    language: String,
    duration: Number
})

const model: Model<MovieDoc> = mongoose.model('movie', schema)

export default {
    getAll: async function(): Promise<MovieDoc[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allMovies: MovieDoc[] = await model.find({ })
                resolve(allMovies)
            } catch (err) {
                console.log(err)
                reject(err)
            }
        })
    },

    addOne: async function(movie: Movie): Promise<MovieDoc> {
        return new Promise((resolve, reject) => {
            const movieDoc: MovieDoc = new model(movie)
            movieDoc.save((err: mongoose.CallbackError, movieDoc: MovieDoc) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }

                resolve(movieDoc)
            })
        })
    }
}
