import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import db from './db'
import routes from './routes'

class Server {
  private app: express.Application

  constructor() {
    this.app = express()

    this.readEnv()
        .registerMiddlewares()
        .registerRouters()
        .dbConnection()
  }

  public listen(port: number | string, callback: () => void): void {
    this.app.listen(port, callback)
  }

  private readEnv(): this {
    dotenv.config()
    return this
  }

  private registerMiddlewares(): this {
    this.app.use(morgan('tiny')) // check all HTTP Requests received
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    return this
  }

  private registerRouters(): this {
    this.app.use('/', routes)
    return this
  }

  private dbConnection(): this {
    db.connect()
    return this
  }
}

const server = new Server()
const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`The server is running at port:${PORT}`))
