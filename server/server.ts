import express, { Express, Response, Request } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { mongoConnect } from './src/schema/mongo.connect'
import { projectRouter } from './src/projects/projects.router'
import { userRouter } from './src/user/user.router'
const app: Express = express()

dotenv.config()
app.use(cors())

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  console.log(req)
})
app.use('/api/project', projectRouter)
app.use('api/user', userRouter)

async function startServer() {
  try {
    await mongoConnect()
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  } catch (error) {
    console.error('Error starting the server:', error)
    process.exit(1)
  }
}

startServer()
