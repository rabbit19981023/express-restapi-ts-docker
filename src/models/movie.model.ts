import mongoose, { Schema, Model, Document } from 'mongoose'

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
    getAll: async function() {
        try {
            const allMovies: MovieDoc[] = await model.find({ })
            return allMovies
        } catch (err) {
            return []
        }
    }
}
