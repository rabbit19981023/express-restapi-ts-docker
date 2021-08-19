import express from 'express'
import morgan from 'morgan'
import db from './db'
import { apiRoute } from './routes'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

class Server {
    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
        this.routerRegister()
        this.dbConnect()
    }

    private config(): void {
        this.app.use(morgan('tiny')) // check all HTTP Requests received
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private routerRegister(): void {
        this.app.use('/v1/api', apiRoute)
    }

    private dbConnect() {
        db.connect()
    }
}

const server = new Server()
const PORT = process.env.PORT || 3000

server.app.listen(PORT, () => {
    console.log(`The server is running at port:${PORT}`)
})
