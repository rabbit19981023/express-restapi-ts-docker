import mongoose from 'mongoose'

export default {
    connect: function () {
        const config = {
            uri: process.env.MONGODB_URI as string,
            params: {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        }
    
        mongoose.connect(config.uri, config.params)
            .then(() => {
                console.log('Connecting to database successfully!')
            })
            .catch((err) => {
                console.error(`Connecting error!\n${err}`)
            })
    }
}
